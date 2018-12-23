import React, { Component } from "react";
// import XPCalculator from "./XPCalculator";

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h3>Calculator</h3>
        <hr />
        <p>
          The cost of each item is retrieved on a daily basis so it will
          probably be off by small amounts at any given time
        </p>
        <div className="container">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm">Agility</div>
              <div className="col-sm">Hunter</div>
            </div>
            <div className="row">
              <div className="col-sm">Attack</div>
              <div className="col-sm">Magic</div>
            </div>
            <div className="row">
              <div className="col-sm">Construction</div>
              <div className="col-sm">Mining</div>
            </div>
            <div className="row">
              <div className="col-sm">Cooking</div>
              <div className="col-sm">Prayer</div>
            </div>
            <div className="row">
              <div className="col-sm">Crafting</div>
              <div className="col-sm">Ranged</div>
            </div>
            <div className="row">
              <div className="col-sm">Defence</div>
              <div className="col-sm">Runecrafting</div>
            </div>
            <div className="row">
              <div className="col-sm">Farming</div>
              <div className="col-sm">Slayer</div>
            </div>
            <div className="row">
              <div className="col-sm">Firemaking</div>
              <div className="col-sm">Smithing</div>
            </div>
            <div className="row">
              <div className="col-sm">Fishing</div>
              <div className="col-sm">Strength</div>
            </div>
            <div className="row">
              <div className="col-sm">Fletching</div>
              <div className="col-sm">Thieving</div>
            </div>
            <div className="row">
              <div className="col-sm">Herblore</div>
              <div className="col-sm">Woodcutting</div>
            </div>
            <div className="row">
              <div className="col-sm">Hitpoints</div>
              <div className="col-sm" />
            </div>
          </div>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
}

export default Calculator;
