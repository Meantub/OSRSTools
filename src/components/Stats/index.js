import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import axios from 'axios';

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = { userData: "", userDataJSON: {}, isLoaded: false };
	}

	componentDidMount() {
		if(localStorage.getItem('userData') === null) {
			axios.get('https://1r4u8q2qk7.execute-api.us-east-1.amazonaws.com/DEV/player?user=' + 'meantub')
				.then(result => {
					localStorage.setItem('userData', JSON.stringify(result.data));
					this.setState({ userData: JSON.stringify(result.data) });
					this.setState({ userDataJSON: JSON.parse(localStorage.getItem('userData')) });
					this.setState({ isLoaded: true });
				});
		}
		else {
			this.setState({ userData: localStorage.getItem('userData') });
			this.setState({ userDataJSON: JSON.parse(localStorage.getItem('userData')) });
			this.setState({ isLoaded: true });
		}
	}

	render() {
		var tableItems = <ReactLoading type="bars" color="#000000" height="2rem" width="2rem" />;
		if(this.state.isLoaded) {
			tableItems = Object.entries(this.state.userDataJSON.Skills).map(([key, value], id) => {
				if(id > 0) { // Gets rid of Overall level
					return (
						<li key={id}><img src={"/img/icon/skill_icon_" + key.toLowerCase() + "1.gif"} /> {key}: Level {value.level}, XP {value.xp}, Rank {value.rank}</li>
					)
				}
			});
		}
		return (
			<div>
				<h3>Stats</h3>
				<hr />
				<ul>
					{tableItems}
				</ul>
			</div>
		)
	}
}

export default Stats;
