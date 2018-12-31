import React, { Component } from "react";
import DocumentMeta from "react-document-meta";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import ReactLoading from "react-loading";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.sendCaptcha = this.sendCaptcha.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);

    this.state = {
      email: "",
      subject: "",
      message: "",
      captchaResponse: "",
      isGoogleCaptchaLoaded: false,
      isGoogleCaptchaLoading: false,
      captchaResult: null
    };
  }

  componentDidMount() {}

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubjectChange(event) {
    this.setState({ subject: event.target.value });
  }

  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // If empty ignore
    // if (
    //   this.state.email !== "" ||
    //   this.state.subject !== "" ||
    //   this.state.message !== ""
    // ) {
    // }
  }

  sendCaptcha(captchaValue) {
    this.setState({ captchaResponse: captchaValue });
    this.setState({ isGoogleCaptchaLoading: true });

    const data = JSON.stringify({
      captchaResponse: this.state.captchaResponse
    });

    axios
      .post(
        "https://1r4u8q2qk7.execute-api.us-east-1.amazonaws.com/DEV/captcha",
        data
      )
      .then(result => {
        this.setState({ captchaResult: result.data });
        if (result.data.message == "Captcha correct") {
          this.setState({ isGoogleCaptchaLoaded: true });
          this.setState({ isGoogleCaptchaLoading: false });
        }
      });
  }

  render() {
    const meta = {
      title: "OSRSTools - Contact"
    };
    return (
      <DocumentMeta {...meta} extend>
        <h2>Contact me</h2>
        <p>
          If there are any problems with the website or if you'd like to get
          into contact with me then this is the form for you!
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputEmail">Email*</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputSubject">Subject</label>
            <input
              type="text"
              className="form-control"
              placeholder="Type a quick synopsis of what you want to say here..."
              onChange={this.handleSubjectChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputSubject">Message</label>
            <textarea
              type="text"
              className="form-control"
              placeholder="Type your message here..."
              rows="4"
              onChange={this.handleMessageChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              *I don't save your email, it is just if you need to be contacted
              back then I have a way to do so
            </small>
          </div>
          <br />
          <div className="row-form">
            <ReCAPTCHA
              sitekey="6LcCm3QUAAAAAMR_es-x5JlRGiu5zsy9bSd4ft9b"
              onChange={this.sendCaptcha}
            />
            <br />
            {this.state.isGoogleCaptchaLoaded ? (
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            ) : (
              ""
            )}
            {this.state.isGoogleCaptchaLoading ? (
              <ReactLoading type="bars" color="#878787" />
            ) : (
              ""
            )}
          </div>
        </form>
      </DocumentMeta>
    );
  }
}
