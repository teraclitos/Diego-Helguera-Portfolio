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
      imgAtelier.style.transition = "0.5s";
      atelierGreen.style.display = "block";

      break;
    case "ciudadParque":
      textCiudadParque.style.display = "inline-block";
      imgCiudadParque.style.opacity = "0.5";
      imgCiudadParque.style.transition = "0.5s";
      ciudadParqueGreen.style.display = "block";

      break;
    case "torreDual":
      textTorreDual.style.display = "inline-block";
      imgTorreDual.style.opacity = "0.5";
      imgTorreDual.style.transition = "0.5s";
      torreDualGreen.style.display = "block";

      break;
    case "santiago":
      textSantiago.style.display = "inline-block";
      imgSantiago.style.opacity = "0.5";
      imgSantiago.style.transition = "0.5s";
      santiagoGreen.style.display = "block";

      break;
    case "corrientes":
      textCorrientes.style.display = "inline-block";
      imgCorrientes.style.opacity = "0.5";
      imgCorrientes.style.transition = "0.5s";
      corrientesGreen.style.display = "block";

      break;
    case "patioDeUco":
      textPatioDeUco.style.display = "inline-block";
      imgPatioDeUco.style.opacity = "0.5";
      imgPatioDeUco.style.transition = "0.5s";
      patioDeUcoGreen.style.display = "block";

      break;

    default:
      textTermitiere.style.display = "inline-block";
      imgTermitiere.style.opacity = "0.5";
      imgTermitiere.style.transition = "0.5s";
      termitiereGreen.style.display = "block";
      break;
  }
};

const textHoverOutImg = (title) => {
  switch (title) {
    case "atelier":
      textAtelier.style.display = "none";
      imgAtelier.style.opacity = "1";
      imgAtelier.style.transition = "none";
      atelierGreen.style.display = "none";

      break;
    case "ciudadParque":
      textCiudadParque.style.display = "none";
      imgCiudadParque.style.opacity = "1";
      imgCiudadParque.style.transition = "none";
      ciudadParqueGreen.style.display = "none";

      break;
    case "torreDual":
      textTorreDual.style.display = "none";
      imgTorreDual.style.opacity = "1";
      imgTorreDual.style.transition = "none";
      torreDualGreen.style.display = "none";

      break;
    case "santiago":
      textSantiago.style.display = "none";
      imgSantiago.style.opacity = "1";
      imgSantiago.style.transition = "none";
      santiagoGreen.style.display = "none";

      break;
    case "corrientes":
      textCorrientes.style.display = "none";
      imgCorrientes.style.opacity = "1";
      imgCorrientes.style.transition = "none";
      corrientesGreen.style.display = "none";

      break;
    case "patioDeUco":
      textPatioDeUco.style.display = "none";
      imgPatioDeUco.style.opacity = "1";
      imgPatioDeUco.style.transition = "none";
      patioDeUcoGreen.style.display = "none";

      break;

    default:
      textTermitiere.style.display = "none";
      imgTermitiere.style.opacity = "1";
      imgTermitiere.style.transition = "none";
      termitiereGreen.style.display = "none";
      break;
  }
};

const socialIcons = document.getElementById("social-icons");

const scrollRedes = () => {
  document.addEventListener("scroll", function (e) {
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    // When the user is [modifier]px from the bottom, fire the event.
    let modifier = 75;
    if (screen.width < 768) {
      if (currentScroll + modifier > documentHeight) {
        socialIcons.style.display = "flex";
      } else {
        socialIcons.style.display = "none";
      }
    } else {
      socialIcons.style.display = "flex";
    }
  });
};
const natVar = document.getElementById("nat-var");
const linksNatVar = document.getElementById("links-nat-var");
const titleDiego = document.getElementById("title-diego");
const mainBody = document.getElementById("main-body");

titleDiego.addEventListener("click", () => {
  slideNatVar();
});
mainBody.addEventListener("click", () => {
  slideNatVarOut();
});

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
  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);
};

window.addEventListener("load", () => {
  finishLoading();
});

scrollRedes();
