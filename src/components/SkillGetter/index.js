import React, { Component } from "react";

export default class SkillGetter extends Component {
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
    localStorage.setItem("username", this.state.username);
    window.location.reload();
  }

  componentWillMount() {
    if (localStorage.getItem("username") !== null) {
      this.setState({ username: localStorage.getItem("username") });
    }
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
