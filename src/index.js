"use strict";
const candidates = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies = JSON.parse(localStorage.getItem("companies") || '[]');
const divToCandidate = document.querySelector(".showToCandidate");
const divToCompanie = document.querySelector(".showToCompanie");
const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");
const formCandidade = document.getElementById("formSignUpCandidate");
const formCompanies = document.getElementById("formSignUpCompanies");
let htmlToCandidate = ``;
for (let companie of companies) {
    htmlToCandidate += `
   <div class="boxCompanie">
      <p>Empresa ${companies.indexOf(companie) + 1}</p>
      <p>estado: ${companie.state}</p>
      <p>país: ${companie.country}</p>
      <p>descrição: ${companie.descripition}</p>
      <div id=${companies.indexOf(companie)}>
         <div class="buttonShowJobs" onclick="showJobs(id)" id =${companies.indexOf(companie)}>
            Ver vagas
         </div>
      </div>
   </div>
   `;
}
function showOptionsSignUp() {
    buttonSignUp === null || buttonSignUp === void 0 ? void 0 : buttonSignUp.classList.toggle("buttonActionClicked");
    signUp === null || signUp === void 0 ? void 0 : signUp.classList.toggle("hide");
}
function showFormCandidade() {
    if (!formCompanies.classList.contains("hide")) {
        formCompanies.classList.add("hide");
    }
    if (!divToCandidate.classList.contains("hide")) {
        divToCandidate.classList.add("hide");
    }
    formCandidade.classList.remove("hide");
}
function showFormCompanies() {
    if (!(formCandidade === null || formCandidade === void 0 ? void 0 : formCandidade.classList.contains("hide"))) {
        formCandidade === null || formCandidade === void 0 ? void 0 : formCandidade.classList.add("hide");
    }
    if (!divToCandidate.classList.contains("hide")) {
        divToCandidate.classList.add("hide");
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
        skills: document.getElementById("candidateSkills").value.split(","),
    };
    candidates.push(newCanditade);
    localStorage.setItem("candidates", JSON.stringify(candidates));
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
        jobVacancies: [],
    };
    companies.push(newCompanie);
    localStorage.setItem("companies", JSON.stringify(companies));
}
let clickedShowToCandidate = false;
function showToCandidate() {
    if (!clickedShowToCandidate) {
        divToCandidate.innerHTML += htmlToCandidate;
        divToCandidate.classList.remove("hide");
        clickedShowToCandidate = true;
    }
}
function showJobs(id) {
    const searchCompanie = document.getElementById(id);
    const idNumber = parseInt(id);
    searchCompanie.innerHTML = `
   <div>
      ${companies[idNumber].jobVacancies ?
        companies[idNumber].jobVacancies :
        `<p>Não há vagas!</p>`}
   </div>
   `;
}
function showToCompanie() {
    reload();
}
