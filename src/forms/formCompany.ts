const formCreateCompany = (document.getElementById("divFormSignUpCompany") as HTMLBodyElement);
const divFormCompany = (document.getElementById("divFormSignUpCompany") as HTMLBodyElement);

const nameFormCompany =  (document.getElementById("companyName") as HTMLFormElement);
const emailFormCompany = (document.getElementById("companyEmail") as HTMLFormElement);
const cnpjFormCompany = (document.getElementById("companyCnpj") as HTMLFormElement);
const countryFormCompany = (document.getElementById("companyCountry") as HTMLFormElement);
const stateFormCompany = (document.getElementById("companyState") as HTMLFormElement);
const cepFormCompany = (document.getElementById("companyCep") as HTMLFormElement);
const descripitionFormCompany = (document.getElementById("companyDescripition") as HTMLFormElement);


function showFormCompany(): void {
    hideAll()
    divFormCompany.classList.remove("hide");
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

function resetFormCompany(): void {
    nameFormCompany.value = "";
    emailFormCompany.value = "";
    cnpjFormCompany.value = "";
    countryFormCompany.value = "";
    stateFormCompany.value = "";
    cepFormCompany.value = "";
    descripitionFormCompany.value = "";
}

function addNewCompany(company: company): void {
    if (validateFormCompany(company)) { 
       companies.push(company)
       localStorage.setItem("companies", JSON.stringify(companies));
 
       resetFormCompany()
       reload()
    }
 }