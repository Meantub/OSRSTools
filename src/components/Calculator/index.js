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
				<p>The cost of each item is retrieved on a daily basis so it will probably be off by small amounts at any given time</p>
				<XPCalculator />
			</div>
		)
	}
}

export default Calculator;
