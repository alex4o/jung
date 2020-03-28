import React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import Profile from "./components/Profile";
import Achievements from "./components/achievementItems/Achievements";
import Tasks from "./components/Tasks";
import LandingPage from "./components/homepage/LandingPage"
import Navbar from "./components/Navbar"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"


import "./styles/app.less"

import {
	HashRouter as Router,
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
				<Layout.Content style={{ padding: '0 50px' }}>
					<Row justify="center">
						<Col>
							<Switch>
								<Route path="/profile" component={Profile} />
								<Route path="/tasks" component={Tasks} />
								<Route path="/achivements" component={Achievements} />
								<Route path="/home" component={LandingPage} />
								<Route path="/login" component={Login}></Route>
								<Route path="/register" component={Register}></Route>

								<Route path="/" >
									<App />
								</Route>
							</Switch>
						</Col>
					</Row>
				</Layout.Content>
			</Layout>
		</Router>
	);
}



ReactDOM.render(<Index />, document.getElementById("container"));