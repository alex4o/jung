import React, { Suspense } from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import Profile from "./components/Profile";
import Achievements from "./components/achievementItems/Achievements";
import Tasks from "./components/Tasks";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import { BrowserRouter } from "react-router-dom";

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
				<nav>

					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<li>
							<Link to="/tasks">Tasks</Link>
						</li>
						<li>
							<Link to="/achivements">Achivements</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path="/profile" component={Profile} />
					<Route path="/tasks" component={Tasks} />
					<Route path="/achivements" component={Achievements} />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />

					<Route path="/" >

						<App />

					</Route>
				</Switch>
			</div>
		</Router>
	);
}



ReactDOM.render(<Index />, document.getElementById("container"));