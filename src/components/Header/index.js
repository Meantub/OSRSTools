import React from "react";
import { Link, NavLink } from "react-router-dom";

// Images
import statsImage from "../../static/img/Stats_icon.png";

import SkillGetter from "../SkillGetter";

const Header = () => (
  <div>
    <nav className={"navbar navbar-expand-sm navbar-dark bg-dark"}>
      <Link className="navbar-brand" to="/">
        OSRSTools
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample03"
        aria-controls="navbarsExample03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link"
              activeClassName="nav-link active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/contact"
              className="nav-link"
              activeClassName="nav-link active"
            >
              Contact
            </NavLink>
          </li>
          {/* <li className="nav-item">
						<NavLink exact to="/equipment" className="nav-link" activeClassName="nav-link active">Equipment</NavLink>
						</li> */}
          <li className="nav-item">
            <NavLink
              exact
              to="/calculator"
              className="nav-link"
              activeClassName="nav-link active"
            >
              Calculators
            </NavLink>
          </li>
          <li className="nav-item my-2 my-lg-0">
            <NavLink
              exact
              to="/stats"
              className="nav-link"
              activeClassName="nav-link active"
            >
              Stats <img src={statsImage} alt="Stats" />
            </NavLink>
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

export default Header;
