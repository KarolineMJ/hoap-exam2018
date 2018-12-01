import React, { Component } from "react";
import "./Userform.scss";
import Signup from "./Signup";
import Preferences from "./Preferences.js";

class Userform extends Component {
  state = {
    activeUser: window.sessionStorage.getItem("user"),
    email: "",
    password: "",
    type: ""
  };

  changeType = e => {
    this.setState({
      type: e.target.value
    });
    window.sessionStorage.setItem("user", e.target.value);
  };

  render() {
    if (this.state.activeUser !== null) {
      return <div>active user: {this.state.activeUser}</div>;
    } else {
      return <div />;
    }
    // return (
    //   <div>
    //     <button className="signin" onClick={this.changeType} value="signin">
    //       in
    //     </button>
    //     <button className="signup" onClick={this.changeType} value="signout">
    //       out
    //     </button>
    //     <Signin />
    //     <Signup />
    //     <Preferences
    //       className={this.state.type === "signin" ? "show" : "hide"}
    //     />
    //   </div>
    // );
  }
}

export default Userform;
