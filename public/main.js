"use strict";

////// ??????????????????????????????? why do we have to declare const after DOM loaded ?????????!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener("DOMContentLoaded", init);
function init() {
  const otherContent = document.querySelector("#otherContent");
  console.log(otherContent);
  const callToActionBtnS = document.querySelectorAll(".callToAction");
  const userForms = document.querySelector("#userForms");
}

let checkStatus = setInterval(checkSessionStorage, 1000);
function checkSessionStorage() {
  const user = window.sessionStorage.getItem("user");
  if (user !== null) {
    clearInterval(checkStatus);
    otherContent.textContent = user;
  }
}
