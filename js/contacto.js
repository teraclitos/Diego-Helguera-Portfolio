const inputsContact = document.querySelectorAll(".input-contact");
const mainBodyContact = document.querySelector(".main-body-acercademi");

inputsContact.forEach((input) => {
  if (screen.width < 992) {
    input.addEventListener("focus", () => {
      RendeInputsPhoneFocus();
    });
    input.addEventListener("blur", () => {
      RendeInputsPhoneBlur();
    });
  }
});

const RendeInputsPhoneFocus = () => {
  mainBody.classList.add("contact-modifier");
};
const RendeInputsPhoneBlur = () => {
  mainBody.classList.remove("contact-modifier");
};
