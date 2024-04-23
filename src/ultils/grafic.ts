const divGraphic = document.getElementById("graphic") as HTMLBodyElement;
const scriptGrafic = document.createElement("script");

function createGraphic(): void {

    const skills: string[] = [];
    const candidatesForSkills: number[] = [];
 
    for(const skill in allSkills) {
       skills.push(skill);
       candidatesForSkills.push(allSkills[skill]);
    }
 
    const graphicObjet: Object = {
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
 
function showGrafig(graphicObjet: Object): void{
 
    const graphicObjetJson = JSON.stringify(graphicObjet);
    scriptGrafic.innerHTML = `
    const ctx = document.getElementById('myChart');
    new Chart(ctx, ${graphicObjetJson});
    `;
 
    document.body.appendChild(scriptGrafic);
}
