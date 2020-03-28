import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch
} from "react-router-dom";

import { usePromise } from "../utils"

import { tasks } from "../stores/db"
import { Card, List } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


const IconText = ({ icon, text }) => (
	<span>
	  {React.createElement(icon, { style: { marginRight: 8 } })}
	  {text}
	</span>
  );

function Task() {

	return <div>sth</div>
}

function TaskList() {
	let docs = usePromise(tasks.allDocs({ include_docs: true }))
	console.log(docs)
	return (
		<List itemLayout="vertical" loading={docs.loading} dataSource={docs.loading ? [] : docs.value.rows} active renderItem={it => <List.Item 
 		key={it.id} actions={[
			<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
			<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
			<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
		]}>
			<List.Item.Meta
				// avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
				title={it.doc.title}
				description={it.doc.description}
			/>
		</List.Item>
		} />)
}

export default function Tasks() {
	// The `path` lets us build <Route> paths that are
	// relative to the parent route, while the `url` lets
	// us build relative links.
	let { path, url } = useRouteMatch();


	return (
		<div>
			{/* <h2>Tasks</h2> */}
			<Switch>
				<Route exact path={path}>
					<TaskList />
				</Route>
				<Route path={`${path}/:topicId`}>
					<Task />
				</Route>
			</Switch>
		</div>
	);
}
