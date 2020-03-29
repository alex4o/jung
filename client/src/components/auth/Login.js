import React, { useState } from 'react'
import { Input, Checkbox, Button, Form, Row, Col } from 'antd'
import { Redirect } from 'react-router-dom';
import useStores from "../../hooks/useStores";
import { useObserver } from 'mobx-react';


export default function Login() {

    const { appStore } = useStores()

    const onFinish = values => {

        console.log("Login: ", values)
        appStore.login(values.username, values.password)
        setRedirect(true);
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
