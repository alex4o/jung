import React, { useState } from "react";
import { Row, Col, Divider, Progress, PageHeader, Popover } from "antd";
import AchievementCard from './AchievementCard'

import { achievements } from "../../stores/db"
import { Loadable, usePromise } from "../../utils"

function achievementList(list) {
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{list.map((el, i) => <AchievementCard key={i} data={el} />)}
		</div>
	);
}

function achievementStats(data) {
	let mockStats = [ 34, 54, 76, 54, 10 ]
	let strokeNum = 20
	let style = { margin: "10px"}
	
	return(
		<div>
			<Popover placement="top" title={"Activity"} content={"You are doing great. Keep going!"}>
				<Progress percent={mockStats[0]} 
					strokeWidth={strokeNum} 
					strokeColor={{ '0%': '#108ee9', '100%': '#87d068' }} 
					style={style}
					status="active" />
			</Popover>

			<Progress
				percent={mockStats[1]}
				strokeWidth={strokeNum}
				strokeColor={{ '0%': '#38ffb9', '100%': '#00a170' }} 
				style={style} />

			<Progress 
				percent={mockStats[2]}
				style={style}
				strokeWidth={strokeNum} 
				showInfo />

			<Progress
				percent={mockStats[3]} 
				strokeWidth={strokeNum} 
				style={style} />

			<Progress
				percent={mockStats[4]} 
				strokeWidth={strokeNum} 
				style={style} />
		</div>
	);
}

export default function AchievementSegment() {

	let { loading, value } = usePromise(achievements.allDocs({ include_docs: true }).then(result => result.rows.map(row => row.doc)));
	console.log(value)
	return <Loadable loading={loading} loaded={() => <>
		<Row gutter={[16, 32]}>
			<Col span={12}>
				<PageHeader title="Quests"/>
			</Col>
			<Col span={12} style={{ 
				borderLeft: '1px #DDD solid' }}>
				<PageHeader title="Statistics"/>
				{achievementStats()}
				<Divider/>
			</Col>
		</Row>

		<Row gutter={[16, 32]}>
			<Col span={12}/>

			<Col span={12} style={{ borderLeft: '1px #DDD solid' }}>
				<PageHeader title="Achievements"/>
				{achievementList(loading ? [] : value)}
			</Col>
		</Row>
	</>
	} />
}