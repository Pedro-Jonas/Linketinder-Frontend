"use strict";
const candidates = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies = JSON.parse(localStorage.getItem("companies") || '[]');
const allSkills = JSON.parse(localStorage.getItem("allSkills") || '[]');
const divToCandidate = document.querySelector(".showToCandidate");
const divToCompany = document.querySelector(".showToCompany");
creatListCompanies();
creatListCandidates();
let clickedShowToCandidate = false;
function showToCandidate() {
    hideAll();
    if (!clickedShowToCandidate) {
        divToCandidate.innerHTML += htmlToCandidate;
        clickedShowToCandidate = true;
    }
    ;
    divToCandidate.classList.remove("hide");
}
let clickedShowToCompany = false;
function showToCompany() {
    hideAll();
    if (!clickedShowToCompany) {
        divToCompany.innerHTML += htmlToCompany;
        clickedShowToCompany = true;
    }
    createGraphic();
    divToCompany.classList.remove("hide");
    divGraphic.classList.remove("hide");
}
function showJobs(id) {
    const hmtlVacancies = createJobVacancies(id);
    const searchCompany = document.getElementById(id);
    searchCompany.innerHTML = `
   <div class="vacancies">
      ${hmtlVacancies}
   </div>
   `;
}
