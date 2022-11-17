let windowScreenContact = window.matchMedia("(max-width: 991.98px)");
const arrayImg = document.querySelectorAll(".imgs");
const arrayImgModal = document.querySelectorAll(".imgs-modal");
localSTGiMG = JSON.parse(localStorage.getItem("idImg")) || { id: 0 };
let imgContainer = document.querySelector(".img-modal-container");
let navBarHeight = document.querySelector(".title-container").clientHeight;

let imgContainerHeight = window.innerHeight - navBarHeight;

let imgContainerHeightREnder =
  (imgContainer.style.height = `${imgContainerHeight}px`);

const RenderContact = () => {
  imgContainer = document.querySelector(".img-modal-container");
  navBarHeight = document.querySelector(".title-container").clientHeight;
  imgContainerHeight = window.innerHeight - navBarHeight;
  imgContainerHeight = window.innerHeight - navBarHeight;

  if (windowScreenContact.matches) {
    arrayImg.forEach((element) => {
      element.style.pointerEvents = "none";
    });
  } else {
    arrayImg.forEach((element) => {
      element.style.pointerEvents = "all";
    });
  }
};
RenderContact();

windowScreenContact.addEventListener("change", () => {
  RenderContact();
});

arrayImg.forEach((element, i) => {
  element.addEventListener("mousedown", () => {
    localStorage.setItem("idImg", JSON.stringify({ id: i + 1 }));
    localSTGiMG = JSON.parse(localStorage.getItem("idImg"));
    arrayImgModal.forEach((elementModal) => {
      if (parseInt(elementModal.id) === localSTGiMG.id) {
        elementModal.style.display = "block";
      } else {
        elementModal.style.display = "none";
      }
    });
  });
});

window.addEventListener("mouseup", () => {
  arrayImgModal.forEach((element) => {
    element.style.display = "none";
  });
  localStorage.setItem("idImg", JSON.stringify({ id: 0 }));
});
window.addEventListener("dragend", () => {
  arrayImgModal.forEach((element) => {
    element.style.display = "none";
  });
  localStorage.setItem("idImg", JSON.stringify({ id: 0 }));
});
