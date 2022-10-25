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
      textAtelier.style.opacity = "1";
      atelierGreen.style.opacity = "1";
      atelierGreen.classList.remove("transition--opacity--green");

      break;
    case "ciudadParque":
      textCiudadParque.style.opacity = "1";
      ciudadParqueGreen.style.opacity = "1";
      ciudadParqueGreen.classList.remove("transition--opacity--green");

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
  if (screen.width > 992) {
    switch (title) {
      case "atelier":
        location.href =
          "https://guileless-bombolone-fba30d.netlify.app/atelier/";

        break;
      case "ciudadParque":
        break;
      case "torreDual":
        break;
      case "santiago":
        break;
      case "corrientes":
        break;
      case "patioDeUco":
        break;

      default:
        break;
    }
  }
};
const projectsDetailNarrowScreen = (title) => {
  if (screen.width < 992) {
    switch (title) {
      case "atelier":
        location.href =
          "https://guileless-bombolone-fba30d.netlify.app/atelier/";

        break;
      case "ciudadParque":
        break;
      case "torreDual":
        break;
      case "santiago":
        break;
      case "corrientes":
        break;
      case "patioDeUco":
        break;

      default:
        break;
    }
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

const linksNatVar = document.getElementById("links-nat-var");
const mainBody = document.getElementById("main-body");
const arrow = document.getElementById("arrow");

const slideNatVar = () => {
  if (screen.width < 992) {
    let height = 0;
    if (linksNatVar.clientHeight === 0) {
      height = 9.2;
    }
    linksNatVar.style.height = `${height}em`;
    arrow.classList.toggle("arrow-rotate");
  }
};
const slideNatVarOut = () => {
  if (screen.width < 992) {
    linksNatVar.style.height = "0";
    arrow.classList.remove("arrow-rotate");
  }
};

const loader = document.getElementById("loader");
const body = document.getElementById("body");

const finishLoading = () => {
  loader.classList.add("loader--transition");
  body.classList.remove("body-overflow-preloader");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(body.firstChild);
  });
};

window.addEventListener("load", () => {
  finishLoading();
});
