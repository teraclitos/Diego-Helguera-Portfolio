const textAtelier = document.getElementById("text-atelier");
const imgAtelier = document.getElementById("img-atelier");
const atelierGreen = document.getElementById("atelier-green");
const textCiudadParque = document.getElementById("text-ciudad-parque");
const imgCiudadParque = document.getElementById("img-ciudad-parque");
const ciudadParqueGreen = document.getElementById("ciudad-parque-green");
const textTorreDual = document.getElementById("text-torre-dual");
const imgTorreDual = document.getElementById("img-torre-dual");
const torreDualGreen = document.getElementById("torre-dual-green");
const textSantiago = document.getElementById("text-santiago");
const imgSantiago = document.getElementById("img-santiago");
const santiagoGreen = document.getElementById("santiago-green");
const textCorrientes = document.getElementById("text-corrientes");
const imgCorrientes = document.getElementById("img-corrientes");
const corrientesGreen = document.getElementById("corrientes-green");
const textPatioDeUco = document.getElementById("text-patio-de-uco");
const imgPatioDeUco = document.getElementById("img-patio-de-uco");
const patioDeUcoGreen = document.getElementById("patio-de-uco-green");
const textTermitiere = document.getElementById("text-termitiere");
const imgTermitiere = document.getElementById("img-termitiere");
const termitiereGreen = document.getElementById("termitiere-green");

const textHoverInImg = (title) => {
  switch (title) {
    case "atelier":
      textAtelier.style.display = "inline-block";

      imgAtelier.style.opacity = "0.5";
      imgAtelier.classList.add("transition--opacity--img");
      atelierGreen.style.opacity = "1";
      atelierGreen.classList.remove("transition--opacity--green");

      break;
    case "ciudadParque":
      textCiudadParque.style.display = "inline-block";
      imgCiudadParque.style.opacity = "0.5";
      imgCiudadParque.classList.add("transition--opacity--img");
      ciudadParqueGreen.style.opacity = "1";
      ciudadParqueGreen.classList.remove("transition--opacity--green");

      break;
    case "torreDual":
      textTorreDual.style.display = "inline-block";
      imgTorreDual.style.opacity = "0.5";
      imgTorreDual.classList.add("transition--opacity--img");
      torreDualGreen.style.opacity = "1";
      torreDualGreen.classList.remove("transition--opacity--green");

      break;
    case "santiago":
      textSantiago.style.display = "inline-block";
      imgSantiago.style.opacity = "0.5";
      imgSantiago.classList.add("transition--opacity--img");
      santiagoGreen.style.opacity = "1";
      santiagoGreen.classList.remove("transition--opacity--green");

      break;
    case "corrientes":
      textCorrientes.style.display = "inline-block";
      imgCorrientes.style.opacity = "0.5";
      imgCorrientes.classList.add("transition--opacity--img");
      corrientesGreen.style.opacity = "1";
      corrientesGreen.classList.remove("transition--opacity--green");

      break;
    case "patioDeUco":
      textPatioDeUco.style.display = "inline-block";
      imgPatioDeUco.style.opacity = "0.5";
      imgPatioDeUco.classList.add("transition--opacity--img");
      patioDeUcoGreen.style.opacity = "1";
      patioDeUcoGreen.classList.remove("transition--opacity--green");

      break;

    default:
      textTermitiere.style.display = "inline-block";
      imgTermitiere.style.opacity = "0.5";
      imgTermitiere.classList.add("transition--opacity--img");
      termitiereGreen.style.opacity = "1";
      termitiereGreen.classList.remove("transition--opacity--green");
      break;
  }
};

const textHoverOutImg = (title) => {
  switch (title) {
    case "atelier":
      textAtelier.style.display = "none";
      imgAtelier.style.opacity = "1";

      atelierGreen.style.opacity = "0";
      atelierGreen.classList.add("transition--opacity--green");

      break;
    case "ciudadParque":
      textCiudadParque.style.display = "none";
      imgCiudadParque.style.opacity = "1";

      ciudadParqueGreen.style.opacity = "0";
      ciudadParqueGreen.classList.add("transition--opacity--green");

      break;
    case "torreDual":
      textTorreDual.style.display = "none";
      imgTorreDual.style.opacity = "1";

      torreDualGreen.style.opacity = "0";
      torreDualGreen.classList.add("transition--opacity--green");

      break;
    case "santiago":
      textSantiago.style.display = "none";
      imgSantiago.style.opacity = "1";

      santiagoGreen.style.opacity = "0";
      santiagoGreen.classList.add("transition--opacity--green");

      break;
    case "corrientes":
      textCorrientes.style.display = "none";
      imgCorrientes.style.opacity = "1";

      corrientesGreen.style.opacity = "0";
      corrientesGreen.classList.add("transition--opacity--green");

      break;
    case "patioDeUco":
      textPatioDeUco.style.display = "none";
      imgPatioDeUco.style.opacity = "1";

      patioDeUcoGreen.style.opacity = "0";
      patioDeUcoGreen.classList.add("transition--opacity--green");

      break;

    default:
      textTermitiere.style.display = "none";
      imgTermitiere.style.opacity = "1";

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
