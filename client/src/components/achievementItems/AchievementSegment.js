import React, { useState } from "react";
import { Row, Col, Divider, Progress, PageHeader, Popover, Layout} from "antd";

const { Header, Footer, Sider, Content } = Layout;

import AchievementCard from './AchievementCard'
import Quest from './Quest'

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
	let mockQuests = [{
		title: "Drastic measures",
		description: "Buy 15 pianos!",
		target: 15,
		progress: 5,
		reward: 2500,
		requiredLvl: 1
	}, {
		title: "Drastic measures",
		description: "Buy 16 pianos!",
		target: 16,
		progress: 5,
		reward: 2501,
		requiredLvl: 1
	}, {
		title: "Drastic measures",
		description: "Buy 17 pianos!",
		target: 17,
		progress: 5,
		reward: 2502,
		requiredLvl: 1
	}, {
		title: "Drastic measures",
		description: "Buy 12 pianos!",
		target: 12,
		progress: 5,
		reward: 2503,
		requiredLvl: 1
	}, {
		title: "Drastic measures",
		description: "Buy 10 pianos!",
		target: 10,
		progress: 5,
		reward: 2504,
		requiredLvl: 1
	}]

	let [ list, setList ] = useState(mockQuests)

	return list.map((el, i) => <Quest key={i} {...el} />)
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

	let { loading, value } = usePromise(achievements.allDocs({ include_docs: true }).then(result => result.rows.map(row => row.doc)));

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