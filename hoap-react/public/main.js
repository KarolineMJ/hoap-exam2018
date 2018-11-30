"use strict";

////// ??????????????????????????????? why do we have to declare const after DOM loaded ?????????!!!!!!!!!!!!!!!!!!!!!!!!!!!

document.addEventListener("DOMContentLoaded", init);
function init() {
  const otherContent = document.querySelector("#otherContent");
  console.log(otherContent);
}

let checkStatus = setInterval(checkLocalStorage, 1000);
function checkLocalStorage() {
  const user = window.localStorage.getItem("user");
  if (user !== null) {
    clearInterval(checkStatus);
    otherContent.textContent = user;
  }
}
