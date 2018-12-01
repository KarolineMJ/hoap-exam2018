import React, { Component } from "react";
import "./SettingForm.scss";
class SettingForm extends Component {
  state = {};

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="nickname" />
          <select size="3">
            <option>Cat</option>
            <option>Dog</option>
            <option>Both</option>
          </select>
          <input type="select" placeholder="experience" />
        </form>
        <button>Sign Out</button>
        <button>Cancel Membership</button>
      </div>
    );
  }
}

export default SettingForm;
