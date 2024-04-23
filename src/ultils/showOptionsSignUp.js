"use strict";
const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");
function showOptionsSignUp() {
    buttonSignUp === null || buttonSignUp === void 0 ? void 0 : buttonSignUp.classList.toggle("buttonActionClicked");
    signUp === null || signUp === void 0 ? void 0 : signUp.classList.toggle("hide");
}
