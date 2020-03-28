import React, { useState } from 'react';
import { Input, Form, Checkbox, Button, Row, Col } from 'antd';
import { db } from "../../stores/db"
import { Redirect } from 'react-router-dom';
export default function Register() {
    const onFinish = values => {
        if (values.password === values.passwordConfirm) {
            db.signUp(values.username, values.password,
                {
                    metadata: {
                        achievements: [],
                        email: "-1",
                        level: "1",
                        totalExp: 0,
                        expToNextLevel: 100,

                    }
                },
                (err, response) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(response);

                        setRedirect(true);
                    }
                });
        } else {
            console.log("passwords not matching");
        }
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
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}>

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

                        <Form.Item
                            label="Password"
                            name="passwordConfirm"
                            rules={[{ required: true, message: 'Please input your password!' }]}>
                            <Input.Password />
                        </Form.Item>


                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
            {redirect ? <Redirect to="/login" /> : null}

        </div>


    )
}
