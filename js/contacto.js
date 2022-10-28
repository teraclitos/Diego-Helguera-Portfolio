const formContact = document.querySelector(".form-contact");

// let windowScreenContact = window.matchMedia("(max-width: 991.98px)");

// const RenderContact = () => {
//   if (windowScreenContact.matches) {
//     formContact.innerHTML = `  <div > <label  for="name"></label>
//           <input autocomplete="off" placeholder="Julian"  class="input-contact " type="text" id="fname" name="name" value="" />
//           <p class="wrong-name-wide none ">El nombre debe tener al menos tres letras, no debe llevar ni números ni símbolos</p></div>
//             <div> <label  for="asunto"></label>
//           <input autocomplete="off"  placeholder="Asunto"  class="input-contact" type="text" id="asunto" name="asunto"  value="" /></div>
//              <div><label for="email"></label>
//           <input autocomplete="off" placeholder="Julian@gmail.com" class="input-contact" type="email" id="email" name="email"  value="" /></div>
//             <div class="text-contact-container"> <label  " for="text"></label>
//           <textarea autocomplete="off" placeholder="Deje su mensaje"  class="input-contact input-contact-text-narrow-screen" id="text" name="text"  value=""></textarea></div>
//              <div class="btn-submit-container-narrow-screen"><input class="btn-cv" type="submit" value="enviar" /></div>`;
//   } else {
//     formContact.innerHTML = `  <div > <label class="label-contact" for="name">Nombre</label>
//           <input autocomplete="off" class="input-contact " type="text" id="fname" name="name"  value="" />
//           <p class="wrong-name-wide none ">El nombre debe tener al menos tres letras, no debe llevar ni números ni símbolos</p></div>
//             <div> <label class="label-contact" for="asunto">Asunto</label>
//           <input autocomplete="off" class="input-contact" type="text" id="asunto" name="asunto"  value="" /></div>
//              <div><label  class="label-contact" for="email">Email</label>
//           <input autocomplete="off" class="input-contact" type="email" id="email" name="email"  value="" /></div>
//             <div class="text-contact-container"> <label class="label-contact label-contact-text " for="text">Deje su mensaje</label>
//           <textarea autocomplete="off" class="input-contact input-contact-text-wide-screen" id="text" name="text"  value=""></textarea></div>
//              <div class="btn-submit-container-wide-screen"><input class="btn-cv" type="submit" value="enviar" /></div>`;
//   }
// };
// RenderContact();

// windowScreenContact.addEventListener("change", () => {
//   RenderContact();
// });
