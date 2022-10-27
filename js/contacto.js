const inputsContact = document.querySelectorAll(".input-contact");
const mainBodyContact = document.querySelector(".main-body-acercademi");
const navBar = document.getElementById("nat-var");
const formContact = document.querySelector(".form-contact");

const RendeInputsPhone = () => {
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
};

const RendeInputsPhoneFocus = () => {
  mainBody.classList.add("contact-modifier");
  navBar.style.display = "none";
};
const RendeInputsPhoneBlur = () => {
  mainBody.classList.remove("contact-modifier");
  navBar.style.display = "block";
};

const RenderFormContactPage = () => {
  if (screen.width > 992) {
    formContact.innerHTML = `  <div> <label class="label-contact" for="name">Nombre</label>
          <input class="input-contact" type="text" id="fname" name="name" /></div>
            <div> <label class="label-contact" for="affair">Asunto</label>
          <input class="input-contact" type="text" id="affair" name="affair" /></div>
             <div><label  class="label-contact" for="email">Email</label>
          <input class="input-contact" type="email" id="email" name="email" /></div>
            <div class="text-contact-container"> <label class="label-contact " for="text">Deje su mensaje</label>
          <textarea class="input-contact input-contact-text-wide-screen" id="text" name="text"></textarea></div>
             <div class="btn-submit-container-wide-screen"><input class="btn-cv" type="submit" value="enviar" /></div>`;
  } else {
    formContact.innerHTML = `  <div> <label  for="name"></label>
          <input placeholder="Julian"  class="input-contact" type="text" id="fname" name="name" /></div>
            <div> <label  for="affair"></label>
          <input  placeholder="Asunto"  class="input-contact" type="text" id="affair" name="affair" /></div>
             <div><label     for="email"></label>
          <input placeholder="Julian@gmail.com" class="input-contact" type="email" id="email" name="email" /></div>
            <div class="text-contact-container"> <label  " for="text"></label>
          <textarea placeholder="Deje su mensaje"  class="input-contact input-contact-text-narrow-screen" id="text" name="text"></textarea></div>
             <div class="btn-submit-container-narrow-screen"><input class="btn-cv" type="submit" value="enviar" /></div>`;
  }
};
RenderFormContactPage();
RendeInputsPhone();
