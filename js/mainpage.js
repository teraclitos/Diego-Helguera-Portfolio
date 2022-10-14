const textAtelier = document.getElementById("text-atelier");
const imgAtelier = document.getElementById("img-atelier");
const textCiudadParque = document.getElementById("text-ciudad-parque");
const imgCiudadParque = document.getElementById("img-ciudad-parque");

const textHoverInImg = (title) => {
  switch (title) {
    case `atelier`:
      textAtelier.style.display = "inline-block";
      imgAtelier.style.opacity = "0.5";
      imgAtelier.style.transition = "0.4s";

      break;
    case `ciudadParque`:
      textCiudadParque.style.display = "inline-block";
      imgCiudadParque.style.opacity = "0.5";
      imgCiudadParque.style.transition = "0.4s";

      break;

    default:
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

    default:
      break;
  }
};
