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


export default function Index() {


	return (
		<Router>
			<div>
				<Navbar />
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
			</div>
		</Router>
	);
}



ReactDOM.render(<Index />, document.getElementById("container"));