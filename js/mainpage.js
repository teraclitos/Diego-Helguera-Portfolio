const textAtelier = document.getElementById("text-atelier");
const atelierGreen = document.getElementById("atelier-green");
const textCiudadParque = document.getElementById("text-ciudad-parque");
const ciudadParqueGreen = document.getElementById("ciudad-parque-green");
const textEdificio1 = document.getElementById("text-edificio1");
const edificio1Green = document.getElementById("edificio1-green");
const textEdificio2 = document.getElementById("text-edificio2");
const edificio2Green = document.getElementById("edificio2-green");
const textTorreDual = document.getElementById("text-torre-dual");
const torreDualGreen = document.getElementById("torre-dual-green");
const textSantiago = document.getElementById("text-santiago");
const santiagoGreen = document.getElementById("santiago-green");
const textCorrientes = document.getElementById("text-corrientes");
const corrientesGreen = document.getElementById("corrientes-green");
const textPatioDeUco = document.getElementById("text-patio-de-uco");
const patioDeUcoGreen = document.getElementById("patio-de-uco-green");
const textTermitiere = document.getElementById("text-termitiere");
const termitiereGreen = document.getElementById("termitiere-green");

const textHoverInImg = (title) => {
  switch (title) {
    case "atelier":
      textAtelier.style.opacity = "1";
      atelierGreen.style.opacity = "1";
      atelierGreen.classList.remove("transition--opacity--green");

      break;
    case "ciudadParque":
      textCiudadParque.style.opacity = "1";
      ciudadParqueGreen.style.opacity = "1";
      ciudadParqueGreen.classList.remove("transition--opacity--green");

      break;
    case "edificio1":
      textEdificio1.style.opacity = "1";
      edificio1Green.style.opacity = "1";
      edificio1Green.classList.remove("transition--opacity--green");

      break;
    case "edificio2":
      textEdificio2.style.opacity = "1";
      edificio2Green.style.opacity = "1";
      edificio2Green.classList.remove("transition--opacity--green");

      break;

    case "torreDual":
      textTorreDual.style.opacity = "1";
      torreDualGreen.style.opacity = "1";
      torreDualGreen.classList.remove("transition--opacity--green");

      break;
    case "santiago":
      textSantiago.style.opacity = "1";
      santiagoGreen.style.opacity = "1";
      santiagoGreen.classList.remove("transition--opacity--green");

      break;
    case "corrientes":
      textCorrientes.style.opacity = "1";
      corrientesGreen.style.opacity = "1";
      corrientesGreen.classList.remove("transition--opacity--green");

      break;
    case "patioDeUco":
      textPatioDeUco.style.opacity = "1";
      patioDeUcoGreen.style.opacity = "1";
      patioDeUcoGreen.classList.remove("transition--opacity--green");

      break;

    default:
      textTermitiere.style.opacity = "1";
      termitiereGreen.style.opacity = "1";
      termitiereGreen.classList.remove("transition--opacity--green");
      break;
  }
};

const textHoverOutImg = (title) => {
  switch (title) {
    case "atelier":
      textAtelier.style.opacity = "0";
      atelierGreen.style.opacity = "0";
      atelierGreen.classList.add("transition--opacity--green");

      break;
    case "ciudadParque":
      textCiudadParque.style.opacity = "0";
      ciudadParqueGreen.style.opacity = "0";
      ciudadParqueGreen.classList.add("transition--opacity--green");

      break;
    case "edificio1":
      textEdificio1.style.opacity = "0";
      edificio1Green.style.opacity = "0";
      edificio1Green.classList.add("transition--opacity--green");

      break;
    case "edificio2":
      textEdificio2.style.opacity = "0";
      edificio2Green.style.opacity = "0";
      edificio2Green.classList.add("transition--opacity--green");

      break;
    case "torreDual":
      textTorreDual.style.opacity = "0";
      torreDualGreen.style.opacity = "0";
      torreDualGreen.classList.add("transition--opacity--green");

      break;
    case "santiago":
      textSantiago.style.opacity = "0";
      santiagoGreen.style.opacity = "0";
      santiagoGreen.classList.add("transition--opacity--green");

      break;
    case "corrientes":
      textCorrientes.style.opacity = "0";
      corrientesGreen.style.opacity = "0";
      corrientesGreen.classList.add("transition--opacity--green");

      break;
    case "patioDeUco":
      textPatioDeUco.style.opacity = "0";
      patioDeUcoGreen.style.opacity = "0";
      patioDeUcoGreen.classList.add("transition--opacity--green");

      break;

    default:
      textTermitiere.style.opacity = "0";
      termitiereGreen.style.opacity = "0";
      termitiereGreen.classList.add("transition--opacity--green");
      break;
  }
};

const projectsDetailWideScreen = (title) => {
  if (arrow.style.display === "none") {
    switch (title) {
      case "atelier":
        location.href = "/html/atelier.html";

        break;
      case "ciudadParque":
        location.href = "/html/ciudadparque.html";

        break;
      case "torreDual":
        location.href = "/html/torredual.html";

        break;
      case "santiago":
        location.href = "/html/santiago.html";

        break;
      case "corrientes":
        location.href = "/html/corrientes.html";

        break;
      case "patioDeUco":
        location.href = "/html/patiodeuco.html";

        break;

      default:
        location.href = "/html/termitiere.html";

        break;
    }
  }
};
const projectsDetailNarrowScreen = (title) => {
  if (arrow.style.display === "inline-block") {
    switch (title) {
      case "atelier":
        location.href = "/html/atelier.html";

        break;
      case "ciudadParque":
        location.href = "/html/ciudadparque.html";

        break;
      case "torreDual":
        location.href = "/html/torredual.html";

        break;
      case "santiago":
        location.href = "/html/santiago.html";

        break;
      case "corrientes":
        location.href = "/html/corrientes.html";

        break;
      case "patioDeUco":
        location.href = "/html/patiodeuco.html";

        break;

      default:
        location.href = "/html/termitiere.html";

        break;
    }
  }
};

const socialIcons = document.getElementById("social-icons");
const scrollRedesFunction = () => {
  let documentHeight = document.body.scrollHeight;
  let currentScroll = window.scrollY + window.innerHeight;
  // When the user is [modifier]px from the bottom, fire the event.
  let modifier = 75;

  if (currentScroll > documentHeight - modifier) {
    socialIcons.style.display = "flex";
  } else {
    socialIcons.style.display = "none";
  }
};

window.addEventListener("scroll", () => {
  if (arrow.style.display === "inline-block") {
    scrollRedesFunction();
  }
});

const linksNatVar = document.getElementById("links-nat-var");
const mainBody = document.getElementById("main-body");
const arrow = document.getElementById("arrow");
let windowScreen = window.matchMedia("(max-width: 991.98px)");
const slideNatVar = () => {
  let height = 0;
  if (linksNatVar.clientHeight === 0) {
    linksNatVar.classList.add("links-container-height");
    height = 9.2;
  } else {
    height = 0;
    linksNatVar.classList.remove("links-container-height");
  }

  arrow.classList.toggle("arrow-rotate");
};
const slideNatVarOut = () => {
  linksNatVar.classList.remove("links-container-height");
  arrow.classList.remove("arrow-rotate");
};

const removeArrowWideScreen = () => {
  if (windowScreen.matches) {
    arrow.style.display = "inline-block";

    socialIcons.style.display = "none";
  } else {
    arrow.style.display = "none";
    linksNatVar.classList.remove("links-container-height");
    arrow.classList.remove("arrow-rotate");

    socialIcons.style.display = "flex";
  }
};
removeArrowWideScreen();

windowScreen.addEventListener("change", () => {
  removeArrowWideScreen();
});

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
const localSTGLanguage = JSON.parse(localStorage.getItem("number")) || {
  id: 0,
};

const language = () => {
  if (languagePush.innerText === "In") {
    me.innerText = "About me";
    projects.innerText = "Projects";
    contact.innerText = "Contact";
    languagePush.innerText = "Es";
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

    languagePush.innerText = "In";
    localStorage.setItem("number", JSON.stringify({ id: 0 }));
  }

  if (
    window.location.href ===
      "https://diego-helguera.netlify.app/html/contacto.html" ||
    window.location.href === "http://127.0.0.1:5500/html/contacto.html"
  ) {
    location.href = "";
  }
};

const RenderNavBar = () => {
  if (localSTGLanguage.id === 0) {
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
        "El nombre puede tener de 3 a 30 caracteres, no debe llevar ni números ni símbolos!!!";
      wrongEmailLanguage.innerText = " Debe respetar la forma de un email";
      wrongMessageLanguage.innerText =
        "El mensaje puede tener un largo de 5 a 400 caracteres";
      errorSubmitLanguage.innerText =
        " ERROR!!! Rellena correctamente todos los campos obligatorios";
      correctSubmitLanguage.innerText = "Su mensaje ha sido enviado con éxito";
    }

    languagePush.innerText = "In";
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

    languagePush.innerText = "Es";
  }
};

RenderNavBar();
