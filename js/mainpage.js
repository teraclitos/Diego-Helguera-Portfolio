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
const greyBackground = document.querySelector(".grey-background");
const navBar = document.querySelector(".title-container");

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
  switch (title) {
    case "atelier":
      location.pathname = "/html/atelier.html";

      break;
    case "ciudadParque":
      location.pathname = "/html/ciudadparque.html";

      break;
    case "edificio1":
      location.pathname = "/html/jardinescolgantes.html";

      break;
    case "edificio2":
      location.pathname = "/html/patioalto.html";

      break;
    case "torreDual":
      location.pathname = "/html/torreduo.html";

      break;
    case "santiago":
      location.pathname = "/html/santiago.html";

      break;
    case "corrientes":
      location.pathname = "/html/corrientes.html";

      break;
    case "patioDeUco":
      location.pathname = "/html/patiodeuco.html";

      break;

    default:
      location.pathname = "/html/termitiere.html";

      break;
  }
};

const titleDiego = document.getElementById("title-diego");

titleDiego.addEventListener("click", () => {
  location.pathname = "/index.html";
});

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

const linksNatVar = document.getElementById("links-nat-var");
const mainBody = document.getElementById("main-body");
const menu = document.querySelector(".menu-icon");

me.href = "/html/acercademi.html"
let windowScreen = window.matchMedia("(max-width: 991.98px)");

const heightGrey = () => {
  let bodyHeight = document.body.clientHeight;
  let navBarHeight = navBar.clientHeight;
  if (window.innerWidth > 450) {
    greyBackground.style.height = `${bodyHeight - navBarHeight - 172}px`;
  } else {
    greyBackground.style.height = `${bodyHeight - navBarHeight - 138}px`;
  }
};

if (
  window.location.pathname === "/" 

) {
  heightGrey();
  window.addEventListener("resize", () => {
    heightGrey();
  });
}

const slideNatVar = () => {
  let height = 0;
  if (linksNatVar.clientHeight === 0) {
    linksNatVar.classList.add("links-container-height");
    height = 9.2;
  } else {
    height = 0;
    linksNatVar.classList.remove("links-container-height");
  }

  menu.classList.toggle("arrow-rotate");
};

const slideNatVarOut = () => {
  linksNatVar.classList.remove("links-container-height");
  menu.classList.remove("arrow-rotate");
};

const removeArrowWideScreen = () => {
  if (windowScreen.matches) {
    socialIcons.style.display = "none";
  } else {
    linksNatVar.classList.remove("links-container-height");

    socialIcons.style.display = "flex";
  }
};
removeArrowWideScreen();
window.addEventListener("scroll", () => {
  if (windowScreen.matches) {
    scrollRedesFunction();
  }
});

windowScreen.addEventListener("change", () => {
  scrollRedesFunction();
  removeArrowWideScreen();
});
