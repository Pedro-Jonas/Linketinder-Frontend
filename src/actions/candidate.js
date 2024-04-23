"use strict";
let htmlToCompany = ``;
function creatListCandidates() {
    for (const candidate of candidates) {
        addSkills(candidate);
        htmlToCompany += `
       <div class="boxCompanyAndCandidate">
          <p>candidato ${candidates.indexOf(candidate) + 1}</p>
          <p>descrição: ${candidate.descripition}</p>
          <p>formação: ${candidate.academicEducation}</p>
          <p>skills: ${candidate.skills}</p>
       </div>
       `;
    }
}
function addSkills(candidate) {
    for (const skill of candidate.skills) {
        const skillTrim = skill.trim().toUpperCase();
        if (allSkills.hasOwnProperty(skillTrim)) {
            let count = allSkills[skillTrim];
            count ? count++ : 0;
            allSkills[skillTrim] = count ? count : 0;
        }
        else {
            allSkills[skillTrim] = 1;
        }
        ;
    }
    localStorage.setItem("allSkills", JSON.stringify(allSkills));
}
