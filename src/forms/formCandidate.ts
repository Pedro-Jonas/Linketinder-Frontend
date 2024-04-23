const formCreateCandidate = (document.getElementById("divFormSignUpCandidate") as HTMLFormElement);
const divFormCandidate = (document.getElementById("divFormSignUpCandidate") as HTMLBodyElement);

const nameFormCandidate =  (document.getElementById("candidateName") as HTMLFormElement);
const emailFormCandidate = (document.getElementById("candidateEmail") as HTMLFormElement);
const cpfFormCandidate = (document.getElementById("candidateCpf") as HTMLFormElement);
const ageFormCandidate = (document.getElementById("candidateAge") as HTMLFormElement);
const stateFormCandidate = (document.getElementById("candidateState") as HTMLFormElement);
const cepFormCandidate = (document.getElementById("candidateCep") as HTMLFormElement);
const descripitionFormCandidate = (document.getElementById("candidateDescripition") as HTMLFormElement);
const skillsFormCandidate = (document.getElementById("candidateSkills") as HTMLFormElement);
const academicEducationFormCandidate  = (document.getElementById("academicEducation") as HTMLFormElement);

function showFormCandidate(): void {
   hideAll();
   divFormCandidate.classList.remove("hide");
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

function addNewCandidate(candidate: candidate): void{
   if (validateFormCandidate(candidate)){
      candidates.push(candidate)
      localStorage.setItem("candidates", JSON.stringify(candidates))

      resetFormCandidate()
      reload()
   };
}
