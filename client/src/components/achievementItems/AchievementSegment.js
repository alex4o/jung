import React, { useState } from "react";
import { Row, Col, Divider } from "antd";
import AchievementCard from './AchievementCard'

function achievementList(list) {
	console.log(list)
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{list.map((el, i) =>  <AchievementCard key={i} data={el}/>)}
		</div>
	);

}

export default function AchievementSegment() {
	
	/**
	 * Achievement JSON: 
	 * 
	 */
	let mockData = [
		{
			"icon": "fly",
			"type":"",
			"completed": true,
			"description": "Use 20 different toilets.",
			"title": "Amusement"
		}, {
			"icon": "car",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "video",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "car",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "fly",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "video",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "fly",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "car",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "video",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}, {
			"icon": "car",
			"type":"",
			"completed": false,
			"description": "Create a rocket ship and fly to space.",
			"title": "Sophistication"
		}
	]

	const [ list, setList ] = useState(mockData)


	return <div>
		<Row gutter={[16, 32]}>
			<Col span={12} />
		</Row>

		<Row gutter={[16, 32]}>
			<Col span={12}/>
			
			<Col span={12} style={{borderLeft: '1px #DDD solid'}}> 
				{achievementList(list)}
			</Col>
		</Row>
	</div>
		
}