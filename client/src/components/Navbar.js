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
		<Menu style={{ marginLeft: '10%', marginRight: '10%'}}
			onClick={handleClick}
			selectedKeys={[current]} 
			mode="horizontal" 
			theme={theme}>
			<Menu.Item key="app">
				<HomeOutlined />
				<Link to="/">Home</Link>
			</Menu.Item>

			<Menu.Item key="tasks">
				<SettingOutlined />
				<Link to="/tasks">Tasks</Link>
			</Menu.Item>

			<Menu.Item key="alipay">
				<AppstoreOutlined />
				<Link to="/achivements">Achivements</Link>
			</Menu.Item>

			<Menu.Item key="mail">
				<UserOutlined />
				<Link to="/profile">Profile</Link>
			</Menu.Item>

			<Menu.Item style={{ float: 'right' }} key="signup">
				<MailOutlined />
				<Link to="/register">Sign-up</Link>
			</Menu.Item>

			<Menu.Item style={{ float: 'right' }} key="login">
				<LoginOutlined/>
				<Link to="/login">Log in</Link>
			</Menu.Item>
		</Menu>
	)
}