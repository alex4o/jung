import React, { useState } from "react";
import { Row, Col, Divider, Progress, PageHeader, Popover, Layout} from "antd";

const { Header, Footer, Sider, Content } = Layout;

import AchievementCard from './AchievementCard'
import Quest from './Quest'

import { db } from "../../stores/db"
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
	let style = { margin: "10px" }
	
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

function questsList() {
	/**
	 * Quest JSON
	 * {
	 *     "title": "",
	 *     "description": "",
	 *     "targetNum": 0,
	 *     "progress": X,
	 *     "reward": 0
	 *     "requiredLvl": 0
	 * }
	 */

	let { loading, value } = usePromise(db.query("tables/quest-view", { include_docs: true }).then(result => result.rows.map(row => row.doc)));

	return loading ? [] : value.map((el, i) => <Quest key={i} {...el} />)
}

function QuestSegment() {
	return <>
		<PageHeader title="Quests"/>
		{questsList()}
	</>
}

function AchievementSegment({loading, value}) {
	return <>
		<Row>
			<PageHeader title="Achievements"/>
			{achievementList(loading ? [] : value)}
		</Row>
	</>
}

function StatisticsSegment() {
	return <>
		<PageHeader title="Statistics"/>
		{achievementStats()}
	</>
}

export default function AchievementPage() {

	let { loading, value } = usePromise(db.query("tables/achievement-view", { include_docs: true }).then(result => result.rows.map(row => row.doc)));


	return <Loadable loading={loading} loaded={() => <>
			<Row>
				<Col className="questSegment" span={12}>
					<QuestSegment/>
				</Col>
				<Col span={12} style={{ borderLeft: '1px #DDD solid' }}>
					<StatisticsSegment/>			
					<AchievementSegment loading={loading} value={value}/>
				</Col>
			</Row>
		</>
	} />
}