import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import './index.css';

const Index = () => {
	return (
		<BrowserRouter><App className="centered" /></BrowserRouter>
	);
};


ReactDOM.render(<Index />, document.getElementById("index"));
