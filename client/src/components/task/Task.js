import React, { useProps, useState } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useHistory,
	useParams
} from "react-router-dom";

import { db } from "../../stores/db"
import { Row, Tag, Button, Col, Card, List, PageHeader, Empty, Icon, Divider } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Loadable, usePromise } from "../../utils"
import ClassificationTask from './ClassificationTask'

const taskViewHashMap = {
	"classification" : (props) => <ClassificationTask problem={props}/>,
}

export function Task() {
	let { id } = useParams()
	let document = usePromise(db.get(id))
	let [ working, setWorking ] = useState(false)

	let participate = () => {
		setWorking(!working)
	}

	// Get this from the query of the task
	let type = "classification"

	return <Loadable loading={document.loading}
		loaded={() =>
			<PageHeader
				title={document.value.title}
				className="site-page-header"
				subTitle={document.value.description}
				extra={[
					<Button
						onClick={participate} 
						key="participate"> 
						{!working ? "Participate" : "Quit" }
					</Button>
				]}
				tags={<Tag color="blue">Running</Tag>} >
				<Row justify='center'>
					{document.value._attachments && !working ? 
                    <img
						style={{ objectFit: "cover", flex: 1, width: "100%" }}
						alt="logo"
						src={`http://fortress88.servebeer.com:5984/jung/${id}/${Object.keys(document.value._attachments)[0]}`}
					/> : <></>}
					{ working ? taskViewHashMap[type](document.value) : <></>}
				</Row>
				
			</PageHeader>
		} />
}
