import React, { Component } from "react";
import "./Userform.css";
import Signin from "./Signin";
import Signup from "./Signup";
import Preferences from "./Preferences.js";

class Userform extends Component {
  state = {
    email: "",
    password: "",
    type: ""
  };

  changeType = e => {
    this.setState({
      type: e.target.value
    });
    window.localStorage.setItem("user", e.target.value);
  };

  render() {
    return (
      <div>
        <button className="signin" onClick={this.changeType} value="signin">
          in
        </button>
        <button className="signup" onClick={this.changeType} value="signout">
          out
        </button>
        <Signin />
        <Signup />
        <Preferences
          className={this.state.type === "signin" ? "show" : "hide"}
        />
      </div>
    );
  }
}

export default Userform;
