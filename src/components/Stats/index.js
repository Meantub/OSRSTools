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
							<div style={{width: "25px", display: "inline-block"}}><img src={'/img/icon/' + row.value + '_icon.png'} /></div> {row.value}
						</div>
					),
					width: 200
				},
				{
					Header: "Level",
					accessor: "level",
					Cell: row => (
						<div className="progress">
							<div className={"progress-bar" + (row.value > 25 ? (row.value > 50 ? " bg-success" : " bg-warning") : " bg-danger")} role="progressbar" style={{ width: row.value + "%" }} aria-valuenow={row.value + "%"} aria-valuemin="0%" aria-valuemax="99%">{row.value}</div>
						</div>
					),
					width: 400
				},
				{
					Header: "XP",
					accessor: "xp",
					Cell: row => (
						<div>{row.value.toLocaleString()}</div>
					)
				},
				{
					Header: "Rank",
					accessor: "rank",
					Cell: row => (
						<div>{row.value.toLocaleString()}</div>
					)
				}
			]} className="-striped -highlight" showPagination={false} defaultPageSize={-1} defaultSorted={[{ id: "skill", desc: false }]} defaultSortDesc={true} getTrProps={(state, rowInfo, column) => {
				return {
					className: rowInfo.row.level < 5 ? "text-muted" : ""
				}
			}} />;
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
