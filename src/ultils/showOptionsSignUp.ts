const buttonSignUp = document.getElementById("buttonSignUp");
const signUp = document.getElementById("signUp");

function showOptionsSignUp(): void {
   buttonSignUp?.classList.toggle("buttonActionClicked");
   signUp?.classList.toggle("hide");
}