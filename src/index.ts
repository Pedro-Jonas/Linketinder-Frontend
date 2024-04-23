const candidates: candidate[] = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies: company[] = JSON.parse(localStorage.getItem("companies") || '[]');
const allSkills = JSON.parse(localStorage.getItem("allSkills") || '[]');  

const divToCandidate = document.querySelector(".showToCandidate") as HTMLBodyElement;
const divToCompany = document.querySelector(".showToCompany") as HTMLBodyElement;

creatListCompanies()
creatListCandidates()

let clickedShowToCandidate = false;
function showToCandidate(): void {
   hideAll();

   if (!clickedShowToCandidate) {
      divToCandidate.innerHTML += htmlToCandidate;
      clickedShowToCandidate = true;
   };

   divToCandidate.classList.remove("hide");
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

function showJobs(id: string) : void {
   const hmtlVacancies = createJobVacancies(id);
   const searchCompany = (document.getElementById(id) as HTMLBodyElement);

   searchCompany.innerHTML = `
   <div class="vacancies">
      ${hmtlVacancies}
   </div>
   `;
}