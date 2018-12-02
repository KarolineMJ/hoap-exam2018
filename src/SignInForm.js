import React, { Component } from "react";
import "./SignInForm.scss";

class SignInForm extends Component {
  state = {
    userEmail: "",
    userPassword: "",
    hideForm: false
  };
  // update state while user typing email
  inputEmail = e => {
    this.setState({ userEmail: e.target.value });
  };
  // update state while user typing password
  inputPassword = e => {
    this.setState({ userPassword: e.target.value });
  };
  // server authentication of user email and password
  signin = e => {
    // prevent page reload
    e.preventDefault();
    // hide sign in form
    this.setState({
      hideForm: true
    });
    // authentication
    const userEmail = this.state.userEmail;
    const userPassword = this.state.userPassword;
    /////////////////////// send these data to firebase for authentication
    /////////////////////// if pass authentication, get username and set it in session and only show sections for old user
    window.sessionStorage.setItem("user", this.state.userEmail);
    const newUserSectionS = document.querySelectorAll(".newUser");
    const oldUserSectionS = document.querySelectorAll(".oldUser");
    newUserSectionS.forEach(section => section.classList.add("hide"));
    oldUserSectionS.forEach(section => section.classList.remove("hide"));
  };
  render() {
    return (
      <form
        className="signIn"
        className={this.state.hideForm === false ? "" : "hide"}
      >
        <label htmlFor="signInEmail">Email</label>
        <input
          type="email"
          name="signInEmail"
          id="signInEmail"
          onChange={this.inputEmail}
        />
        <label htmlFor="signInPassword">Password</label>
        <input
          type="password"
          name="signInPassword"
          id="signInPassword"
          onChange={this.inputPassword}
        />
        <input type="submit" onClick={this.signin} value="Sign In" />
      </form>
    );
  }
}

export default SignInForm;
