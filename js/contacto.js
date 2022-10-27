const formContact = document.querySelector(".form-contact");
const arrowC = document.getElementById("arrow");

let windowScreenContact = window.matchMedia("(max-width: 991.98px)");

const RenderContact = () => {
  if (windowScreenContact.matches) {
    formContact.innerHTML = `  <div> <label  for="name"></label>
          <input autocomplete="off" placeholder="Julian"  class="input-contact" type="text" id="fname" name="name" /></div>
            <div> <label  for="affair"></label>
          <input autocomplete="off"  placeholder="Asunto"  class="input-contact" type="text" id="affair" name="affair" /></div>
             <div><label     for="email"></label>
          <input autocomplete="off" placeholder="Julian@gmail.com" class="input-contact" type="email" id="email" name="email" /></div>
            <div class="text-contact-container"> <label  " for="text"></label>
          <textarea autocomplete="off" placeholder="Deje su mensaje"  class="input-contact input-contact-text-narrow-screen" id="text" name="text"></textarea></div>
             <div class="btn-submit-container-narrow-screen"><input class="btn-cv" type="submit" value="enviar" /></div>`;

    // RenderInputsPhone();
  } else {
    formContact.innerHTML = `  <div> <label class="label-contact" for="name">Nombre</label>
          <input autocomplete="off" class="input-contact" type="text" id="fname" name="name" /></div>
            <div> <label class="label-contact" for="affair">Asunto</label>
          <input autocomplete="off" class="input-contact" type="text" id="affair" name="affair" /></div>
             <div><label  class="label-contact" for="email">Email</label>
          <input autocomplete="off" class="input-contact" type="email" id="email" name="email" /></div>
            <div class="text-contact-container"> <label class="label-contact " for="text">Deje su mensaje</label>
          <textarea autocomplete="off" class="input-contact input-contact-text-wide-screen" id="text" name="text"></textarea></div>
             <div class="btn-submit-container-wide-screen"><input class="btn-cv" type="submit" value="enviar" /></div>`;
  }
};
RenderContact();

windowScreenContact.addEventListener("change", () => {
  RenderContact();
});

// const inputsContact = document.querySelectorAll(".input-contact");
// const mainBodyContact = document.querySelector(".main-body-acercademi");
// const navBar = document.getElementById("nat-var");

// const RenderInputsPhoneFocus = () => {
//   mainBody.classList.add("contact-modifier");
//   navBar.style.display = "none";
// };
// const RenderInputsPhoneBlur = () => {
//   mainBody.classList.remove("contact-modifier");
//   navBar.style.display = "block";
// };

// const RenderInputsPhone = () => {
//   if (arrowC.style.display === "inline-block") {
//     inputsContact.forEach((input) => {
//       input.addEventListener("focus", () => {
//         RenderInputsPhoneFocus();
//       });
//       input.addEventListener("blur", () => {
//         RenderInputsPhoneBlur();
//       });
//     });
//   }
// };
// RenderInputsPhone();
