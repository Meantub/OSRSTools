import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar'
import Donate from './components/Donate'

const Index = () => {
	return (
		<div className="container-fluid">
			<div className="row">
				<Navbar />
				<div className="col" id="main">
					<Donate />
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<Index />, document.getElementById("index"));
