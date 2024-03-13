"use strict";
const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");
const formCandidade = document.getElementById("formSignUpCandidate");
const formCompanies = document.getElementById("formSignUpCompanies");
function showOptionsSignUp() {
    buttonSignUp === null || buttonSignUp === void 0 ? void 0 : buttonSignUp.classList.toggle("buttonActionClicked");
    signUp === null || signUp === void 0 ? void 0 : signUp.classList.toggle("hide");
}
function showFormCandidade() {
    if (!(formCompanies === null || formCompanies === void 0 ? void 0 : formCompanies.classList.contains("hide"))) {
        formCompanies === null || formCompanies === void 0 ? void 0 : formCompanies.classList.add("hide");
    }
    formCandidade === null || formCandidade === void 0 ? void 0 : formCandidade.classList.remove("hide");
}
function showFormCompanies() {
    if (!(formCandidade === null || formCandidade === void 0 ? void 0 : formCandidade.classList.contains("hide"))) {
        formCandidade === null || formCandidade === void 0 ? void 0 : formCandidade.classList.add("hide");
    }
    formCompanies === null || formCompanies === void 0 ? void 0 : formCompanies.classList.remove("hide");
}
function reload() {
    window.location.reload();
}
