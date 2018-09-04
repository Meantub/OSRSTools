import React from 'react';
import ReactDOM from 'react-dom';
//import Navbar from './components/Navbar';
//import Donate from './components/Donate';
import Main from './components/Main';
import './index.css';

const Index = () => {
	return (
		<div>
			<Main />
		</div>
	);
};

ReactDOM.render(<Index />, document.getElementById("index"));
