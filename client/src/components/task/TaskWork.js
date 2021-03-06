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

import { db } from "../../stores/db"
import { Row, Tag, Button, Col, Card, List, PageHeader, Empty, Icon } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Loadable, usePromise } from "../../utils"

export function TaskWork() {
	let { id } = useParams();
	let document = usePromise(db.get(id))

	return <Loadable loading={document.loading}
		loaded={() =>
			<PageHeader
				title={document.value.title}
				className="site-page-header"
				subTitle={document.value.description}
				extra={[
					<Button key="participate">Participate</Button>
				]}
				tags={<Tag color="blue">Running</Tag>} >
				<Row>
                    
                    <h2>Task work</h2>
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
