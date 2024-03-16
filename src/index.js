"use strict";
const candidates = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies = JSON.parse(localStorage.getItem("companies") || '[]');
let allSkills = new Map();
const divGraphic = document.getElementById("graphic");
const scriptGrafic = document.createElement("script");
const divToCandidate = document.querySelector(".showToCandidate");
const divToCompanie = document.querySelector(".showToCompanie");
const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");
const formCandidade = document.getElementById("formSignUpCandidate");
const formCompanies = document.getElementById("formSignUpCompanies");
let htmlToCandidate = ``;
let htmlToCompanie = ``;
for (let companie of companies) {
    htmlToCandidate += `
   <div class="boxCompanieAndCandidate">
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
for (let candidate of candidates) {
    for (let skill of candidate.skills) {
        if (allSkills.has(skill)) {
            let count = allSkills.get(skill);
            count ? count++ : 0;
            allSkills.set(skill, count ? count : 0);
        }
        else {
            allSkills.set(skill, 1);
        }
    }
    htmlToCompanie += `
   <div class="boxCompanieAndCandidate">
      <p>candidato ${candidates.indexOf(candidate) + 1}</p>
      <p>skills: ${candidate.skills}</p>
      <p>formação: ${candidate.academicEducation}</p>
      <p>descrição: ${candidate.descripition}</p>
   </div>
   `;
}
console.log(allSkills);
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
    if (!divToCompanie.classList.contains("hide")) {
        divToCompanie.classList.add("hide");
        divGraphic.classList.add("hide");
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
    if (!divToCompanie.classList.contains("hide")) {
        divToCompanie.classList.add("hide");
        divGraphic.classList.add("hide");
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
        academicEducation: document.getElementById("academicEducation").value.split(","),
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
        jobVacancies: [
            { title: "(nome da vaga)", description: "descrição da vaga", skills: ["Java", "Javascript", "Sql"] },
            { title: "(nome da vaga)", description: "descrição da vaga", skills: ["Pythion", "Javascript", "React"] }
        ],
    };
    companies.push(newCompanie);
    localStorage.setItem("companies", JSON.stringify(companies));
}
let clickedShowToCandidate = false;
function showToCandidate() {
    if (!divToCompanie.classList.contains("hide")) {
        divGraphic.classList.add("hide");
        divToCompanie.classList.add("hide");
    }
    if (!formCompanies.classList.contains("hide")) {
        formCompanies.classList.add("hide");
    }
    if (!(formCandidade === null || formCandidade === void 0 ? void 0 : formCandidade.classList.contains("hide"))) {
        formCandidade.classList.add("hide");
    }
    if (!clickedShowToCandidate) {
        divToCandidate.innerHTML += htmlToCandidate;
        clickedShowToCandidate = true;
    }
    divToCandidate.classList.remove("hide");
}
function showJobs(id) {
    const searchCompanie = document.getElementById(id);
    const idNumber = parseInt(id);
    const vacancies = companies[idNumber].jobVacancies;
    let hmtlVacancies = ``;
    if (vacancies) {
        for (let jobVacancie of vacancies) {
            hmtlVacancies += `
         <div>
            <h2>${jobVacancie.title}</h2>
            <p>
               decrição - ${jobVacancie.description}
            </p>
            <p>
               skills - ${jobVacancie.skills}
            </p>
         </div>
         `;
        }
    }
    searchCompanie.innerHTML = `
   <div class="vacancies">
      ${companies[idNumber].jobVacancies ?
        hmtlVacancies :
        `<h2>Não há vagas!</h2>`}
   </div>
   `;
}
let clickedShowToCompanie = false;
function showToCompanie() {
    if (!divToCandidate.classList.contains("hide")) {
        divToCandidate.classList.add("hide");
    }
    if (!formCompanies.classList.contains("hide")) {
        formCompanies.classList.add("hide");
    }
    if (!(formCandidade === null || formCandidade === void 0 ? void 0 : formCandidade.classList.contains("hide"))) {
        formCandidade.classList.add("hide");
    }
    if (!clickedShowToCompanie) {
        divToCompanie.innerHTML += htmlToCompanie;
        clickedShowToCompanie = true;
    }
    createGraphic();
    divToCompanie.classList.remove("hide");
    divGraphic.classList.remove("hide");
}
function createGraphic() {
    const skills = [];
    const candidatesForSkills = [];
    allSkills.forEach((key, value) => {
        console.log(value, key);
        candidatesForSkills.push(key);
        skills.push(value);
    });
    const graphicObjet = {
        type: 'bar',
        data: {
            labels: skills,
            datasets: [{
                    label: "Candidatos por Skills",
                    data: candidatesForSkills,
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    const graphicObjetJson = JSON.stringify(graphicObjet);
    scriptGrafic.innerHTML = `
   const ctx = document.getElementById('myChart');
   new Chart(ctx, ${graphicObjetJson});`;
    document.body.appendChild(scriptGrafic);
}
