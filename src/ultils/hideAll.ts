function hideAll(): void{

    if (!divToCandidate.classList.contains("hide")) {
       divToCandidate.classList.add("hide")
    }
 
    if (!divToCompany.classList.contains("hide")) {
       divGraphic.classList.add("hide")
       divToCompany.classList.add("hide")
    }
 
    if (!divFormCompany.classList.contains("hide")) {
       divFormCompany.classList.add("hide")
    }
 
    if (!divFormCandidate.classList.contains("hide")) {
       divFormCandidate.classList.add("hide")
    }
 }