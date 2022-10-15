const textAtelier = document.getElementById("text-atelier");
const imgAtelier = document.getElementById("img-atelier");
const textCiudadParque = document.getElementById("text-ciudad-parque");
const imgCiudadParque = document.getElementById("img-ciudad-parque");
const textTorreDual = document.getElementById("text-torre-dual");
const imgTorreDual = document.getElementById("img-torre-dual");
const textSantiago = document.getElementById("text-santiago");
const imgSantiago = document.getElementById("img-santiago");
const textCorrientes = document.getElementById("text-corrientes");
const imgCorrientes = document.getElementById("img-corrientes");
const textPatioDeUco = document.getElementById("text-patio-de-uco");
const imgPatioDeUco = document.getElementById("img-patio-de-uco");
const textTermitiere = document.getElementById("text-termitiere");
const imgTermitiere = document.getElementById("img-termitiere");

const textHoverInImg = (title) => {
  switch (title) {
    case `atelier`:
      textAtelier.style.display = "inline-block";

      imgAtelier.style.opacity = "0.5";
      imgAtelier.style.transition = "0.5s";

      break;
    case `ciudadParque`:
      textCiudadParque.style.display = "inline-block";
      imgCiudadParque.style.opacity = "0.5";
      imgCiudadParque.style.transition = "0.5s";

      break;
    case `torreDual`:
      textTorreDual.style.display = "inline-block";
      imgTorreDual.style.opacity = "0.5";
      imgTorreDual.style.transition = "0.5s";

      break;
    case `santiago`:
      textSantiago.style.display = "inline-block";
      imgSantiago.style.opacity = "0.5";
      imgSantiago.style.transition = "0.5s";

      break;
    case `corrientes`:
      textCorrientes.style.display = "inline-block";
      imgCorrientes.style.opacity = "0.5";
      imgCorrientes.style.transition = "0.5s";

      break;
    case `patioDeUco`:
      textPatioDeUco.style.display = "inline-block";
      imgPatioDeUco.style.opacity = "0.5";
      imgPatioDeUco.style.transition = "0.5s";

      break;

    default:
      textTermitiere.style.display = "inline-block";
      imgTermitiere.style.opacity = "0.5";
      imgTermitiere.style.transition = "0.5s";
      break;
  }
};

const textHoverOutImg = (title) => {
  switch (title) {
    case `atelier`:
      textAtelier.style.display = "none";
      imgAtelier.style.opacity = "1";
      imgAtelier.style.transition = "none";

      break;
    case `ciudadParque`:
      textCiudadParque.style.display = "none";
      imgCiudadParque.style.opacity = "1";
      imgCiudadParque.style.transition = "none";

      break;
    case `torreDual`:
      textTorreDual.style.display = "none";
      imgTorreDual.style.opacity = "1";
      imgTorreDual.style.transition = "none";

      break;
    case `santiago`:
      textSantiago.style.display = "none";
      imgSantiago.style.opacity = "1";
      imgSantiago.style.transition = "none";

      break;
    case `corrientes`:
      textCorrientes.style.display = "none";
      imgCorrientes.style.opacity = "1";
      imgCorrientes.style.transition = "none";

      break;
    case `patioDeUco`:
      textPatioDeUco.style.display = "none";
      imgPatioDeUco.style.opacity = "1";
      imgPatioDeUco.style.transition = "none";

      break;

    default:
      textTermitiere.style.display = "none";
      imgTermitiere.style.opacity = "1";
      imgTermitiere.style.transition = "none";
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
    if (document.documentElement.clientWidth < 768) {
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

scrollRedes();
