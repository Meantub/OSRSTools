import React, { Component } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import ReactLoading from 'react-loading';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

// Classes/pages
import Equipment from '../Equipment';
import Calculator from '../Calculator';
import Stats from '../Stats';
import SkillGetter from '../SkillGetter';

// Stylesheets
import mainStyles from './Main.css';

// Images
import statsImage from '../../static/img/Stats_icon.png';

const App = () => {
	return (
		<div>
			<div className={mainStyles.background}></div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-2"></div>
					<div className="col-8">
						<Header />
						<Main />
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</div>
	)
};

// Navbar as well
const Header = () => (
	<div>
		<nav className={"navbar navbar-expand-sm navbar-dark bg-dark"}>
			<Link className="navbar-brand" to="/">OSRSTools</Link>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>

			<div className="collapse navbar-collapse" id="navbarsExample03">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink exact to="/" className="nav-link" activeClassName="nav-link active">Home</NavLink>
					</li>
					<li className="nav-item">
						<NavLink exact to="/about" className="nav-link" activeClassName="nav-link active">About</NavLink>
					</li>
					{/* <li className="nav-item">
						<NavLink exact to="/equipment" className="nav-link" activeClassName="nav-link active">Equipment</NavLink>
					</li> */}
					<li className="nav-item">
						<NavLink exact to="/calculator" className="nav-link" activeClassName="nav-link active">Calculators</NavLink>
					</li>
					<li className="nav-item my-2 my-lg-0">
						<NavLink exact to="/stats" className="nav-link" activeClassName="nav-link active">Stats <img src={statsImage} alt="Stats" /></NavLink>
					</li>
				</ul>
				<ul className="navbar-nav">
					<li>
						<SkillGetter />
					</li>
				</ul>
			</div>
		</nav>
	</div>
);

const Main = () => (
	<div className={"container-fluid " + mainStyles.mainContainer}>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			{/* <Route path="/equipment" component={Equipment} /> */}
			<Route path="/calculator" component={Calculator} />
			<Route path="/stats" component={Stats} />
		</Switch>
	</div>
);

const Home = () => (
	<div>
		<h3>Home</h3>
		<hr />
		<div className="card-deck">
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Calculators</h5>
					<p className="card-text">Figure out how much it's going to cost you to go for those 99s</p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Stats</h5>
					<p className="card-text">Check which of your stats needs the most work!</p>
				</div>
			</div>
			<div className="card">
				<img className="card-img-top" src="..." alt="Card image cap" />
				<div className="card-body">
					<h5 className="card-title">Coming soon</h5>
					<p className="card-text">It's secret and in development</p>
					<small className="text-muted"><em>shhhhh don't tell anyone</em></small>
				</div>
			</div>
		</div>
	</div>
);

const About = () => (
	<div>
		<h3>About</h3>
		<hr />
		<p>I created this website so that everyone could have access to useful tools. I am a broke college student so if this tool was useful to you please turn off your ad blockers as it is is the only way that I can pay for this website, as of right now</p>
		<Contact />
	</div>
);

class Contact extends Component {
	
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
		}
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
		if(this.state.email !== "" || this.state.subject !== "" || this.state.message !== "") {
			
		}
	}

	sendCaptcha(captchaValue) {
		this.setState({captchaResponse: captchaValue});
		this.setState({isGoogleCaptchaLoading: true});

		const data = JSON.stringify({captchaResponse: this.state.captchaResponse});

		axios.post('https://1r4u8q2qk7.execute-api.us-east-1.amazonaws.com/DEV/captcha', data)
		.then(result => {
			console.log("result: " + JSON.stringify(result.data));
			this.setState({ captchaResult: result.data });
			if(result.data.message=="Captcha correct") {
				this.setState({ isGoogleCaptchaLoaded: true });
				this.setState({ isGoogleCaptchaLoading: false });
			}
		})
	}

	render() {
		return (
			<div>
				<h2>Contact me</h2>
				<p>If there are any problems with the website or if you'd like to get into contact with me then this is the form for you!</p>
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<label htmlFor="inputEmail">Email*</label>
						<input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleEmailChange} />
					</div>
					<div className="form-group">
						<label htmlFor="inputSubject">Subject</label>
						<input type="text" className="form-control" placeholder="Type a quick synposis of what you want to say here..." onChange={this.handleSubjectChange} />
					</div>
					<div className="form-group">
						<label htmlFor="inputSubject">Message</label>
						<textarea type="text" className="form-control" placeholder="Type your message here..." rows="4" onChange={this.handleMessageChange} />
						<small id="emailHelp" className="form-text text-muted">*I don't save your email, it is just if you need to be contacted back then I have a way to do so</small>
					</div>
					<br />
					<div className="row-form">
						<ReCAPTCHA sitekey="6LcCm3QUAAAAAMR_es-x5JlRGiu5zsy9bSd4ft9b" onChange={this.sendCaptcha} />
						<br />
						{this.state.isGoogleCaptchaLoaded ? <button type="submit" className="btn btn-primary">Send</button> : "" }
						{this.state.isGoogleCaptchaLoading ? <ReactLoading type="bars" color="#878787" /> : ""}
					</div>
				</form>
			</div>
		)
	}
}

export default App;
