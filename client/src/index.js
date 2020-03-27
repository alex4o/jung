import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./components/App";
import Tasks from "./components/Tasks";
import { BrowserRouter } from "react-router-dom";

import "./styles/app.less"

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";


function Home() {
	return <h2>Home</h2>;
}

function About() {
	return <h2>About</h2>;
}

function Users() {
	return <h2>Users</h2>;
}

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
					<Route path="/profile" component={About} />
					<Route path="/tasks" component={Tasks} />
					<Route path="/achivements" component={About} />
					<Route path="/" component={App} />
				</Switch>
			</div>
		</Router>
	);
}



ReactDOM.render(<Index />, document.getElementById("container"));