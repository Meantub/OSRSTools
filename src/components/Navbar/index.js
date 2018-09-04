import style from './Navbar.css';
import React from 'react';

const Navbar = () => {
	return (
		<div id="Navbar">
			<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Expand at sm</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarsExample03">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar;
