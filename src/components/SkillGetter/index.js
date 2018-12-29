import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setUsername } from "../../actions/";

class SkillGetter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setUsername(this.state.username);
  }

  render() {
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
          <div className="input-group-append">
            <button type="submit" className="btn btn-outline-secondary">
              Get stats!
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setUsername }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkillGetter);
