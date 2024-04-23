"use strict";
const divGraphic = document.getElementById("graphic");
const scriptGrafic = document.createElement("script");
function createGraphic() {
    const skills = [];
    const candidatesForSkills = [];
    for (const skill in allSkills) {
        skills.push(skill);
        candidatesForSkills.push(allSkills[skill]);
    }
    const graphicObjet = {
        type: 'bar',
        data: {
            labels: skills,
            datasets: [{
                    label: "Candidatos por Skills",
                    data: candidatesForSkills,
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };
    showGrafig(graphicObjet);
}
function showGrafig(graphicObjet) {
    const graphicObjetJson = JSON.stringify(graphicObjet);
    scriptGrafic.innerHTML = `
    const ctx = document.getElementById('myChart');
    new Chart(ctx, ${graphicObjetJson});
    `;
    document.body.appendChild(scriptGrafic);
}
