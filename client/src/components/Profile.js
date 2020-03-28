import React, { useState } from "react";
import { Row, Col, Typography, Avatar, Progress, Divider, List, PageHeader } from "antd";
import { UserOutlined, SettingFilled } from '@ant-design/icons'
import { db } from "../stores/db"
import { observer, useObserver } from "mobx-react";
import useStores from "../hooks/useStores";
import { usePromise } from "../utils";
import AchievementCard from "./achievementItems/AchievementCard";


function useUserData() {
    const { appStore } = useStores()

    return useObserver(() => ({
        username: appStore.username,
    }))

}


function achievementList(list) {
	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{list.map((el, i) => <AchievementCard key={i} data={el} />)}
		</div>
	);
}
function AchievementSegment({loading, value}) {
	return <>
		<Row>
			{achievementList(loading ? [] : value)}
		</Row>
	</>
}
export default function Profile() {

    const { username } = useUserData();

    let [userInfo, setUserInfo] = useState({});

    console.log(username)
    if (!userInfo.level) {

        db.getUser(username, (err, res) => {
            if (err) {
                console.log(err);

            } else {
                console.log(res);
                setUserInfo({
                    level: res.level,
                    progress: res.totalExp / res.expToNextLevel + 1,

                })
            }
        })
    }

    const data = [
        {
            title: 'Bashar Al Asad',
        },
        {
            title: 'Ivo Ushev',
        },
        {
            title: 'Karaman Kurev',
        },
        {
            title: 'Doncho Minkov',
        },
    ];

	let { loading, value } = usePromise(db.query("tables/achievement-view", { include_docs: true }).then(result => result.rows.map(row => row.doc)));

    return (
        <div className="profile-page">
            <Row justify="end">

                <SettingFilled style={{ fontSize: '24pt' }} onClick={() => {

                    console.log(":)");
                }} />
            </Row>

            <Row type="flex" justify="center" align="top" style={{ minHeight: '100vh', backgroundColor: '#fefefe', padding: '25px', borderRadius: '25px' }}>
                <Col style={{ width: '100%' }}>

                    <Row type="flex" justify="center">
                        <Col>
                            <Typography.Title type="secondary" level={2} >Your Profile</Typography.Title>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col>
                            <Avatar size={128} src="https://ca.slack-edge.com/T0103TLKJBC-U010XLC1A72-eb2c9525d2f0-512" />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col>
                            <Typography.Text style={{ fontSize: '16pt' }} >{username}</Typography.Text>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">

                        <Col>
                            <Typography.Text strong style={{ fontSize: '12pt' }}>Lvl. </Typography.Text>
                            <Typography.Text style={{ fontSize: '16pt' }}>{userInfo.level}</Typography.Text>

                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Progress style={{ width: '50%' }} showInfo={false} status="active" percent={userInfo.progress} />
                    </Row>
                    <Divider />
                    <Row type="flex" justify="start">
                        <Col span={12}>
                            <Row justify="center">
                                <Typography.Title type="secondary" level={3}>Network Leaderboard</Typography.Title>
                            </Row>
                            <Row>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={(item, index) => (
                                        <Row align="middle">
                                            <Col style={{ fontSize: '16pt', marginRight: '20px' }} >{index + 1}.</Col>
                                            <Col>

                                                <List.Item>
                                                    <List.Item.Meta
                                                        avatar={<Avatar src="https://ca.slack-edge.com/T0103TLKJBC-U010XLC1A72-eb2c9525d2f0-512" />}
                                                        title={<Typography.Text strong style = {{fontSize:'18pt'}}>{item.title}</Typography.Text>}
                                                        description="Achiever"
                                                    />
                                                </List.Item>
                                            </Col>
                                        </Row>
                                    )}
                                />
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row justify="center">
                                <Typography.Title type="secondary" level={3}>Highest Achievements</Typography.Title>
                                <AchievementSegment loading={loading} value={value}/>

                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};