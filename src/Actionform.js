import React, { Component } from "react";
import "./Actionform.scss";

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
    if (this.state.activeUser === null) {
      return (
        <div>
          <h3>Call-to-action buttons</h3>
          <button className="callToAction">subscribe to newsletter</button>
          <button className="callToAction">one-time donation</button>
          <button className="callToAction">sign up as member</button>{" "}
        </div>
      );
    } else {
      return (
        <div>
          <p>active user present</p>
        </div>
      );
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
