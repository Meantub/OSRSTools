import React, { Component } from 'react';
import style from './Main.css'

import Navbar from '../Navbar';
import Donate from '../Donate';

const Main = () => {
	return (
		<div id="Main" className={style.centered}>
			<Navbar />
		</div>
	)
}

export default Main;
