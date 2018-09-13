import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';

import appStyles from './App.css';
import mainStyles from './Main.css';

const App = () => {
	return (
		<div className={appStyles.centered}>
			<Header />
			<Main />
		</div>
	)
};

// Navbar as well
const Header = () => (
	<div>
		<nav className={appStyles.curvedWindow + " navbar navbar-expand-sm navbar-dark bg-dark"}>
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

const Equipment = () => (
	<div>
		<img src="../../../static/img/Equipment_slots.png" usemap="#image-map"/>

		<map name="image-map">
			<area target="" alt="Cape" title="Cape" href="" coords="51,75,15,39" shape="rect"/>
			<area target="" alt="Body" title="Body" href="" coords="56,78,92,114" shape="rect"/>
			<area target="" alt="Legs" title="Legs" href="" coords="56,118,92,154" shape="rect"/>
			<area target="" alt="Feet" title="Feet" href="" coords="56,158,92,194" shape="rect"/>
			<area target="" alt="Head" title="Head" href="" coords="56,0,92,36" shape="rect"/>
			<area target="" alt="Neck" title="Neck" href="" coords="56,39,92,75" shape="rect"/>
			<area target="" alt="Shield" title="Shield" href="" coords="112,78,148,114" shape="rect"/>
			<area target="" alt="Ammunition" title="Ammunition" href="" coords="97,39,133,75" shape="rect"/>
			<area target="" alt="Weapon" title="Weapon" href="" coords="0,78,36,114" shape="rect"/>
			<area target="" alt="Hands" title="Hands" href="" coords="0,158,36,194" shape="rect"/>
			<area target="" alt="Ring" title="Ring" href="" coords="112,158,148,194" shape="rect"/>
		</map>
	</div>
);

const About = () => (
	<div>
		<h3>About</h3>
		<hr />
		<p>I created this website so that everyone could have access to useful tools. I am a broke college student so if this tool was useful to you please turn off your ad blockers, or if you hate ads too then you can also donate to me here:</p>
		<button className="btn-primary">Insert paypal button here</button>
	</div>
);

export default App;
