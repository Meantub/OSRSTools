import style from './Navbar.css';
import React from 'react';
import classNames from 'classNames';

const Navbar = () => {
	const navbarStyles = classNames([style.stickySidebar], 'col-2', 'px-1', 'bg-dark');
	return (
		<div className={navbarStyles}>
			<div className="py-2 sticky-top">
				<div className="nav flex-column">
					<a href="" className="nav-link">Sidebar</a>
					<a href="" className="nav-link">Link</a>
					<a href="" className="nav-link">Link</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
