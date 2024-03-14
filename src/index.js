"use strict";
const candidates = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies = JSON.parse(localStorage.getItem("companies") || '[]');
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
function createNewCandidade() {
    const newCanditade = {
        name: document.getElementById("candidateName").value,
        email: document.getElementById("candidateEmail").value,
        cpf: document.getElementById("candidateCpf").value,
        age: document.getElementById("candidateAge").value,
        state: document.getElementById("candidateState").value,
        cep: document.getElementById("candidateCep").value,
        descripition: document.getElementById("candidateDescripition").value,
        skills: document.getElementById("candidateSkills").value,
    };
    candidates.push(newCanditade);
    localStorage.setItem("candidates", JSON.stringify([candidates]));
}
function createNewCompanie() {
    const newCompanie = {
        name: document.getElementById("companieName").value,
        email: document.getElementById("companieEmail").value,
        cnpj: document.getElementById("companieCnpj").value,
        country: document.getElementById("companieCountry").value,
        state: document.getElementById("companieState").value,
        cep: document.getElementById("companieCep").value,
        descripition: document.getElementById("companieDescripition").value,
    };
    companies.push(newCompanie);
    localStorage.setItem("companies", JSON.stringify([companies]));
}
function showToCandidate() {
    reload();
}
function showToCompanie() {
    reload();
}
