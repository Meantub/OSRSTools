import React, { Component } from "react";
import ReactLoading from "react-loading";
import ReactTable from "react-table";
import DocumentMeta from "react-document-meta";
import axios from "axios";

class Stats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataJSON: {},
      isLoaded: false,
      username:
        localStorage.getItem("username") !== null
          ? localStorage.getItem("username")
          : ""
    };
  }

  componentDidMount() {
    if (
      localStorage.getItem("userData") === null ||
      localStorage.getItem("userData") === undefined ||
      JSON.parse(localStorage.getItem("userData")).username !==
        localStorage.getItem("username")
    ) {
      if (localStorage.getItem("username") !== null) {
        // console.log("getting stats");
        axios
          .get(
            "https://1r4u8q2qk7.execute-api.us-east-1.amazonaws.com/DEV/player?user=" +
              localStorage.getItem("username")
          )
          .then(result => {
            result.data.username = localStorage.getItem("username");
            localStorage.setItem("userData", JSON.stringify(result.data));
            this.setState({ userDataJSON: result.data });
            this.setState({ isLoaded: true });
          });
      }
    } else {
      this.setState({
        userDataJSON: JSON.parse(localStorage.getItem("userData"))
      });
      this.setState({ isLoaded: true });
    }
  }

  render() {
    var values = "";
    var table = null;
    if (
      this.state.userDataJSON !== null &&
      this.state.userDataJSON.Skills !== null &&
      this.state.userDataJSON.Skills !== undefined
    ) {
      delete this.state.userDataJSON.Skills.Overall;
      values = Object.entries(this.state.userDataJSON.Skills).map(
        ([key, value]) => {
          return {
            skill: key,
            level: value.level,
            xp: value.xp,
            rank: value.rank
          };
        }
      );
      table = (
        <ReactTable
          data={values}
          columns={[
            {
              Header: "Skill",
              accessor: "skill",
              Cell: row => (
                <div>
                  <div style={{ width: "25px", display: "inline-block" }}>
                    <img src={"/img/icon/" + row.value + "_icon.png"} />
                  </div>{" "}
                  {row.value}
                </div>
              ),
              width: 200
            },
            {
              Header: "Level",
              accessor: "level",
              Cell: row => (
                <div className="progress">
                  <div
                    className={
                      "progress-bar" +
                      (row.value > 25
                        ? row.value > 50
                          ? " bg-success"
                          : " bg-warning"
                        : " bg-danger")
                    }
                    role="progressbar"
                    style={{ width: row.value + "%" }}
                    aria-valuenow={row.value + "%"}
                    aria-valuemin="0%"
                    aria-valuemax="99%"
                  >
                    <div style={{ color: "#000" }}>{row.value}</div>
                  </div>
                </div>
              ),
              width: 400
            },
            {
              Header: "XP",
              accessor: "xp",
              Cell: row => <div>{row.value.toLocaleString()}</div>
            },
            {
              Header: "Rank",
              accessor: "rank",
              Cell: row => <div>{row.value.toLocaleString()}</div>
            }
          ]}
          className="-striped -highlight"
          showPagination={false}
          defaultPageSize={23}
          defaultSorted={[{ id: "skill", desc: false }]}
          defaultSortDesc
          getTrProps={(state, rowInfo) => {
            return {
              style: {
                opacity: rowInfo.row.level < 5 ? ".5" : "1"
              }
            };
          }}
        />
      );
    }
    const meta = {
      title: "OSRSTools - Stats",
      keywords: "osrs hiscores, oldschool hiscores, hiscores"
    };
    return (
      <DocumentMeta {...meta} extend>
        <h3>
          Stats {this.state.username !== "" ? "- " + this.state.username : ""}
        </h3>
        <hr />
        {table === null ? (
          localStorage.getItem("username") !== null ? (
            <ReactLoading
              type="bars"
              color="#878787"
              height="8rem"
              width="8rem"
            />
          ) : (
            <strong>
              Enter your username in the top right for it to load all your stats
              into a useful table so you can see what stats need the most work
              to get you all those 99s
            </strong>
          )
        ) : (
          table
        )}
      </DocumentMeta>
    );
  }
}

export default Stats;
