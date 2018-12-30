import React from "react";
import { Link } from "react-router-dom";

const copyrightFooter = (
  <div style={{ backgroundColor: "#2E3338" }}>
    <div className="mx-auto text-white-50 text-center py-2">
      © 2018 Copyright:{" "}
      <a className="text-white-50" href="https://OSRSTools.info">
        OSRSTools.info
      </a>
    </div>
  </div>
);

const contentsFooter = (
  <div className="bg-dark py-3 text-white-50">
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h5>Links</h5>
        </div>
        <div className="col-sm" />
        <div className="col-sm" />
      </div>
      <div className="row">
        <div className="col-sm">
          <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li>
              <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/calculator"
              >
                Calculators
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/stats"
              >
                Stats
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-sm" />
        <div className="col-sm" />
      </div>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="footer">
      {contentsFooter}
      {copyrightFooter}
    </div>
  );
};

export default Footer;
