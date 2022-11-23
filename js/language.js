const projects = document.getElementById("projects");
const me = document.getElementById("me");
const contact = document.getElementById("contact");
const nameLabel = document.getElementById("name-label");
const matter = document.getElementById("matter");
const message = document.getElementById("message");
const submit = document.getElementById("submit-btn");
const aboutMeText = document.querySelector(".acercademi-text");
const textSantiago1 = document.querySelector(".text-santiago-1");
const textSantiago2 = document.querySelector(".text-santiago-2");
const WrongNameLanguage = document.getElementById("wrong-name");
const wrongEmailLanguage = document.getElementById("wrong-email");
const wrongMessageLanguage = document.getElementById("wrong-message");
const errorSubmitLanguage = document.getElementById("error");
const correctSubmitLanguage = document.getElementById("correct");
const languagePush = document.getElementById("language");
const languageNarrowScreen = document.getElementById("language-narrow-screen");
const localSTGLanguage = JSON.parse(localStorage.getItem("number")) || {
  id: 0,
};

const language = () => {
  if (languagePush.innerText === "EN") {
    me.innerText = "About me";
    projects.innerText = "Projects";
    contact.innerText = "Contact";
    languagePush.innerText = "ES";
    languageNarrowScreen.innerText = "Es";

    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/santiago.html" ||
      window.location.href === "http://127.0.0.1:5500/html/santiago.html"
    ) {
      textSantiago1.innerHTML = `Casa Santiago is a single-family residential project developed in the Guillermo Cotella S.A. studio. With great lessons and achievements.
Placed at the foot of the hill with indirect views of the city, the project goal was to design a
modern aesthetic house, with great use of the social space that manages to take advantage of the city views and integrate the abundant natural environment with the interior space.
  <br> <br><br>
Team: Guillermo Cotella, Pablo Muruaga, Guadalupe Moraga, Diego Helguera. `;
      textSantiago2.innerHTML = `As a result:
Large openings on the ground floor, a large open terrace, an infinit pool, the kitchen as a pivot between the gallery and the living room, large wall-to-wall windows that frame the views in the bedrooms, a progressive entrance accompanied by landscaping and raw materials. `;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/acercademi.html" ||
      window.location.href === "http://127.0.0.1:5500/html/acercademi.html"
    ) {
      aboutMeText.innerText = `I'm an architect graduated in the Architecture and urbanism Tucumán National University of Argentina. I took part in numerous workshops, competitions and architecture meetings.
         With experience in the real estate sector and, at the same time, knowledge in the purely project field; I believe that both approaches must cooperate to result in economically viable, culturally representative, socially responsable and environmentally correct projects, that respond to the personal needs and desires of its users. But above all things: an architecture for daily enjoyment, which ensures good living. `;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      nameLabel.innerText = "Name";
      matter.innerText = "Subject";
      message.innerText = "Leave your message";
      submit.value = "send";
      WrongNameLanguage.innerText =
        " The name can only have from 3 to 30 characters, it must not have numbers or symbols!!!";
      wrongEmailLanguage.innerText = " This doesn`t look like an email";
      wrongMessageLanguage.innerText =
        "The message can only have from 5 to 400 characters";
      errorSubmitLanguage.innerText =
        "ERROR!!! Fill all the required fields correctly ";
      correctSubmitLanguage.innerText =
        "Your message has been sent successfully";
    }
    localStorage.setItem("number", JSON.stringify({ id: 1 }));
  } else {
    me.innerText = "Acerca de mí";
    projects.innerText = "Proyectos";
    contact.innerText = "Contacto";
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/acercademi.html" ||
      window.location.href === "http://127.0.0.1:5500/html/acercademi.html"
    ) {
      aboutMeText.innerText = ` Arquitecto graduado de la facultad de arquitectura y urbanismo de la Universidad Nacional de Tucumán. Participé de numerosos workshops, concursos y encuentros de arquitectura.
      Con experiencia en el rubro inmobiliario y de la construcción y, a su vez, educación en el ámbito meramente proyectual; creo que ambas lógicas deben cooperar para dar como resultado proyectos económicamente viables, culturalmente representativos, socialmente responsables, ambientalmente correctos, que respondan a las necesidades y deseos personales de sus usuarios. Pero por sobre todas las cosas: una arquitectura de disfrute cotidiano, que vele por el buen vivir. `;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/santiago.html" ||
      window.location.href === "http://127.0.0.1:5500/html/santiago.html"
    ) {
      textSantiago1.innerHTML = `  Casa Santiago fue un proyecto de vivienda unifamiliar llevado a cabo en el estudio Guillermo Cotella S.A. de grandes aprendizajes y logros.
Emplazado al pie del cerro y con vista indirecta a la ciudad, el objetivo del proyecto fue desarrollar una vivienda de lectura moderna, de gran despliegue del espacio social que logre aprovechar las vistas a la ciudad e integrar el abundante medio natural circundante al interior.
  <br> <br><br>
Equipo: Guillermo Cotella, Pablo Muruaga, Guadalupe Moraga, Diego Helguera.`;
      textSantiago2.innerHTML = ` Como resultado: Grandes aberturas en planta baja, una amplia terraza descubierta, una pileta de borde infinito, cocina como pivot de la galería y el living comedor, grandes ventanales de pared a pared que enmarcan las vistas en los dormitorios, un ingreso progresivo acompañado por paisajismo y materiales nobles.`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      nameLabel.innerText = "Nombre";
      matter.innerText = "Asunto";
      message.innerText = "Deje su mensaje";
      submit.value = "enviar";
      WrongNameLanguage.innerText =
        " El nombre puede tener de 3 a 30 caracteres, no debe llevar ni números ni símbolos!!!";
      wrongEmailLanguage.innerText = " Debe respetar la forma de un email";
      wrongMessageLanguage.innerText =
        "El mensaje puede tener un largo de 5 a 400 caracteres";
      errorSubmitLanguage.innerText =
        " ERROR!!! Rellena correctamente todos los campos obligatorios";
      correctSubmitLanguage.innerText = "Su mensaje ha sido enviado con éxito";
    }

    languagePush.innerText = "EN";
    languageNarrowScreen.innerText = "EN";
    localStorage.setItem("number", JSON.stringify({ id: 0 }));
  }
};

const RenderLanguage = () => {
  if (
    window.location.href === "https://diego-helguera.netlify.app/index.html" ||
    window.location.href === "http://127.0.0.1:5500/index.html"
  ) {
    projects.style.color = "#d65f37";
  } else if (
    window.location.href ===
      "https://diego-helguera.netlify.app/html/acercademi.html" ||
    window.location.href === "http://127.0.0.1:5500/html/acercademi.html"
  ) {
    me.style.color = "#d65f37";
  } else if (
    window.location.href ===
      "https://diego-helguera.netlify.app/html/contacto.html" ||
    window.location.href === "http://127.0.0.1:5500/html/contacto.html"
  ) {
    contact.style.color = "#d65f37";
  } else {
    contact.style.color = "#d65f37";
  }
  if (localSTGLanguage.id === 0) {
    me.innerText = "Acerca de mí";
    projects.innerText = "Proyectos";
    contact.innerText = "Contacto";

    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/santiago.html" ||
      window.location.href === "http://127.0.0.1:5500/html/santiago.html"
    ) {
      textSantiago1.innerHTML = `  Casa Santiago fue un proyecto de vivienda unifamiliar llevado a cabo en el estudio Guillermo Cotella S.A. de grandes aprendizajes y logros.
Emplazado al pie del cerro y con vista indirecta a la ciudad, el objetivo del proyecto fue desarrollar una vivienda de lectura moderna, de gran despliegue del espacio social que logre aprovechar las vistas a la ciudad e integrar el abundante medio natural circundante al interior.
  <br> <br><br>
Equipo: Guillermo Cotella, Pablo Muruaga, Guadalupe Moraga, Diego Helguera.`;
      textSantiago2.innerHTML = ` Como resultado: Grandes aberturas en planta baja, una amplia terraza descubierta, una pileta de borde infinito, cocina como pivot de la galería y el living comedor, grandes ventanales de pared a pared que enmarcan las vistas en los dormitorios, un ingreso progresivo acompañado por paisajismo y materiales nobles.`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/acercademi.html" ||
      window.location.href === "http://127.0.0.1:5500/html/acercademi.html"
    ) {
      aboutMeText.innerText = ` Arquitecto graduado de la facultad de arquitectura y urbanismo de la Universidad Nacional de Tucumán. Participé de numerosos workshops, concursos y encuentros de arquitectura.
      Con experiencia en el rubro inmobiliario y de la construcción y, a su vez, educación en el ámbito meramente proyectual; creo que ambas lógicas deben cooperar para dar como resultado proyectos económicamente viables, culturalmente representativos, socialmente responsables, ambientalmente correctos, que respondan a las necesidades y deseos personales de sus usuarios. Pero por sobre todas las cosas: una arquitectura de disfrute cotidiano, que vele por el buen vivir. `;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      contact.style.color = "#d65f37";
      nameLabel.innerText = "Nombre";
      matter.innerText = "Asunto";
      message.innerText = "Deje su mensaje";
      submit.value = "enviar";
      WrongNameLanguage.innerText =
        "El nombre puede tener de 3 a 30 caracteres, no debe llevar ni números ni símbolos!!!";
      wrongEmailLanguage.innerText = " Debe respetar la forma de un email";
      wrongMessageLanguage.innerText =
        "El mensaje puede tener un largo de 5 a 400 caracteres";
      errorSubmitLanguage.innerText =
        " ERROR!!! Rellena correctamente todos los campos obligatorios";
      correctSubmitLanguage.innerText = "Su mensaje ha sido enviado con éxito";
    }

    languagePush.innerText = "EN";
    languageNarrowScreen.innerText = "EN";
  } else {
    me.innerText = "About me";
    projects.innerText = "Projects";
    contact.innerText = "Contact";
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/santiago.html" ||
      window.location.href === "http://127.0.0.1:5500/html/santiago.html"
    ) {
      textSantiago1.innerHTML = `Casa Santiago is a single-family residential project developed in the Guillermo Cotella S.A. studio. With great lessons and achievements.
Placed at the foot of the hill with indirect views of the city, the project goal was to design a
modern aesthetic house, with great use of the social space that manages to take advantage of the city views and integrate the abundant natural environment with the interior space.
  <br> <br><br>
Team: Guillermo Cotella, Pablo Muruaga, Guadalupe Moraga, Diego Helguera. `;
      textSantiago2.innerHTML = `As a result:
Large openings on the ground floor, a large open terrace, an infinit pool, the kitchen as a pivot between the gallery and the living room, large wall-to-wall windows that frame the views in the bedrooms, a progressive entrance accompanied by landscaping and raw materials. `;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/acercademi.html" ||
      window.location.href === "http://127.0.0.1:5500/html/acercademi.html"
    ) {
      aboutMeText.innerText = `I'm an architect graduated in the Architecture and urbanism Tucumán National University of Argentina. I took part in numerous workshops, competitions and architecture meetings.
         With experience in the real estate sector and, at the same time, knowledge in the purely project field; I believe that both approaches must cooperate to result in economically viable, culturally representative, socially responsable and environmentally correct projects, that respond to the personal needs and desires of its users. But above all things: an architecture for daily enjoyment, which ensures good living. `;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/contacto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/contacto.html"
    ) {
      nameLabel.innerText = "Name";
      matter.innerText = "Subject";
      message.innerText = "Leave your message";
      submit.value = "send";
      WrongNameLanguage.innerText =
        " The name can only have from 3 to 30 characters, it must not have numbers or symbols!!!";
      wrongEmailLanguage.innerText = " This doesn`t look like an email";
      wrongMessageLanguage.innerText =
        "The message can only have from 5 to 400 characters";
      errorSubmitLanguage.innerText =
        "ERROR!!! Fill all the required fields correctly ";
      correctSubmitLanguage.innerText =
        "Your message has been sent successfully";
    }

    languagePush.innerText = "ES";
    languageNarrowScreen.innerText = "ES";
  }
};
RenderLanguage();
