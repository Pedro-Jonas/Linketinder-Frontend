"use strict";
const formCreateCandidate = document.getElementById("divFormSignUpCandidate");
const divFormCandidate = document.getElementById("divFormSignUpCandidate");
const nameFormCandidate = document.getElementById("candidateName");
const emailFormCandidate = document.getElementById("candidateEmail");
const cpfFormCandidate = document.getElementById("candidateCpf");
const ageFormCandidate = document.getElementById("candidateAge");
const stateFormCandidate = document.getElementById("candidateState");
const cepFormCandidate = document.getElementById("candidateCep");
const descripitionFormCandidate = document.getElementById("candidateDescripition");
const skillsFormCandidate = document.getElementById("candidateSkills");
const academicEducationFormCandidate = document.getElementById("academicEducation");
function showFormCandidate() {
    hideAll();
    divFormCandidate.classList.remove("hide");
}
formCreateCandidate.addEventListener("submit", (event) => {
    event.preventDefault();
    const newCanditade = {
        name: nameFormCandidate.value,
        email: emailFormCandidate.value,
        cpf: cpfFormCandidate.value,
        age: ageFormCandidate.value,
        state: stateFormCandidate.value,
        cep: cepFormCandidate.value,
        descripition: descripitionFormCandidate.value,
        skills: skillsFormCandidate.value.split(","),
        academicEducation: academicEducationFormCandidate.value.split(","),
    };
    addNewCandidate(newCanditade);
});
function resetFormCandidate() {
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
function addNewCandidate(candidate) {
    if (validateFormCandidate(candidate)) {
        candidates.push(candidate);
        localStorage.setItem("candidates", JSON.stringify(candidates));
        resetFormCandidate();
        reload();
    }
    ;
}
