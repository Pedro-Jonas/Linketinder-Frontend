"use strict";
const formCreateCompany = document.getElementById("divFormSignUpCompany");
const divFormCompany = document.getElementById("divFormSignUpCompany");
const nameFormCompany = document.getElementById("companyName");
const emailFormCompany = document.getElementById("companyEmail");
const cnpjFormCompany = document.getElementById("companyCnpj");
const countryFormCompany = document.getElementById("companyCountry");
const stateFormCompany = document.getElementById("companyState");
const cepFormCompany = document.getElementById("companyCep");
const descripitionFormCompany = document.getElementById("companyDescripition");
function showFormCompany() {
    hideAll();
    divFormCompany.classList.remove("hide");
}
formCreateCompany.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCompany = {
        name: nameFormCompany.value,
        email: emailFormCompany.value,
        cnpj: cnpjFormCompany.value,
        country: countryFormCompany.value,
        state: stateFormCompany.value,
        cep: cepFormCompany.value,
        descripition: descripitionFormCompany.value,
        jobVacancies: [
            { title: "(nome da vaga)", description: "descrição da vaga", skills: ["Java", "Javascript", "Sql"] },
            { title: "(nome da vaga)", description: "descrição da vaga", skills: ["Python", "Javascript", "React"] }
        ],
    };
    addNewCompany(newCompany);
});
function resetFormCompany() {
    nameFormCompany.value = "";
    emailFormCompany.value = "";
    cnpjFormCompany.value = "";
    countryFormCompany.value = "";
    stateFormCompany.value = "";
    cepFormCompany.value = "";
    descripitionFormCompany.value = "";
}
function addNewCompany(company) {
    if (validateFormCompany(company)) {
        companies.push(company);
        localStorage.setItem("companies", JSON.stringify(companies));
        resetFormCompany();
        reload();
    }
}
