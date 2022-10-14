const atelier = document.getElementById("atelier");
const textAtelier = document.getElementById("text-atelier");
const imgAtelier = document.getElementById("img-atelier");
// const textAtelierContainer = document.getElementById("text-atelier-container");

atelier.addEventListener("mouseenter", () => innerTextAtelier());
atelier.addEventListener("mouseleave", () => atelierNormal());
// textAtelierContainer.addEventListener("mouseenter", () => ziIndexin());
// textAtelierContainer.addEventListener("mouseleave", () => ziIndexout());

const innerTextAtelier = () => {
  textAtelier.style.display = "inline-block";
  imgAtelier.style.opacity = "0.5";
  imgAtelier.style.transition = "0.4s";
};

const atelierNormal = () => {
  textAtelier.style.display = "none";
  imgAtelier.style.opacity = "1";
  imgAtelier.style.transition = "none";
};

// const ziIndexin = () => {
//   atelier.style.zIndex = "1";
// };
// const ziIndexout = () => {
//   atelier.style.zIndex = "0";
// };
