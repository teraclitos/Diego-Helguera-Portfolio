let windowScreenContact = window.matchMedia("(max-width: 991.98px)");
const names = document.getElementById("name");
const asunto = document.getElementById("asunto");
const email = document.getElementById("email");
const text = document.getElementById("area");
const languageBtn = document.getElementById("language");
const languageBtnNarrowScreen = document.getElementById(
  "language-narrow-screen"
);

let localSTGContact = JSON.parse(localStorage.getItem("number"));

const RenderContact = () => {
  if (windowScreenContact.matches) {
    if (localSTGContact.id === 0) {
      names.placeholder = "Nombre";
      asunto.placeholder = "Asunto(opcional)";
      email.placeholder = "Email";
      text.placeholder = "Deje su mensaje";
    } else {
      names.placeholder = "Name";
      asunto.placeholder = "Subject(optional)";
      email.placeholder = "Email";
      text.placeholder = "Leave your message";
    }
  } else {
    if (localSTGContact.id === 0) {
      names.placeholder = "";
      asunto.placeholder = "(opcional)";
      email.placeholder = "";
      text.placeholder = "";
    } else {
      names.placeholder = "";
      asunto.placeholder = "(optional)";
      email.placeholder = "";
      text.placeholder = "";
    }
  }
};
RenderContact();

windowScreenContact.addEventListener("change", () => {
  RenderContact();
});

languageBtn.addEventListener("click", () => {
  localSTGContact = JSON.parse(localStorage.getItem("number"));
  RenderContact();
});

languageBtnNarrowScreen.addEventListener("click", () => {
  localSTGContact = JSON.parse(localStorage.getItem("number"));
  RenderContact();
});
