import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <form className="signUp">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <input type="submit" onClick={console.log("hi")} />
      </form>
    );
  }
}

export default Signup;
