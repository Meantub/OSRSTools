import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import ReactTable from 'react-table';
import axios from 'axios';

class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = { userDataJSON: {}, isLoaded: false };
	}

	componentDidMount() {
		if(localStorage.getItem('userData') === null) {
			axios.get('https://1r4u8q2qk7.execute-api.us-east-1.amazonaws.com/DEV/player?user=' + 'meantub')
				.then(result => {
					localStorage.setItem('userData', JSON.stringify(result.data));
					this.setState({ userDataJSON: JSON.parse(localStorage.getItem('userData')) });
					this.setState({ isLoaded: true });
				});
		}
		else {
			this.setState({ userDataJSON: JSON.parse(localStorage.getItem('userData')) });
			this.setState({ isLoaded: true });
		}
	}

	render() {
		var values = "";
		var table = null;
		if(this.state.userDataJSON.Skills!==null && this.state.userDataJSON.Skills!==undefined) {
			delete(this.state.userDataJSON.Skills.Overall);
			values = Object.entries(this.state.userDataJSON.Skills)
				.map(([key,value], id) => {
					return {
						skill: key, 
						level: value.level,
						xp: value.xp,
						rank: value.rank
					};
				});
			table = <ReactTable data={values} columns={[
				{
					Header: "Skill",
					accessor: "skill",
					Cell: row => (
						<div>
							<img src={'/img/icon/' + row.value + '_icon.png'} /> {row.value}
						</div>
					),
					width: 200
				},
				{
					Header: "Level",
					accessor: "level"
				},
				{
					Header: "XP",
					accessor: "xp"
				},
				{
					Header: "Rank",
					accessor: "rank"
				}
			]} className="-striped -highlight" showPagination={false} defaultPageSize={-1} />;
		}
		return (
			<div>
				<h3>Stats</h3>
				<hr />
				{table===null ? <ReactLoading type="bars" color="#878787" height="8rem" width="8rem" /> : table}
			</div>
		)
	}
}

export default Stats;
