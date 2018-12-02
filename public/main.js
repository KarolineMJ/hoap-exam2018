"use strict";
let activeUser = window.sessionStorage.getItem("user");
const newUserSectionS = document.querySelectorAll(".newUser");
const oldUserSectionS = document.querySelectorAll(".oldUser");

document.addEventListener("DOMContentLoaded", init);
function init() {
  ////// ??????????????????????????????? why do we have to declare const after DOM loaded ?????????!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const callToActionBtnS = document.querySelectorAll(".callToAction");
  const userButton = document.querySelector("#userButton");
  const notificationButton = document.querySelector("#notificationButton");
  const actionForm = document.querySelector("#actionForm");
  userButton.addEventListener("click", toggleSignInPreference);
  notificationButton.addEventListener("click", showNotification);
  actionForm.addEventListener("click", showActionForm);
}

let checkStatus = setInterval(checkSessionStorage, 1000);
function checkSessionStorage() {
  activeUser = window.sessionStorage.getItem("user");
  if (activeUser !== null) {
    clearInterval(checkStatus);
    userButton.textContent = `Hi ${activeUser}~`;
    newUserSectionS.forEach(section => section.classList.add("hide"));
    oldUserSectionS.forEach(section => section.classList.remove("hide"));
  }
}

function toggleSignInPreference(e) {
  if (activeUser === null) {
    e.target.textContent = e.target.textContent !== "X" ? "X" : "Sign In";
    const signInForm = document.querySelector("#userProfile");
    signInForm.classList.toggle("hide");
    // oldUserSectionS.forEach(section => section.classList.add("hide"));
    // newUserSectionS.forEach(section => section.classList.remove("hide"));
  } else {
    e.target.textContent =
      e.target.textContent !== "X" ? "X" : `Hi ${activeUser}~`;
    const userSetting = document.querySelector("#userPreferences");
    userSetting.classList.toggle("hide");
  }
}
function showNotification() {}
function showActionForm() {}
