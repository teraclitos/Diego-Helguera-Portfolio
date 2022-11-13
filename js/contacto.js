let windowScreenContact = window.matchMedia("(max-width: 991.98px)");
const names = document.getElementById("name");
const asunto = document.getElementById("asunto");
const email = document.getElementById("email");
const text = document.getElementById("text");
const localSTGContact = JSON.parse(localStorage.getItem("number"));

const RenderContact = () => {
  if (windowScreenContact.matches) {
    if (localSTGContact.id === 0) {
      names.placeholder = "Julian";
      asunto.placeholder = "Asunto(opcional)";
      email.placeholder = "julian@gmail.com";
      text.placeholder = "Deje su mensaje";
    } else {
      names.placeholder = "Julian";
      asunto.placeholder = "Matter(optional)";
      email.placeholder = "julian@gmail.com";
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
