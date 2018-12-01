import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import SignInForm from "./SignInForm";
import SettingForm from "./SettingForm";
import Userform from "./Userform";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<SignInForm />, document.getElementById("userProfile"));
ReactDOM.render(<SettingForm />, document.getElementById("userPreferences"));
ReactDOM.render(<Userform />, document.getElementById("userForm"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
