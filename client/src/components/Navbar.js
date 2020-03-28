import React, { useState } from 'react';
import { Menu, Col, Row } from 'antd';
import { Link } from 'react-router-dom'

import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  HomeOutlined,
  LoginOutlined,
  UserOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default function Navbar() {

	let [ current, setCurrent ] = useState('mail')
	let [ theme, setTheme ] = useState("dark")

	let handleClick = (e) => {
		setCurrent(e.key)
	};
	
	return (
		<Row style={{ borderBottom: "1px solid #f0f0f0", background: "#001529" }}>
			<Col span={12}>
				<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme={theme}>
					<Menu.Item key="app">
						<HomeOutlined />
						<Link to="/">Home</Link>
					</Menu.Item>

					<SubMenu title = {
							<span className="submenu-title-wrapper">
								<SettingOutlined />
								<Link to="/tasks">Tasks</Link>
							</span>
						}>
						<Menu.ItemGroup title="Item 1">
							<Menu.Item key="setting:1">Test 1</Menu.Item>
							<Menu.Item key="setting:2">Option 2</Menu.Item>
						</Menu.ItemGroup>
						<Menu.ItemGroup title="Item 2">
							<Menu.Item key="setting:3">Option 3</Menu.Item>
							<Menu.Item key="setting:4">Option 4</Menu.Item>
						</Menu.ItemGroup>
					</SubMenu>

					<Menu.Item key="alipay">
						<AppstoreOutlined/>
						<Link to="/achivements">Achivements</Link>
					</Menu.Item>

					<Menu.Item key="mail">
						<UserOutlined />
						<Link to="/profile">Profile</Link>
					</Menu.Item>
				</Menu>
			</Col>
			<Col span={6} push={6}>
				<Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme={theme}>
					<Menu.Item key="signup">
						<MailOutlined />
						<Link to="#">Sign-up</Link>
					</Menu.Item>

					<Menu.Item key="login">
						<LoginOutlined/>
						<Link to="#">Log in.</Link>
					</Menu.Item>
				</Menu>
			</Col>
		</Row>
	)
}