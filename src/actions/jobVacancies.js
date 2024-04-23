"use strict";
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
