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

import { tasks } from "../../stores/db"
import { Row, Tag, Button, Col, Card, List, PageHeader, Empty, Icon } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Loadable, usePromise } from "../../utils"

export const IconText = ({ icon, text }) => (
    <span>
		{React.createElement(icon, {style: {marginRight: 8}})}
		{text}
	</span>
);

export function Task() {
	let { id } = useParams();
	let document = usePromise(tasks.get(id))

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
