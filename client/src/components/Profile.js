import React, { useState } from "react";
import { Row, Col, Typography, Avatar, Progress, Divider } from "antd";
import { UserOutlined } from '@ant-design/icons'
import { db } from "../stores/db"
import { observer, useObserver } from "mobx-react";
import useStores from "../hooks/useStores";


function useUserData() {
    const { appStore } = useStores()

    return useObserver(() => ({
        username: appStore.username,
    }))

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
    return (
        <div className="profile-page">
            <Row type="flex" justify="center" align="top" style={{ minHeight: '100vh', backgroundColor: '#fefefe', padding: '50px', borderRadius: '25px' }}>
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
                        <Col>
                            <Typography.Title type="secondary" level={3}>Achievements</Typography.Title>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};