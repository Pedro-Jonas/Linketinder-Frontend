"use strict";
let htmlToCandidate = ``;
function creatListCompanies() {
    for (let companie of companies) {
        htmlToCandidate += `
       <div class="boxCompanyAndCandidate">
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
