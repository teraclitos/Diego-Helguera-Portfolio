const projects = document.getElementById("projects");
const me = document.getElementById("me");
const contact = document.getElementById("contact");
const nameLabel = document.getElementById("name-label");
const matter = document.getElementById("matter");
const message = document.getElementById("message");
const submit = document.getElementById("submit-btn");
const WrongNameLanguage = document.getElementById("wrong-name");
const wrongEmailLanguage = document.getElementById("wrong-email");
const wrongMessageLanguage = document.getElementById("wrong-message");
const errorSubmitLanguage = document.getElementById("error");
const correctSubmitLanguage = document.getElementById("correct");
const languagePush = document.getElementById("language");
const languageNarrowScreen = document.getElementById("language-narrow-screen");
const localSTGLanguage = JSON.parse(localStorage.getItem("number")) || {
  id: 0,
};

const language = () => {
  if (languagePush.innerText === "EN") {
    me.innerText = "About me";
    projects.innerText = "Projects";
    contact.innerText = "Contact";
    languagePush.innerText = "ES";
    languageNarrowScreen.innerText = "Es";
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      nameLabel.innerText = "Name";
      matter.innerText = "Subject";
      message.innerText = "Leave your message";
      submit.value = "send";
      WrongNameLanguage.innerText =
        " The name can only have from 3 to 30 characters, it must not have numbers or symbols!!!";
      wrongEmailLanguage.innerText = " This doesn`t look like an email";
      wrongMessageLanguage.innerText =
        "The message can only have from 5 to 400 characters";
      errorSubmitLanguage.innerText =
        "ERROR!!! Fill all the required fields correctly ";
      correctSubmitLanguage.innerText =
        "Your message has been sent successfully";
    }
    localStorage.setItem("number", JSON.stringify({ id: 1 }));
  } else {
    me.innerText = "Acerca de mí";
    projects.innerText = "Proyectos";
    contact.innerText = "Contacto";
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      nameLabel.innerText = "Nombre";
      matter.innerText = "Asunto";
      message.innerText = "Deje su mensaje";
      submit.value = "enviar";
      WrongNameLanguage.innerText =
        " El nombre puede tener de 3 a 30 caracteres, no debe llevar ni números ni símbolos!!!";
      wrongEmailLanguage.innerText = " Debe respetar la forma de un email";
      wrongMessageLanguage.innerText =
        "El mensaje puede tener un largo de 5 a 400 caracteres";
      errorSubmitLanguage.innerText =
        " ERROR!!! Rellena correctamente todos los campos obligatorios";
      correctSubmitLanguage.innerText = "Su mensaje ha sido enviado con éxito";
    }

    languagePush.innerText = "EN";
    languageNarrowScreen.innerText = "EN";
    localStorage.setItem("number", JSON.stringify({ id: 0 }));
  }
};

const RenderLanguage = () => {
  if (
    window.location.href === "https://diego-helguera.netlify.app/index.html" ||
    window.location.href === "http://127.0.0.1:5500/index.html"
  ) {
    projects.style.color = "#d65f37";
  } else if (
    window.location.href ===
      "https://diego-helguera.netlify.app/html/acercademi.html" ||
    window.location.href === "http://127.0.0.1:5500/html/acercademi.html"
  ) {
    me.style.color = "#d65f37";
  } else if (
    window.location.href ===
      "https://diego-helguera.netlify.app/html/contacto.html" ||
    window.location.href === "http://127.0.0.1:5500/html/contacto.html"
  ) {
    contact.style.color = "#d65f37";
  } else {
    contact.style.color = "#d65f37";
  }
  if (localSTGLanguage.id === 0) {
    me.innerText = "Acerca de mí";
    projects.innerText = "Proyectos";
    contact.innerText = "Contacto";
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      contact.style.color = "#d65f37";
      nameLabel.innerText = "Nombre";
      matter.innerText = "Asunto";
      message.innerText = "Deje su mensaje";
      submit.value = "enviar";
      WrongNameLanguage.innerText =
        "El nombre puede tener de 3 a 30 caracteres, no debe llevar ni números ni símbolos!!!";
      wrongEmailLanguage.innerText = " Debe respetar la forma de un email";
      wrongMessageLanguage.innerText =
        "El mensaje puede tener un largo de 5 a 400 caracteres";
      errorSubmitLanguage.innerText =
        " ERROR!!! Rellena correctamente todos los campos obligatorios";
      correctSubmitLanguage.innerText = "Su mensaje ha sido enviado con éxito";
    }

    languagePush.innerText = "EN";
    languageNarrowScreen.innerText = "EN";
  } else {
    me.innerText = "About me";
    projects.innerText = "Projects";
    contact.innerText = "Contact";
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      nameLabel.innerText = "Name";
      matter.innerText = "Subject";
      message.innerText = "Leave your message";
      submit.value = "send";
      WrongNameLanguage.innerText =
        " The name can only have from 3 to 30 characters, it must not have numbers or symbols!!!";
      wrongEmailLanguage.innerText = " This doesn`t look like an email";
      wrongMessageLanguage.innerText =
        "The message can only have from 5 to 400 characters";
      errorSubmitLanguage.innerText =
        "ERROR!!! Fill all the required fields correctly ";
      correctSubmitLanguage.innerText =
        "Your message has been sent successfully";
    }

    languagePush.innerText = "ES";
    languageNarrowScreen.innerText = "ES";
  }
};
RenderLanguage();
