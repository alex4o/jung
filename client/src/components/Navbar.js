import React, { useState } from 'react';
import { Menu, Col, Row, Progress } from 'antd';
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

	let [current, setCurrent] = useState('')
	let [theme, setTheme] = useState("dark")

	/** Todo user progress stuff */
	const { appStore } = useStores()
	const { username, level, progress, loggedIn } = useUserData();

	let handleClick = (e) => {
		setCurrent(e.key)
	};

	let stateNavbarManager = { display: loggedIn ? "" : "none" }
	let logoutState = { display: loggedIn ? "none" : "" }

	return (<>
			<Menu style={{ marginLeft: '10%', marginRight: '10%', display: "flex" }}
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


				<Menu.Item style={{ marginLeft: "auto", ...logoutState }} key="login">
					<LoginOutlined />
					<Link to="/login">Log in</Link>
				</Menu.Item>

				<Menu.Item style={{ ...logoutState }} key="signup">
					<MailOutlined />
					<Link to="/register">Sign-up</Link>
				</Menu.Item>


				<Menu.Item style={{ marginLeft: "auto", ...stateNavbarManager }}>
					<UserOutlined />
					<div style= {{ display: "inline-flex", verticalAlign: "bottom", height: "64px"  }}>
						<div style={{ display: "flex", flexDirection: "column", position: "relative", lineHeight: "16px", margin: "auto" }}>
							<span>{username}</span>
							<span>lvl: {level}</span>
						</div>
					</div>
				</Menu.Item>

				<Menu.Item style={{ ...stateNavbarManager }} key="logout">
					<MailOutlined />
					<Link onClick={() => appStore.logout()}>Log out</Link>
				</Menu.Item>
			</Menu>

			<Progress 
				strokeLinecap="square"
				className="levelProgress" 
				style={{ position: "absolute", zIndex: 100, left:0, top: '50px', ...stateNavbarManager }} 
				status="active" strokeWidth={4} percent={100 * progress}
				size="default" showInfo={false} />
		</>
	)
}