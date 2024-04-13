"use strict";
const nameCandidateRegex = new RegExp(/[A-Za-zà-ü]+(?: [A-za-zà-ü]+)+/);
const nameCompanyRegex = new RegExp(/[A-Za-zà-ü]+(?: [A-za-zà-ü]+)*/);
const emailRegex = new RegExp(/[\w\.]+@[\w]+\.[a-zA-Z]{2,}/);
const cpfRegex = new RegExp(/\d{3}\.\d{3}\.\d{3}-\d{2}/);
const cnpjRegex = new RegExp(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/);
const ageRegex = new RegExp(/([1-9][0-9]|[1][0-1][0-9])/);
const cepRegex = new RegExp(/\d{5}-\d{3}/);
const candidates = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies = JSON.parse(localStorage.getItem("companies") || '[]');
const allSkills = JSON.parse(localStorage.getItem("allSkills") || '[]');
const divGraphic = document.getElementById("graphic");
const scriptGrafic = document.createElement("script");
const divToCandidate = document.querySelector(".showToCandidate");
const divToCompany = document.querySelector(".showToCompanie");
const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");
const divFormCandidate = document.getElementById("divFormSignUpCandidate");
const divFormCompany = document.getElementById("divFormSignUpCompanie");
const formCreateCandidate = document.getElementById("divFormSignUpCandidate");
const formCreateCompany = document.getElementById("divFormSignUpCompanie");
let htmlToCandidate = ``;
let htmlToCompany = ``;
const nameFormCandidate = document.getElementById("candidateName");
const emailFormCandidate = document.getElementById("candidateEmail");
const cpfFormCandidate = document.getElementById("candidateCpf");
const ageFormCandidate = document.getElementById("candidateAge");
const stateFormCandidate = document.getElementById("candidateState");
const cepFormCandidate = document.getElementById("candidateCep");
const descripitionFormCandidate = document.getElementById("candidateDescripition");
const skillsFormCandidate = document.getElementById("candidateSkills");
const academicEducationFormCandidate = document.getElementById("academicEducation");
const nameFormCompany = document.getElementById("candidateName");
const emailFormCompany = document.getElementById("candidateEmail");
const cpfFormCompany = document.getElementById("candidateCpf");
const ageFormCompany = document.getElementById("candidateAge");
const stateFormCompany = document.getElementById("candidateState");
const cepFormCompany = document.getElementById("candidateCep");
const descripitionFormCompany = document.getElementById("candidateDescripition");
const skillsFormCompany = document.getElementById("candidateSkills");
const academicEducationFormCompany = document.getElementById("academicEducation");
creatListCompanies();
creatListCandidates();
function showOptionsSignUp() {
    buttonSignUp === null || buttonSignUp === void 0 ? void 0 : buttonSignUp.classList.toggle("buttonActionClicked");
    signUp === null || signUp === void 0 ? void 0 : signUp.classList.toggle("hide");
}
function creatListCompanies() {
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
}
function creatListCandidates() {
    for (const candidate of candidates) {
        addSkills(candidate);
        htmlToCompany += `
      <div class="boxCompanieAndCandidate">
         <p>candidato ${candidates.indexOf(candidate) + 1}</p>
         <p>descrição: ${candidate.descripition}</p>
         <p>formação: ${candidate.academicEducation}</p>
         <p>skills: ${candidate.skills}</p>
      </div>
      `;
    }
}
function addSkills(candidate) {
    for (const skill of candidate.skills) {
        const skillTrim = skill.trim().toUpperCase();
        if (allSkills.hasOwnProperty(skillTrim)) {
            let count = allSkills[skillTrim];
            count ? count++ : 0;
            allSkills[skillTrim] = count ? count : 0;
        }
        else {
            allSkills[skillTrim] = 1;
        }
        ;
    }
    localStorage.setItem("allSkills", JSON.stringify(allSkills));
}
function showFormCandidate() {
    //tentar reaproveitar os ifs
    if (!divFormCompany.classList.contains("hide")) {
        divFormCompany.classList.add("hide");
    }
    ;
    if (!divToCandidate.classList.contains("hide")) {
        divToCandidate.classList.add("hide");
    }
    ;
    if (!divToCompany.classList.contains("hide")) {
        divToCompany.classList.add("hide");
        divGraphic.classList.add("hide");
    }
    ;
    divFormCandidate.classList.remove("hide");
}
function showFormCompany() {
    //tentar reaproveitar os ifs
    if (!divFormCandidate.classList.contains("hide")) {
        divFormCandidate.classList.add("hide");
    }
    ;
    if (!divToCandidate.classList.contains("hide")) {
        divToCandidate.classList.add("hide");
    }
    ;
    if (!divToCompany.classList.contains("hide")) {
        divToCompany.classList.add("hide");
        divGraphic.classList.add("hide");
    }
    ;
    divFormCompany.classList.remove("hide");
}
formCreateCandidate.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCanditade = {
        name: nameFormCandidate.value,
        email: emailFormCandidate.value,
        cpf: cpfFormCandidate.value,
        age: ageFormCandidate.value,
        state: stateFormCandidate.value,
        cep: cepFormCandidate.value,
        descripition: descripitionFormCandidate.value,
        skills: skillsFormCandidate.value.split(","),
        academicEducation: academicEducationFormCandidate.value.split(","),
    };
    addNewCandidate(newCanditade);
});
function validateFormCandidate(candidate) {
    if (!nameCandidateRegex.test(candidate.name)) {
        alert("Insira um nome no formato válido");
        return false;
    }
    ;
    if (!emailRegex.test(candidate.email)) {
        alert("Insira um email no formato válido");
        return false;
    }
    ;
    if (!cpfRegex.test(candidate.cpf)) {
        alert("Insira um CPF no formato válido");
        return false;
    }
    ;
    if (!ageRegex.test(candidate.age)) {
        alert("Insira uma idade válida");
        return false;
    }
    ;
    if (!cepRegex.test(candidate.cep)) {
        alert("Insira um CEP no formato válido");
        return false;
    }
    ;
    return true;
}
function addNewCandidate(candidate) {
    if (validateFormCandidate(candidate)) {
        candidates.push(candidate);
        localStorage.setItem("candidates", JSON.stringify(candidates));
        resetFormCandidate();
        reload();
    }
    ;
}
function resetFormCandidate() {
    nameFormCandidate.value = "";
    emailFormCandidate.value = "";
    cpfFormCandidate.value = "";
    ageFormCandidate.value = "";
    stateFormCandidate.value = "";
    cepFormCandidate.value = "";
    descripitionFormCandidate.value = "";
    skillsFormCandidate.value = "";
    academicEducationFormCandidate.value = "";
}
formCreateCompany.addEventListener("submit", (event) => {
    event.preventDefault();
    //jogar os gets para fora da função
    const newCompany = {
        name: document.getElementById("companieName").value,
        email: document.getElementById("companieEmail").value,
        cnpj: document.getElementById("companieCnpj").value,
        country: document.getElementById("companieCountry").value,
        state: document.getElementById("companieState").value,
        cep: document.getElementById("companieCep").value,
        descripition: document.getElementById("companieDescripition").value,
        jobVacancies: [
            { title: "(nome da vaga)", description: "descrição da vaga", skills: ["Java", "Javascript", "Sql"] },
            { title: "(nome da vaga)", description: "descrição da vaga", skills: ["Python", "Javascript", "React"] }
        ],
    };
    addNewCompany(newCompany);
});
function validateFormCompany(company) {
    if (!nameCompanyRegex.test(company.name)) {
        alert("Insira um nome no formato válido");
        return false;
    }
    ;
    if (!emailRegex.test(company.email)) {
        alert("Insira um email no formato válido");
        return false;
    }
    ;
    if (!cnpjRegex.test(company.cnpj)) {
        alert("Insira um CNPJ no formato válido");
        return false;
    }
    ;
    if (!cepRegex.test(company.cep)) {
        alert("Insira um CEP no formato válido");
        return false;
    }
    ;
    return true;
}
function addNewCompany(company) {
    if (validateFormCompany(company)) {
        companies.push(company);
        localStorage.setItem("companies", JSON.stringify(companies));
        resetFormCompany();
        reload();
    }
}
function resetFormCompany() {
    //usar o gets que foram para fora
    document.getElementById("companieName").value = "";
    document.getElementById("companieEmail").value = "";
    document.getElementById("companieCnpj").value = "";
    document.getElementById("companieCountry").value = "";
    document.getElementById("companieState").value = "";
    document.getElementById("companieCep").value = "";
    document.getElementById("companieDescripition").value = "";
}
let clickedShowToCandidate = false;
function showToCandidate() {
    //tentar reaproveitar os ifs
    if (!divToCompany.classList.contains("hide")) {
        divGraphic.classList.add("hide");
        divToCompany.classList.add("hide");
    }
    if (!divFormCompany.classList.contains("hide")) {
        divFormCompany.classList.add("hide");
    }
    if (!divFormCandidate.classList.contains("hide")) {
        divFormCandidate.classList.add("hide");
    }
    if (!clickedShowToCandidate) {
        divToCandidate.innerHTML += htmlToCandidate;
        clickedShowToCandidate = true;
    }
    divToCandidate.classList.remove("hide");
}
function showJobs(id) {
    const hmtlVacancies = createJobVacancies(id);
    const searchCompanie = document.getElementById(id);
    searchCompanie.innerHTML = `
   <div class="vacancies">
      ${hmtlVacancies}
   </div>
   `;
}
function createJobVacancies(id) {
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
    else {
        hmtlVacancies += `<h2>Não há vagas!</h2>`;
    }
    ;
    return hmtlVacancies;
}
let clickedShowToCompany = false;
function showToCompany() {
    //tentar reaproveitar os ifs
    if (!divToCandidate.classList.contains("hide")) {
        divToCandidate.classList.add("hide");
    }
    if (!divFormCompany.classList.contains("hide")) {
        divFormCompany.classList.add("hide");
    }
    if (!divFormCandidate.classList.contains("hide")) {
        divFormCandidate.classList.add("hide");
    }
    if (!clickedShowToCompany) {
        divToCompany.innerHTML += htmlToCompany;
        clickedShowToCompany = true;
    }
    createGraphic();
    divToCompany.classList.remove("hide");
    divGraphic.classList.remove("hide");
}
function createGraphic() {
    const skills = [];
    const candidatesForSkills = [];
    for (const skill in allSkills) {
        skills.push(skill);
        candidatesForSkills.push(allSkills[skill]);
    }
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
    showGrafig(graphicObjet);
}
function showGrafig(graphicObjet) {
    const graphicObjetJson = JSON.stringify(graphicObjet);
    scriptGrafic.innerHTML = `
   const ctx = document.getElementById('myChart');
   new Chart(ctx, ${graphicObjetJson});
   `;
    document.body.appendChild(scriptGrafic);
}
function reload() {
    window.location.reload();
}
