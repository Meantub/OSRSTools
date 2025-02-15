import React, { Component } from "react";
import ReactTable from "react-table";
import ReactLoading from "react-loading";

export default class XPCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      columns: [
        {
          Header: "Level",
          accessor: "level"
        },
        {
          Header: props.action == true ? "Action" : "Item",
          accessor: props.action == true ? "action" : "item"
        },
        {
          Header: "XP",
          accessor: "xp"
        },
        {
          Header: "Quantity",
          accessor: "quantity"
        },
        {
          Header: "GP/XP",
          accessor: "gpPerXp"
        },
        {
          Header: "Proft/Loss",
          accessor: "pAndL"
        },
        {
          Header: "",
          accessor: ""
        }
      ],
      userData: localStorage.getItem("userData")
    };
  }

  componentWillMount() {}

  render() {
    return (
      <div>
        {this.state.data !== null ? (
          <ReactTable data={this.state.data} columns={this.state.columns} />
        ) : (
          <ReactLoading
            type="bars"
            color="#878787"
            height="8rem"
            width="8rem"
          />
        )}
      </div>
    );
  }
}
