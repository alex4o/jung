import React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import Profile from "./components/Profile";
import AchievementSegment from "./components/achievementItems/AchievementSegment";
import Tasks from "./components/Tasks";
import LandingPage from "./components/homepage/LandingPage"
import Navbar from "./components/Navbar"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"


import "./styles/app.less"

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import { Layout, Col, Row } from "antd";

export default function Index() {


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
						<Col span={24} md={20} lg={18} xl={12} style={{ padding: "25px", background: "#FEFEFE" }}>
							<Switch>
								<Route path="/profile" component={Profile} />
								<Route path="/tasks" component={Tasks} />
								<Route path="/achievements" component={AchievementSegment} />
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