"use strict";

////// ??????????????????????????????? why do we have to declare const after DOM loaded ?????????!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener("DOMContentLoaded", init);
function init() {
  const callToActionBtnS = document.querySelectorAll(".callToAction");
  const userButton = document.querySelector("#userButton");
  const userForms = document.querySelector("#userForms");
}

let checkStatus = setInterval(checkSessionStorage, 1000);
function checkSessionStorage() {
  const activeUser = window.sessionStorage.getItem("user");
  if (activeUser !== null) {
    clearInterval(checkStatus);
    userButton.textContent = activeUser;
  }
}
