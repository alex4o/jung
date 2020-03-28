import React, { useState } from 'react'
import { Input, Checkbox, Button, Form, Row, Col } from 'antd'
import db from "../../stores/db"
import { Redirect } from 'react-router-dom';
export default function Login() {
    const onFinish = values => {
        db.logIn(values.username, values.password, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                setRedirect(true);
                console.log("yeay");
            }
        });

    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const [redirect, setRedirect] = useState(false);

    return (
        <div className="login-page">
            <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        name="basic"
                        initialValues={{ remember: true }}>

                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

            {redirect ? <Redirect to="/profile" /> : null}
        </div>

    )
}
