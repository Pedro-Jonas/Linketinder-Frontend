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

type companie = {
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
const nameCompanieRegex = new RegExp(/[A-Za-zà-ü]+(?: [A-za-zà-ü]+)*/);
const emailRegex = new RegExp(/[\w\.]+@[\w]+\.[a-zA-Z]{2,}/);
const cpfRegex = new RegExp(/\d{3}\.\d{3}\.\d{3}-\d{2}/);
const cnpjRegex = new RegExp(/\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/);
const ageRegex = new RegExp(/([1-9][0-9]|[1][0-1][0-9])/);
const cepRegex = new RegExp(/\d{5}-\d{3}/);

const candidates: candidate[] = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies: companie[] = JSON.parse(localStorage.getItem("companies") || '[]');
const allSkills = JSON.parse(localStorage.getItem("allSkills") || '[]');  

const divGraphic = document.getElementById("graphic") as HTMLBodyElement;
const scriptGrafic = document.createElement("script");

const divToCandidate = document.querySelector(".showToCandidate") as HTMLBodyElement;
const divToCompanie = document.querySelector(".showToCompanie") as HTMLBodyElement;

const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");

const divFormCandidate = (document.getElementById("divFormSignUpCandidate") as HTMLBodyElement);
const divFormCompanie = (document.getElementById("divFormSignUpCompanie") as HTMLBodyElement);

const formCreateCandidate = (document.getElementById("divFormSignUpCandidate") as HTMLFormElement);
const formCreateCompanie = (document.getElementById("divFormSignUpCompanie") as HTMLBodyElement);

let htmlToCandidate: string = ``;
let htmlToCompanie: string = ``;


creatListCompanies()
creatListCandidates()

function showOptionsSignUp(): void {
   buttonSignUp?.classList.toggle("buttonActionClicked");
   signUp?.classList.toggle("hide");
}

function reload(): void {
   window.location.reload();
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
      //criar função para pegar skills
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
   
      htmlToCompanie += `
      <div class="boxCompanieAndCandidate">
         <p>candidato ${candidates.indexOf(candidate) + 1}</p>
         <p>descrição: ${candidate.descripition}</p>
         <p>formação: ${candidate.academicEducation}</p>
         <p>skills: ${candidate.skills}</p>
      </div>
      `;
   }

   //jogar para dentro da função de pegar skills
   localStorage.setItem("allSkills", JSON.stringify(allSkills));
}


function showFormCandidate(): void {

   //tentar reaproveitar os ifs
   if (!divFormCompanie.classList.contains("hide")) {
      divFormCompanie.classList.add("hide")
   };

   if (!divToCandidate.classList.contains("hide")) {
      divToCandidate.classList.add("hide")
   };

   if (!divToCompanie.classList.contains("hide")) {
      divToCompanie.classList.add("hide")
      divGraphic.classList.add("hide")
   };

   divFormCandidate.classList.remove("hide");
   
}

function showFormCompanie(): void {
   //tentar reaproveitar os ifs
   if (!divFormCandidate.classList.contains("hide")) {
      divFormCandidate.classList.add("hide")
   };

   if (!divToCandidate.classList.contains("hide")) {
      divToCandidate.classList.add("hide")
   };

   if (!divToCompanie.classList.contains("hide")) {
      divToCompanie.classList.add("hide")
      divGraphic.classList.add("hide")
   };

   divFormCompanie.classList.remove("hide");
}

formCreateCandidate.addEventListener("submit", (event) => {
   event.preventDefault();

   //jogar os gets para fora da função
   const newCanditade: candidate = {
      name: (document.getElementById("candidateName") as HTMLFormElement).value,
      email: (document.getElementById("candidateEmail") as HTMLFormElement).value,
      cpf: (document.getElementById("candidateCpf") as HTMLFormElement).value,
      age: (document.getElementById("candidateAge") as HTMLFormElement).value,
      state: (document.getElementById("candidateState") as HTMLFormElement).value,
      cep: (document.getElementById("candidateCep") as HTMLFormElement).value,
      descripition: (document.getElementById("candidateDescripition") as HTMLFormElement).value,
      skills: (document.getElementById("candidateSkills") as HTMLFormElement).value.split(","),
      academicEducation : (document.getElementById("academicEducation") as HTMLFormElement).value.split(","),
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
 
   //usar o gets que foram para fora
   (document.getElementById("candidateName") as HTMLFormElement).value = "";
   (document.getElementById("candidateEmail") as HTMLFormElement).value = "";
   (document.getElementById("candidateCpf") as HTMLFormElement).value = "";
   (document.getElementById("candidateAge") as HTMLFormElement).value = "";
   (document.getElementById("candidateState") as HTMLFormElement).value = "";
   (document.getElementById("candidateCep") as HTMLFormElement).value = "";
   (document.getElementById("candidateDescripition") as HTMLFormElement).value = "";
   (document.getElementById("candidateSkills") as HTMLFormElement).value = "";
   (document.getElementById("academicEducation") as HTMLFormElement).value= "";
}

formCreateCompanie.addEventListener("submit", (event) => {
   event.preventDefault();

   //jogar os gets para fora da função
   const newCompanie: companie = {
      name: (document.getElementById("companieName") as HTMLFormElement).value,
      email: (document.getElementById("companieEmail") as HTMLFormElement).value,
      cnpj: (document.getElementById("companieCnpj") as HTMLFormElement).value,
      country: (document.getElementById("companieCountry") as HTMLFormElement).value,
      state: (document.getElementById("companieState") as HTMLFormElement).value,
      cep: (document.getElementById("companieCep") as HTMLFormElement).value,
      descripition: (document.getElementById("companieDescripition") as HTMLFormElement).value,
      jobVacancies: [
      {title: "(nome da vaga)", description: "descrição da vaga", skills: ["Java", "Javascript", "Sql"]},
      {title: "(nome da vaga)", description: "descrição da vaga", skills: ["Python", "Javascript", "React"]}
      ],
   };

   addNewCompanie(newCompanie);
})

function validateFormCompanie(companie: companie): boolean{

   if (!nameCompanieRegex.test(companie.name)) {
      alert("Insira um nome no formato válido")
      return false
   };

   if (!emailRegex.test(companie.email)) {
      alert("Insira um email no formato válido")
      return false
   };

   if (!cnpjRegex.test(companie.cnpj)) {
      alert("Insira um CNPJ no formato válido");
      return false;
   };

   if (!cepRegex.test(companie.cep)) {
      alert("Insira um CEP no formato válido");
      return false;
   };

   return true;
}

function addNewCompanie(companie: companie): void{

   if (validateFormCompanie(companie)) { 
      companies.push(companie)
      localStorage.setItem("companies", JSON.stringify(companies));

      resetFormCompanie()
      reload()
   } 
}

function resetFormCompanie() {
   
   //usar o gets que foram para fora
   (document.getElementById("companieName") as HTMLFormElement).value = "";
   (document.getElementById("companieEmail") as HTMLFormElement).value = "";
   (document.getElementById("companieCnpj") as HTMLFormElement).value = "";
   (document.getElementById("companieCountry") as HTMLFormElement).value = "";
   (document.getElementById("companieState") as HTMLFormElement).value = "";
   (document.getElementById("companieCep") as HTMLFormElement).value = "";
   (document.getElementById("companieDescripition") as HTMLFormElement).value = "";
}

let clickedShowToCandidate = false;
function showToCandidate(): void {
   //tentar reaproveitar os ifs
   if (!divToCompanie.classList.contains("hide")) {
      divGraphic.classList.add("hide")
      divToCompanie.classList.add("hide")
   }

   if (!divFormCompanie.classList.contains("hide")) {
      divFormCompanie.classList.add("hide")
   }

   if (!divFormCandidate.classList.contains("hide")) {
      divFormCandidate.classList.add("hide")
   }

   if (!clickedShowToCandidate) {
      divToCandidate.innerHTML += htmlToCandidate;
      clickedShowToCandidate = true;
   }

   divToCandidate.classList.remove("hide");
}

function showJobs(id: string) : void {
   //criar funçaõ para criar as vagas
   const idNumber = parseInt(id);
   const vacancies = companies[idNumber].jobVacancies;

   let hmtlVacancies = ``;

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
   }

   //criar função que adiciona vagas na compania
   const searchCompanie = (document.getElementById(id) as HTMLBodyElement);

   searchCompanie.innerHTML = `
   <div class="vacancies">
      ${companies[idNumber].jobVacancies ?
      hmtlVacancies :
      `<h2>Não há vagas!</h2>`
      }
   </div>
   `;
}

let clickedShowToCompanie = false;
function showToCompanie(): void {
   //tentar reaproveitar os ifs
   if (!divToCandidate.classList.contains("hide")) {
      divToCandidate.classList.add("hide")
   }

   if (!divFormCompanie.classList.contains("hide")) {
      divFormCompanie.classList.add("hide")
   }

   if (!divFormCandidate.classList.contains("hide")) {
      divFormCandidate.classList.add("hide")
   }

   if (!clickedShowToCompanie) {
      divToCompanie.innerHTML += htmlToCompanie;
      clickedShowToCompanie = true;
   }

   createGraphic();
   
   divToCompanie.classList.remove("hide");
   divGraphic.classList.remove("hide");
}

function createGraphic(): void {

   const skills: string[] = [];
   const candidatesForSkills: number[] = [];

   for(const skill in allSkills) {
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

   //criar uma fuunção showGrafig
   const graphicObjetJson = JSON.stringify(graphicObjet);
   scriptGrafic.innerHTML = `
   const ctx = document.getElementById('myChart');
   new Chart(ctx, ${graphicObjetJson});
   `;

   document.body.appendChild(scriptGrafic);
}