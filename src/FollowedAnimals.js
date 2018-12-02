import React, { Component } from "react";
import "./FollowedAnimals.scss";

class FollowedAnimals extends Component {
  state = {
    user: window.sessionStorage.getItem("user")
  };
  render() {
    return <div>show the animals followed by {this.state.user}</div>;
  }
}

export default FollowedAnimals;
