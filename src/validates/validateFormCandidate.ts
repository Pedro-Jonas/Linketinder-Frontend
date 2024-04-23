const emailCandidateRegex = new RegExp(/[\w\.]+@[\w]+\.[a-zA-Z]{2,}/);
const nameCandidateRegex = new RegExp(/[A-Za-zà-ü]+(?: [A-za-zà-ü]+)+/);
const cpfRegex = new RegExp(/\d{3}\.\d{3}\.\d{3}-\d{2}/);
const ageRegex = new RegExp(/([1-9][0-9]|[1][0-1][0-9])/);
const cepCandidateRegex = new RegExp(/\d{5}-\d{3}/);

function validateFormCandidate(candidate: candidate): boolean {

    if (!nameCandidateRegex.test(candidate.name)) {
       alert("Insira um nome no formato válido")
       return false
    };
 
    if (!emailCandidateRegex.test(candidate.email)) {
       alert("Insira um email no formato válido")
       return false
    };
 
    if (!cpfRegex.test(candidate.cpf)) {
       alert("Insira um CPF no formato válido")
       return false
    };
 
    if (!ageRegex.test(candidate.age)) {
       alert("Insira uma idade válida")
       return false
    };
 
    if (!cepCandidateRegex.test(candidate.cep)) {
       alert("Insira um CEP no formato válido")
       return false
    };
 
    return true;
}
