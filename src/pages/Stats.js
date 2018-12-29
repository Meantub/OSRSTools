import React, { Component } from "react";
import { connect } from "react-redux";
// import ReactLoading from "react-loading";
import ReactTable from "react-table";
import DocumentMeta from "react-document-meta";
import { bindActionCreators } from "redux";
import { setUsername, fetchSkillData } from "../actions/";

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    var values = "";
    var table = null;
    if (this.props.user.skillData != null) {
      values = Object.entries(this.props.user.skillData.Skills).map(
        ([key, value]) => {
          return {
            skill: key,
            level: value.level,
            xp: value.xp,
            rank: value.rank
          };
        }
      );
      values = values.filter(skill => skill.skill != "Overall");
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
    } else if (this.props.user.username == "") {
      table = (
        <strong>
          Enter your username in the top right for it to load all your stats
          into a useful table so you can see what stats need the most work to
          get you all those 99s
        </strong>
      );
    } else if (this.props.user.isLoading == false) {
      this.props.fetchSkillData(this.props.user.username);
    }

    const meta = {
      title: "OSRSTools - Stats",
      keywords: "osrs hiscores, oldschool hiscores, hiscores"
    };
    return (
      <DocumentMeta {...meta} extend>
        <h3>Stats</h3>
        <hr />
        {table}
      </DocumentMeta>
    );
  }
}
const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchSkillData, setUsername }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats);
