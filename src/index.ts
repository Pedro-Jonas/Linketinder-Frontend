type candidate = {
   name: string;
   email: string;
   cpf:string;
   age: string;
   state: string;
   cep: string;
   descripition: string;
   skills: string;
}

type companie = {
   name: string;
   email: string;
   cnpj:string;
   country: string;
   state: string;
   cep: string;
   descripition: string;
}

const candidates : candidate[] = JSON.parse(localStorage.getItem("candidates") || '[]');
const companies : companie[] = JSON.parse(localStorage.getItem("companies") || '[]');

const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");

const formCandidade = document.getElementById("formSignUpCandidate");
const formCompanies = document.getElementById("formSignUpCompanies");


function showOptionsSignUp() : void {
   buttonSignUp?.classList.toggle("buttonActionClicked")
   signUp?.classList.toggle("hide")
}

function showFormCandidade() : void {
   if(!formCompanies?.classList.contains("hide")){
      formCompanies?.classList.add("hide")
   }
   formCandidade?.classList.remove("hide")
}

function showFormCompanies() : void {
   if(!formCandidade?.classList.contains("hide")){
      formCandidade?.classList.add("hide")
   }
   formCompanies?.classList.remove("hide")
}

function reload() : void {
   window.location.reload()
}

function createNewCandidade() : void {
   const newCanditade : candidate = {
      name: (document.getElementById("candidateName") as HTMLFormElement).value,
      email: (document.getElementById("candidateEmail") as HTMLFormElement).value,
      cpf: (document.getElementById("candidateCpf") as HTMLFormElement).value,
      age: (document.getElementById("candidateAge") as HTMLFormElement).value,
      state: (document.getElementById("candidateState") as HTMLFormElement).value,
      cep: (document.getElementById("candidateCep")as HTMLFormElement).value,
      descripition: (document.getElementById("candidateDescripition") as HTMLFormElement).value,
      skills: (document.getElementById("candidateSkills") as HTMLFormElement).value,
   }
   candidates.push(newCanditade)
   localStorage.setItem("candidates", JSON.stringify([candidates]))
}

function createNewCompanie() : void {
   const newCompanie : companie = {
      name: (document.getElementById("companieName") as HTMLFormElement).value,
      email: (document.getElementById("companieEmail") as HTMLFormElement).value,
      cnpj: (document.getElementById("companieCnpj") as HTMLFormElement).value,
      country: (document.getElementById("companieCountry") as HTMLFormElement).value,
      state: (document.getElementById("companieState") as HTMLFormElement).value,
      cep: (document.getElementById("companieCep")as HTMLFormElement).value,
      descripition: (document.getElementById("companieDescripition") as HTMLFormElement).value,
   }
   companies.push(newCompanie)
   localStorage.setItem("companies", JSON.stringify([companies]))
}

function showToCandidate() : void {
   reload()
}

function showToCompanie() : void {
   reload()
}
