import React from "react";
import { Row, Col, Typography, Avatar, Progress, Divider } from "antd";
import { UserOutlined } from '@ant-design/icons'
export default function Profile() {
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
                            <Avatar size={128} icon={<UserOutlined />} />
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col>
                            <Typography.Text style={{ fontSize: '16pt' }} >Masov Pederasov</Typography.Text>
                        </Col>
                    </Row>
                    <Row type="flex" justify="center">

                        <Col>
                            <Typography.Text strong style={{ fontSize: '12pt' }}>Lvl. </Typography.Text>
                            <Typography.Text style={{ fontSize: '16pt' }}>23 </Typography.Text>

                        </Col>
                    </Row>
                    <Row type="flex" justify="center">
                        <Progress style={{ width: '50%' }} showInfo={false} status="active" percent={30} />
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
    );

}