type jobVacancies = {
   title: string;
   description: string;
   skills: string[];
};

type candidate = {
   name: string;
   email: string;
   cpf: string;
   age: string;
   state: string;
   cep: string;
   descripition: string;
   skills: string[];
   academicEducation: string[];
};

type company = {
   name: string;
   email: string;
   cnpj: string;
   country: string;
   state: string;
   cep: string;
   descripition: string;
   jobVacancies?: jobVacancies[] | [];
};

const nameCandidateRegex = new RegExp(/[A-Za-zà-ü]+(?: [A-za-zà-ü]+)+/);
const nameCompanyRegex = new RegExp(/[A-Za-zà-ü]+(?: [A-za-zà-ü]+)*/);
const emailRegex = new RegExp(/[\w\.]+@[\w]+\.[a-zA-Z]{2,}/);
const cpfRegex = new RegExp(/\d{3}\.\d{3}\.\d{3}-\d{2}/);
const cnpjRegex = new RegExp(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/);
const ageRegex = new RegExp(/([1-9][0-9]|[1][0-1][0-9])/);
const cepRegex = new RegExp(/\d{5}-\d{3}/);

const candidates: candidate[] = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies: company[] = JSON.parse(localStorage.getItem("companies") || '[]');
const allSkills = JSON.parse(localStorage.getItem("allSkills") || '[]');  

const divGraphic = document.getElementById("graphic") as HTMLBodyElement;
const scriptGrafic = document.createElement("script");

const divToCandidate = document.querySelector(".showToCandidate") as HTMLBodyElement;
const divToCompany = document.querySelector(".showToCompanie") as HTMLBodyElement;

const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");

const divFormCandidate = (document.getElementById("divFormSignUpCandidate") as HTMLBodyElement);
const divFormCompany = (document.getElementById("divFormSignUpCompanie") as HTMLBodyElement);

const formCreateCandidate = (document.getElementById("divFormSignUpCandidate") as HTMLFormElement);
const formCreateCompany = (document.getElementById("divFormSignUpCompanie") as HTMLBodyElement);

let htmlToCandidate: string = ``;
let htmlToCompany: string = ``;

const nameFormCandidate =  (document.getElementById("candidateName") as HTMLFormElement);
const emailFormCandidate = (document.getElementById("candidateEmail") as HTMLFormElement);
const cpfFormCandidate = (document.getElementById("candidateCpf") as HTMLFormElement);
const ageFormCandidate = (document.getElementById("candidateAge") as HTMLFormElement);
const stateFormCandidate = (document.getElementById("candidateState") as HTMLFormElement);
const cepFormCandidate = (document.getElementById("candidateCep") as HTMLFormElement);
const descripitionFormCandidate = (document.getElementById("candidateDescripition") as HTMLFormElement);
const skillsFormCandidate = (document.getElementById("candidateSkills") as HTMLFormElement);
const academicEducationFormCandidate  = (document.getElementById("academicEducation") as HTMLFormElement);

const nameFormCompany =  (document.getElementById("companieName") as HTMLFormElement);
const emailFormCompany = (document.getElementById("companieEmail") as HTMLFormElement);
const cnpjFormCompany = (document.getElementById("candidateCpf") as HTMLFormElement);
const countryFormCompany = (document.getElementById("companieCountry") as HTMLFormElement);
const stateFormCompany = (document.getElementById("companieState") as HTMLFormElement);
const cepFormCompany = (document.getElementById("companieCep") as HTMLFormElement);
const descripitionFormCompany = (document.getElementById("companieDescripition") as HTMLFormElement);

creatListCompanies()
creatListCandidates()

function showOptionsSignUp(): void {
   buttonSignUp?.classList.toggle("buttonActionClicked");
   signUp?.classList.toggle("hide");
}

function creatListCompanies() : void {

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

function creatListCandidates() : void {

   for (const candidate of candidates) {
      addSkills(candidate)

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

function addSkills(candidate: candidate): void {

   for(const skill of candidate.skills){

      const skillTrim = skill.trim().toUpperCase();

      if (allSkills.hasOwnProperty(skillTrim)){
         let count = allSkills[skillTrim]
         count? count++ : 0
         allSkills[skillTrim] = count? count: 0
      } else {
         allSkills[skillTrim] = 1
      };
   }

   localStorage.setItem("allSkills", JSON.stringify(allSkills));
}


function showFormCandidate(): void {

   hideAll();

   divFormCandidate.classList.remove("hide");
   
}

function showFormCompany(): void {

   hideAll()

   divFormCompany.classList.remove("hide");
}

formCreateCandidate.addEventListener("submit", (event) => {
   event.preventDefault();

   const newCanditade: candidate = {
      name: nameFormCandidate.value,
      email: emailFormCandidate.value,
      cpf: cpfFormCandidate.value,
      age: ageFormCandidate.value,
      state: stateFormCandidate.value,
      cep: cepFormCandidate.value,
      descripition: descripitionFormCandidate.value,
      skills: skillsFormCandidate.value.split(","),
      academicEducation : academicEducationFormCandidate.value.split(","),
   };

   addNewCandidate(newCanditade);
})

function validateFormCandidate(candidate: candidate): boolean {

   if (!nameCandidateRegex.test(candidate.name)) {
      alert("Insira um nome no formato válido")
      return false
   };

   if (!emailRegex.test(candidate.email)) {
      alert("Insira um email no formato válido")
      return false
   };

   if (!cpfRegex.test(candidate.cpf)) {
      alert("Insira um CPF no formato válido")
      return false
   };

   if (!ageRegex.test(candidate.age)) {
      alert("Insira uma idade válida")
      return false
   };

   if (!cepRegex.test(candidate.cep)) {
      alert("Insira um CEP no formato válido")
      return false
   };

   return true;
}

function addNewCandidate(candidate: candidate): void{

   if (validateFormCandidate(candidate)){
      candidates.push(candidate)
      localStorage.setItem("candidates", JSON.stringify(candidates))

      resetFormCandidate()
      reload()
   };
}

function resetFormCandidate(): void {
 
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

   const newCompany: company = {
      name: nameFormCompany.value,
      email: emailFormCompany.value,
      cnpj: cnpjFormCompany.value,
      country: countryFormCompany.value,
      state: stateFormCompany.value,
      cep: cepFormCompany.value,
      descripition: descripitionFormCompany.value,
      jobVacancies: [
      {title: "(nome da vaga)", description: "descrição da vaga", skills: ["Java", "Javascript", "Sql"]},
      {title: "(nome da vaga)", description: "descrição da vaga", skills: ["Python", "Javascript", "React"]}
      ],
   };

   addNewCompany(newCompany);
})

function validateFormCompany(company: company): boolean{

   if (!nameCompanyRegex.test(company.name)) {
      alert("Insira um nome no formato válido")
      return false
   };

   if (!emailRegex.test(company.email)) {
      alert("Insira um email no formato válido")
      return false
   };

   if (!cnpjRegex.test(company.cnpj)) {
      alert("Insira um CNPJ no formato válido");
      return false;
   };

   if (!cepRegex.test(company.cep)) {
      alert("Insira um CEP no formato válido");
      return false;
   };

   return true;
}

function addNewCompany(company: company): void{

   if (validateFormCompany(company)) { 
      companies.push(company)
      localStorage.setItem("companies", JSON.stringify(companies));

      resetFormCompany()
      reload()
   } 
}

function resetFormCompany() {

   nameFormCandidate.value = "";
   emailFormCandidate.value = "";
   cpfFormCandidate.value = "";
   ageFormCandidate.value = "";
   stateFormCandidate.value = "";
   cepFormCandidate.value = "";
   descripitionFormCandidate.value = "";
}

let clickedShowToCandidate = false;
function showToCandidate(): void {
   
   hideAll();

   if (!clickedShowToCandidate) {
      divToCandidate.innerHTML += htmlToCandidate;
      clickedShowToCandidate = true;
   };

   divToCandidate.classList.remove("hide");
}

function showJobs(id: string) : void {

   const hmtlVacancies = createJobVacancies(id);
   const searchCompanie = (document.getElementById(id) as HTMLBodyElement);

   searchCompanie.innerHTML = `
   <div class="vacancies">
      ${hmtlVacancies}
   </div>
   `;
}

function createJobVacancies(id: string) : string {

   const idNumber: number = parseInt(id);
   const vacancies: jobVacancies[] | undefined = companies[idNumber].jobVacancies;

   let hmtlVacancies: string = ``;

   if (vacancies) {
      for(let jobVacancie of vacancies) {
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
         `
      } 
   } else {
      hmtlVacancies += `<h2>Não há vagas!</h2>`
   };

   return hmtlVacancies;
}


let clickedShowToCompany = false;
function showToCompany(): void {
   
   hideAll();

   if (!clickedShowToCompany) {
      divToCompany.innerHTML += htmlToCompany;
      clickedShowToCompany = true;
   }

   createGraphic();
   
   divToCompany.classList.remove("hide");
   divGraphic.classList.remove("hide");
}

function createGraphic(): void {

   const skills: string[] = [];
   const candidatesForSkills: number[] = [];

   for(const skill in allSkills) {
      skills.push(skill);
      candidatesForSkills.push(allSkills[skill]);
   }

   const graphicObjet: Object = {
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

function showGrafig(graphicObjet: Object): void{

   const graphicObjetJson = JSON.stringify(graphicObjet);
   scriptGrafic.innerHTML = `
   const ctx = document.getElementById('myChart');
   new Chart(ctx, ${graphicObjetJson});
   `;

   document.body.appendChild(scriptGrafic);
}

function reload(): void {
   window.location.reload();
}

function hideAll(): void{

   if (!divToCandidate.classList.contains("hide")) {
      divToCandidate.classList.add("hide")
   }

   if (!divToCompany.classList.contains("hide")) {
      divGraphic.classList.add("hide")
      divToCompany.classList.add("hide")
   }

   if (!divFormCompany.classList.contains("hide")) {
      divFormCompany.classList.add("hide")
   }

   if (!divFormCandidate.classList.contains("hide")) {
      divFormCandidate.classList.add("hide")
   }
}