const textAtelier = document.getElementById("text-atelier");
const atelierGreen = document.getElementById("atelier-green");
const textCiudadParque = document.getElementById("text-ciudad-parque");
const ciudadParqueGreen = document.getElementById("ciudad-parque-green");
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
      textAtelier.style.display = "inline-block";

      atelierGreen.style.opacity = "1";
      atelierGreen.classList.remove("transition--opacity--green");

      break;
    case "ciudadParque":
      textCiudadParque.style.display = "inline-block";

      ciudadParqueGreen.style.opacity = "1";
      ciudadParqueGreen.classList.remove("transition--opacity--green");

      break;
    case "torreDual":
      textTorreDual.style.display = "inline-block";

      torreDualGreen.style.opacity = "1";
      torreDualGreen.classList.remove("transition--opacity--green");

      break;
    case "santiago":
      textSantiago.style.display = "inline-block";

      santiagoGreen.style.opacity = "1";
      santiagoGreen.classList.remove("transition--opacity--green");

      break;
    case "corrientes":
      textCorrientes.style.display = "inline-block";

      corrientesGreen.style.opacity = "1";
      corrientesGreen.classList.remove("transition--opacity--green");

      break;
    case "patioDeUco":
      textPatioDeUco.style.display = "inline-block";

      patioDeUcoGreen.style.opacity = "1";
      patioDeUcoGreen.classList.remove("transition--opacity--green");

      break;

    default:
      textTermitiere.style.display = "inline-block";

      termitiereGreen.style.opacity = "1";
      termitiereGreen.classList.remove("transition--opacity--green");
      break;
  }
};

const textHoverOutImg = (title) => {
  switch (title) {
    case "atelier":
      textAtelier.style.display = "none";

      atelierGreen.style.opacity = "0";
      atelierGreen.classList.add("transition--opacity--green");

      break;
    case "ciudadParque":
      textCiudadParque.style.display = "none";

      ciudadParqueGreen.style.opacity = "0";
      ciudadParqueGreen.classList.add("transition--opacity--green");

      break;
    case "torreDual":
      textTorreDual.style.display = "none";

      torreDualGreen.style.opacity = "0";
      torreDualGreen.classList.add("transition--opacity--green");

      break;
    case "santiago":
      textSantiago.style.display = "none";

      santiagoGreen.style.opacity = "0";
      santiagoGreen.classList.add("transition--opacity--green");

      break;
    case "corrientes":
      textCorrientes.style.display = "none";

      corrientesGreen.style.opacity = "0";
      corrientesGreen.classList.add("transition--opacity--green");

      break;
    case "patioDeUco":
      textPatioDeUco.style.display = "none";

      patioDeUcoGreen.style.opacity = "0";
      patioDeUcoGreen.classList.add("transition--opacity--green");

      break;

    default:
      textTermitiere.style.display = "none";

      termitiereGreen.style.opacity = "0";
      termitiereGreen.classList.add("transition--opacity--green");
      break;
  }
};

const socialIcons = document.getElementById("social-icons");
const scrollRedes = () => {
  let documentHeight = document.body.scrollHeight;
  let currentScroll = window.scrollY + window.innerHeight;
  // When the user is [modifier]px from the bottom, fire the event.
  let modifier = 75;
  if (screen.width < 768) {
    if (currentScroll > documentHeight - modifier) {
      socialIcons.style.display = "flex";
    } else {
      socialIcons.style.display = "none";
    }
  } else {
    socialIcons.style.display = "flex";
  }
};

document.addEventListener("scroll", () => {
  scrollRedes();
});
const natVar = document.getElementById("nat-var");
const linksNatVar = document.getElementById("links-nat-var");
const titleDiego = document.getElementById("title-diego");
const mainBody = document.getElementById("main-body");

const inyectDisplayNoneLinksNarrowScreen = () => {
  if (screen.width < 992) {
    linksNatVar.style.display = "none";
  }
};
inyectDisplayNoneLinksNarrowScreen();

const slideNatVar = () => {
  if (screen.width < 992) {
    if (linksNatVar.style.display === "none") {
      linksNatVar.style.display = "flex";

      natVar.style.gridTemplateRows = "5em 12em";
    } else {
      linksNatVar.style.display = "none";

      natVar.style.gridTemplateRows = "5em ";
    }
  }
};
const slideNatVarOut = () => {
  if (screen.width < 992) {
    linksNatVar.style.display = "none";

    natVar.style.gridTemplateRows = "5em ";
  }
};

const loader = document.getElementById("loader");

const finishLoading = () => {
  loader.style.display = "none";
};

window.addEventListener("load", () => {
  setTimeout(() => {
    finishLoading();
  }, 3000);
});
