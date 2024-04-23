
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