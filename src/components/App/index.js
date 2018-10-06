import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

// Classes/pages
import Equipment from '../Equipment';
import Calculator from '../Calculator';
import Stats from '../Stats';

// Stylesheets
import appStyles from './App.css';
import mainStyles from './Main.css';

// Images
import statsImage from '../../static/img/Stats_icon.png';

const App = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-2"></div>
				<div className="col-8">
					<Header />
					<Main />
				</div>
				<div className="col-2"></div>
			</div>
		</div>
	)
};

// Navbar as well
const Header = () => (
	<div>
		<nav className={"navbar navbar-expand-sm navbar-dark bg-dark"}>
			<Link className="navbar-brand" to="/">OSRSTools</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarsExample03">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink exact to="/" className="nav-link" activeClassName="nav-link active">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/about" className="nav-link" activeClassName="nav-link active">About</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/equipment" className="nav-link" activeClassName="nav-link active">Equipment</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/calculator" className="nav-link" activeClassName="nav-link active">Calculators</NavLink>
					</li>
				</ul>
				<ul className="navbar-nav">
					<li className="nav-item my-2 my-lg-0">
						<NavLink exact to="/stats" className="nav-link" activeClassName="nav-link active">Stats <img src={statsImage} alt="Stats" /></NavLink>
					</li>
				</ul>
			</div>
		</nav>
	</div>
);

const Main = () => (
	<div className={mainStyles.main}>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/equipment" component={Equipment} />
			<Route path="/calculator" component={Calculator} />
			<Route path="/stats" component={Stats} />
		</Switch>
	</div>
);

const Home = () => (
	<div>
		<h3>Home</h3>
		<hr />
		<p></p>
	</div>
);

const About = () => (
	<div>
		<h3>About</h3>
		<hr />
		<p>I created this website so that everyone could have access to useful tools. I am a broke college student so if this tool was useful to you please turn off your ad blockers as it is is the only way that I can pay for this website, as of right now</p>
	</div>
);

export default App;
