import React, { Component } from 'react';
import XPCalculator from './XPCalculator';


class Calculator extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<h3>Calculator</h3>
				<hr />
				<XPCalculator />
			</div>
		)
	}
}

export default Calculator;
