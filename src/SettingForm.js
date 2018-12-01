import React, { Component } from "react";
import "./SettingForm.scss";
class SettingForm extends Component {
  state = {};
  signOut = () => {
    window.sessionStorage.removeItem("user");
  };
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="pick a nickname" />
          <h3>Your help so far:</h3>
          <p>*** cats / *** dogs</p>
          <p>*** min of help</p>
          <p>*** Kr. </p>
          <p>*** other stuff</p>
          <button onClick={this.signOut}>Sign Out</button>
          <hr />
          <label htmlFor="preference">preference</label>
          <select size="5" id="preference">
            <option>Cat</option>
            <option>Dog</option>
            <option>Both</option>
          </select>
          <label htmlFor="experience-with-cat">experience with cat</label>
          <input
            type="range"
            placeholder="experience with cat"
            id="experience-with-cat"
          />
          <label htmlFor="experience-with-dog">experience with dog</label>
          <input
            type="range"
            placeholder="experience with dog"
            id="experience-with-dog"
          />
          <label htmlFor="expertise">expertise</label>
          <select size="6" id="expertise" multiple>
            <option>vet</option>
            <option>nurse</option>
            <option>trainer</option>
          </select>
          <label htmlFor="otherExpertise">other</label>
          <select size="4" id="otherExpertise" multiple>
            <option>forster</option>
            <option>post operation</option>
          </select>
          <input type="submit" value="update setting" />
          <button>Cancel Membership</button>
        </form>
      </div>
    );
  }
}

export default SettingForm;
