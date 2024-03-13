const buttonSignUp = document.getElementById("buttonSignUp")
const signUp = document.getElementById("signUp")

const formCandidade = document.getElementById("formSignUpCandidate")
const formCompanies = document.getElementById("formSignUpCompanies")


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