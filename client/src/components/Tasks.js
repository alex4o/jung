import React, { useProps } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useHistory,
	useParams
} from "react-router-dom";

import { usePromise } from "../utils"
import { Task, IconText } from './task/Task'

import { tasks } from "../stores/db"
import { Row, Tag, Button, Col, Card, List, PageHeader, Empty, Icon } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

import { Loadable } from "../utils"

function TaskList() {

	let docs = usePromise(tasks.allDocs({ include_docs: true }))
	let history = useHistory();

	console.log(docs)
	return (
		<List itemLayout="vertical" loading={docs.loading} dataSource={docs.loading ? [] : docs.value.rows} active="true" renderItem={it => <List.Item
			style={{ boxSizing: "border-box", flex: "1" }}
			onClick={() => history.push(`/tasks/${it.id}`)}
			key={it.id} actions={[
				<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
				<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
				<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
			]}
			extra={
				it.doc._attachments ? <img
					style={{ objectFit: "cover", width: 260, height: 140 }}
					alt="logo"
					src={`http://fortress88.servebeer.com:5984/tasks/${it.id}/${Object.keys(it.doc._attachments)[0]}`}
				/> : <Empty style={{ width: 260, height: 140 }}></Empty>
			}
		>
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
				<Route path={`${path}/:id`} component={Task} />
			</Switch>
		</div>
	);
}
