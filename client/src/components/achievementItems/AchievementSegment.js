import React, { useState } from "react";
import { Row, Col, Divider } from "antd";
import AchievementCard from './AchievementCard'

import { achievements } from "../../stores/db"
import { Loadable, usePromise } from "../../utils"

function achievementList(list) {
	console.log(list)
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{list.map((el, i) => <AchievementCard key={i} data={el} />)}
		</div>
	);

}

export default function AchievementSegment() {

	let { loading, value } = usePromise(achievements.allDocs({ include_docs: true }).then(result => result.rows.map(row => row.doc)));
	console.log(value)
	return <Loadable loading={loading} loaded={() => <>
		<Row gutter={[16, 32]}>
			<Col span={12} />
		</Row>

		<Row gutter={[16, 32]}>
			<Col span={12} />

			<Col span={12} style={{ borderLeft: '1px #DDD solid' }}>
				{achievementList(loading ? [] : value)}
			</Col>
		</Row>
	</>
	} />
}