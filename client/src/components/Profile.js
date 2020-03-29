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
        level: appStore.level,
        progress: appStore.progress
    }))

}

function achievementList(list) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {list.map((el, i) => <AchievementCard key={i} data={el} />)}
        </div>
    );
}
function AchievementSegment({ loading, value }) {
    return <>
        <Row>
            {achievementList(loading ? [] : value)}
        </Row>
    </>
}
export default function Profile() {

    const { username, level, progress } = useUserData();

    let userAvatar = "https://pngimage.net/wp-content/uploads/2018/05/default-profile-pic-png-8.png"
    let defaultAvatar = "https://pngimage.net/wp-content/uploads/2018/05/default-profile-pic-png-8.png"

    const data = [
        {
            title: 'Alexander Bonin',
        },
        {
            title: 'Nikolay Pashov',
        },
        {
            title: 'Viktor Velev',
        },
        {
            title: 'Lyuben Todorov',
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
                            <Avatar size={128} src={userAvatar} />
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
                            <Typography.Text style={{ fontSize: '16pt' }}>{level}</Typography.Text>

                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Progress style={{ width: '50%' }} strokeColor={{
                            '0%': '#108ee9',
                            '100%': '#87d068',
                        }} showInfo={false} status="active" percent={100 * progress} />
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
                                                        avatar={<Avatar src={defaultAvatar} />}
                                                        title={<Typography.Text strong style={{ fontSize: '18pt' }}>{item.title}</Typography.Text>}
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
                                <AchievementSegment loading={loading} value={value} />

                            </Row>

                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};