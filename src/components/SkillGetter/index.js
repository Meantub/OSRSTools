import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUsernameAndFetchSkillData, fetchSkillData } from "../../actions/";

class SkillGetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGetStats = this.handleGetStats.bind(this);
    this.handleUpdateStats = this.handleUpdateStats.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleGetStats(event) {
    event.preventDefault();
    this.props.setUsernameAndFetchSkillData(this.state.username);
  }

  handleUpdateStats(event) {
    event.preventDefault();
    this.props.fetchSkillData(this.state.username);
  }

  render() {
    const disabledGetButton = (
      <button type="submit" className="btn btn-outline-secondary" disabled>
        Get stats!
      </button>
    );

    const getButton = (
      <button
        onClick={this.handleGetStats}
        className="btn btn-outline-secondary"
      >
        Get stats!
      </button>
    );

    const updateButton = (
      <button
        onClick={this.handleUpdateStats}
        className="btn btn-outline-secondary"
      >
        Update stats!
      </button>
    );

    var renderButton = () => {
      if (this.state.username == "") {
        return disabledGetButton;
      } else if (this.props.user.username == this.state.username) {
        return updateButton;
      } else {
        return getButton;
      }
    };

    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            id="inputUsername"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <div className="input-group-append">{renderButton()}</div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { setUsernameAndFetchSkillData, fetchSkillData },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillGetter);
