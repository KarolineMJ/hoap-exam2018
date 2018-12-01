"use strict";
let activeUser = window.sessionStorage.getItem("user");

document.addEventListener("DOMContentLoaded", init);
function init() {
  ////// ??????????????????????????????? why do we have to declare const after DOM loaded ?????????!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const callToActionBtnS = document.querySelectorAll(".callToAction");
  const userButton = document.querySelector("#userButton");
  const notificationButton = document.querySelector("#notificationButton");
  const userForms = document.querySelector("#userForms");
  userButton.addEventListener("click", showSignIn);
}

let checkStatus = setInterval(checkSessionStorage, 1000);
function checkSessionStorage() {
  activeUser = window.sessionStorage.getItem("user");
  if (activeUser !== null) {
    clearInterval(checkStatus);
    userButton.textContent = `Hi ${activeUser}~`;
  }
}

function showSignIn(e) {
  if (activeUser === null) {
    e.target.textContent = e.target.textContent !== "X" ? "X" : "Sign In";
    const signInForm = document.querySelector("#userProfile");
    signInForm.classList.toggle("hide");
  } else {
    e.target.textContent =
      e.target.textContent !== "X" ? "X" : `Hi ${activeUser}~`;
    const userSetting = document.querySelector("#userPreferences");
    userSetting.classList.toggle("hide");
  }
}
