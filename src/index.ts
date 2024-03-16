type JobVacancies = {
   title: string;
   description: string;
   skills: string[];
}

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
}

type companie = {
   name: string;
   email: string;
   cnpj: string;
   country: string;
   state: string;
   cep: string;
   descripition: string;
   jobVacancies?: JobVacancies[] | [];
}

const candidates: candidate[] = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies: companie[] = JSON.parse(localStorage.getItem("companies") || '[]');
let allSkills = new Map<string, number>();

const divGraphic = document.getElementById("graphic") as HTMLBodyElement;
const scriptGrafic = document.createElement("script");

const divToCandidate = document.querySelector(".showToCandidate") as HTMLBodyElement;
const divToCompanie = document.querySelector(".showToCompanie") as HTMLBodyElement;


const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");

const formCandidade = (document.getElementById("formSignUpCandidate") as HTMLBodyElement);
const formCompanies = (document.getElementById("formSignUpCompanies") as HTMLBodyElement);

let htmlToCandidate: string = ``;
let htmlToCompanie: string = ``;

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
   `
}

for (let candidate of candidates) {
   for(let skill of candidate.skills){
      if (allSkills.has(skill)){
         let count = allSkills.get(skill);
         count? count++ : 0;
         allSkills.set(skill, count? count: 0)
      } else {
         allSkills.set(skill,1)
      }
   
   }
   htmlToCompanie += `
   <div class="boxCompanieAndCandidate">
      <p>candidato ${candidates.indexOf(candidate) + 1}</p>
      <p>skills: ${candidate.skills}</p>
      <p>formação: ${candidate.academicEducation}</p>
      <p>descrição: ${candidate.descripition}</p>
   </div>
   `
}

console.log(allSkills)

function showOptionsSignUp(): void {
   buttonSignUp?.classList.toggle("buttonActionClicked")
   signUp?.classList.toggle("hide")
}

function showFormCandidade(): void {
   if (!formCompanies.classList.contains("hide")) {
      formCompanies.classList.add("hide")
   }

   if (!divToCandidate.classList.contains("hide")) {
      divToCandidate.classList.add("hide")
   }

   if (!divToCompanie.classList.contains("hide")) {
      divToCompanie.classList.add("hide")
      divGraphic.classList.add("hide")
   }

   formCandidade.classList.remove("hide")
   
}

function showFormCompanies(): void {
   if (!formCandidade?.classList.contains("hide")) {
      formCandidade?.classList.add("hide")
   }

   if (!divToCandidate.classList.contains("hide")) {
      divToCandidate.classList.add("hide")
   }

   if (!divToCompanie.classList.contains("hide")) {
      divToCompanie.classList.add("hide")
      divGraphic.classList.add("hide")
   }
   formCompanies?.classList.remove("hide")
}

function reload(): void {
   window.location.reload()
}

function createNewCandidade(): void {

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
   }

   candidates.push(newCanditade)
   localStorage.setItem("candidates", JSON.stringify(candidates))
}

function createNewCompanie(): void {

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
      {title: "(nome da vaga)", description: "descrição da vaga", skills: ["Pythion", "Javascript", "React"]}
      ],
   }

   companies.push(newCompanie)
   localStorage.setItem("companies", JSON.stringify(companies))
}

let clickedShowToCandidate = false;
function showToCandidate(): void {

   if (!divToCompanie.classList.contains("hide")) {
      divGraphic.classList.add("hide")
      divToCompanie.classList.add("hide")
   }

   if (!formCompanies.classList.contains("hide")) {
      formCompanies.classList.add("hide")
   }

   if (!formCandidade?.classList.contains("hide")) {
      formCandidade.classList.add("hide")
   }

   if (!clickedShowToCandidate) {
      divToCandidate.innerHTML += htmlToCandidate;
      clickedShowToCandidate = true;
   }

   divToCandidate.classList.remove("hide");
}

function showJobs(id: string) : void {
   const searchCompanie = (document.getElementById(id) as HTMLBodyElement);
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
   searchCompanie.innerHTML = `
   <div class="vacancies">
      ${companies[idNumber].jobVacancies ?
      hmtlVacancies :
      `<h2>Não há vagas!</h2>`
      }
   </div>
   `
}

let clickedShowToCompanie = false;
function showToCompanie(): void {
   if (!divToCandidate.classList.contains("hide")) {
      divToCandidate.classList.add("hide")
   }

   if (!formCompanies.classList.contains("hide")) {
      formCompanies.classList.add("hide")
   }

   if (!formCandidade?.classList.contains("hide")) {
      formCandidade.classList.add("hide")
   }

   if (!clickedShowToCompanie) {
      divToCompanie.innerHTML += htmlToCompanie;
      clickedShowToCompanie = true;
   }

   createGraphic()
   
   divToCompanie.classList.remove("hide");
   divGraphic.classList.remove("hide")
}

function createGraphic(): void {
   const skills: string[] = [];
   const candidatesForSkills: number[] = [];
   allSkills.forEach((key, value) => {
      console.log(value, key)
      candidatesForSkills.push(key)
      skills.push(value)
   })
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
   new Chart(ctx, ${graphicObjetJson});`
   document.body.appendChild(scriptGrafic);
}
