import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1 className>Barrel</h1>
          <p>Your own cloud storage service</p>
        </div>
      </div>
    );
  }
}