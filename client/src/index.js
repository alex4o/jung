import React, { Suspense } from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import Profile from "./components/Profile";
import Achievements from "./components/achievementItems/Achievements";
import Tasks from "./components/Tasks";
import LandingPage from "./components/homepage/LandingPage"
import Navbar from "./components/Navbar"

import "./styles/app.less"

import {
	HashRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


export default function Index() {


	return (
		<Router>
			<div>
				<Navbar/>
				<Switch>
					<Route path="/profile" component={Profile} />
					<Route path="/tasks" component={Tasks} />
					<Route path="/achivements" component={Achievements} />
					<Route path="/home" component={LandingPage}/>
					<Route path="/" >
						<App />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}



ReactDOM.render(<Index />, document.getElementById("container"));