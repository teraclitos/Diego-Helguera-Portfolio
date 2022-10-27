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
