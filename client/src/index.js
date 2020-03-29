import React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import Profile from "./components/Profile";
import AchievementPage from "./components/achievementItems/AchievementSegment";
import Tasks from "./components/Tasks";
import LandingPage from "./components/homepage/LandingPage"
import Navbar from "./components/Navbar"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

import { observer, useObserver } from "mobx-react";
import useStores from "./hooks/useStores";

import "./styles/app.less"

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import { Layout, Col, Row } from "antd";
import { Provider, useLocalStore } from "mobx-react";

function useUserData() {
    const { appStore } = useStores()

    return useObserver(() => ({
		loggedIn: appStore.loggedIn
    }))
}

export default function Index() {

	const { loggedIn } = useUserData()

	return (
		<Router>
			<Layout>
				<Layout.Header>
					<Navbar />
				</Layout.Header>
				<Layout.Content>
					<Switch>
						<Route exact path="/" component={LandingPage} />
						<Route></Route>
					</Switch>
					<Row justify="center">
						<Col span={24} md={20} lg={18} xl={12} style={{ backgroundColor: "#fefefe", padding: "25px"}}>
							<Switch>
								<Route path="/profile" component={loggedIn ? Profile : Login} />
								<Route path="/tasks" component={loggedIn ? Tasks : Login} />
								<Route path="/achievements" component={loggedIn ? AchievementPage : Login} />
								<Route path="/login" component={Login}/>
								<Route path="/register" component={Register}/>
								<Route path="/" component={App} />
							</Switch>
						</Col>
					</Row>
				</Layout.Content>
			</Layout>
		</Router>
	);
}



ReactDOM.render(<Index />, document.getElementById("container"));