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

import { tasks } from "../../stores/db"
import { Row, Tag, Button, Col, Card, List, PageHeader, Empty, Icon } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Loadable, usePromise } from "../../utils"



export function Task() {
	let { id } = useParams();
	let document = usePromise(tasks.get(id))
	let [ working, setWorking ] = useState(false)

	let participate = () => {
		setWorking(!working)
	}

	let history = useHistory()
	let { path, url } = useRouteMatch()

	return <Loadable loading={document.loading}
		loaded={() =>
			<PageHeader
				title={document.value.title}
				className="site-page-header"
				subTitle={document.value.description}
				extra={[
					<Button 
						style={{color: !working ? "#1890ff" : "#760D14"}} 
						onClick={participate} 
						key="participate"> 
						{!working ? "Participate" : "Quit" }
					</Button>
				]}
				tags={<Tag color="blue">Running</Tag>} >
				<Row>
					{document.value._attachments ? 
                    <img
						style={{ objectFit: "cover", flex: 1, width: "100%" }}
						alt="logo"
						src={`http://fortress88.servebeer.com:5984/tasks/${id}/${Object.keys(document.value._attachments)[0]}`}
					/> : <></>}
				</Row>
				
			</PageHeader>
		} />
}
