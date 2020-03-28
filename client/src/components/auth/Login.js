import React from 'react'
import { Input, Checkbox, Button, Form, Row, Col } from 'antd'

export default function Login() {
    return (
        <div className="login-page">
            <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col>
                    <Form
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

        </div>

    )
}
