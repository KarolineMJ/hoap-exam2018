import React, { Component } from "react";

class Signin extends Component {
  render() {
    return (
      <form className="signIn">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" />
        <input type="submit" />
      </form>
    );
  }
}

export default Signin;
