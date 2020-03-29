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

import { observer, useObserver } from "mobx-react";
import useStores from "../hooks/useStores";

function useUserData() {
    const { appStore } = useStores()

    return useObserver(() => ({
        username: appStore.username,
        level: appStore.level,
		progress: appStore.progress,
		loggedIn: appStore.loggedIn
    }))
}

export default function Navbar() {

	let [ current, setCurrent ] = useState('')
	let [ theme, setTheme ] = useState("dark")

	/** Todo user progress stuff */
	const { appStore } = useStores()
	const { username, level, progress, loggedIn } = useUserData();

	let handleClick = (e) => {
		setCurrent(e.key)
	};

	let stateNavbarManager = {display: loggedIn ? "" : "none" }
	let logoutState = { display: loggedIn ? "none" : "" }
	
	return (
		<Menu style={{ marginLeft: '10%', marginRight: '10%'}}
			onClick={handleClick}
			selectedKeys={[current]} 
			mode="horizontal"
			theme={theme}>
				
			<Menu.Item key="home">
				<HomeOutlined />
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item style={stateNavbarManager} key="tasks">
				<SettingOutlined />
				<Link to="/tasks">Tasks</Link>
			</Menu.Item> 

				<Menu.Item style={stateNavbarManager} key="achievements">
					<AppstoreOutlined />
					<Link to="/achievements">Achievements</Link>
				</Menu.Item>

				<Menu.Item style={stateNavbarManager} key="profile">
					<UserOutlined />
					<Link to="/profile">Profile</Link>
				</Menu.Item>

				<Menu.Item style={{ float: 'right', ...logoutState }} key="signup">
					<MailOutlined />
					<Link to="/register">Sign-up</Link>
				</Menu.Item>

				<Menu.Item style={{ float: 'right', ...logoutState }} key="login">
					<LoginOutlined/>
					<Link to="/login">Log in</Link>
				</Menu.Item>

				<Menu.Item style={{ float: 'right', ...stateNavbarManager }} key="logout">
					<MailOutlined />
					<Link onClick={() => appStore.logout()}>Log out</Link>
				</Menu.Item>

		</Menu>
	)
}