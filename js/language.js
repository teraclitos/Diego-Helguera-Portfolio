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
const textAtelierProject = document.querySelector(".text-atelier-project");
const WrongNameLanguage = document.getElementById("wrong-name");
const wrongEmailLanguage = document.getElementById("wrong-email");
const wrongMessageLanguage = document.getElementById("wrong-message");
const errorSubmitLanguage = document.getElementById("error");
const correctSubmitLanguage = document.getElementById("correct");
const languagePush = document.getElementById("language");
const languageNarrowScreen = document.getElementById("language-narrow-screen");

let localSTGLanguage = JSON.parse(localStorage.getItem("number")) || { id: 0 };

const language = () => {
  localSTGLanguage = JSON.parse(localStorage.getItem("number")) || { id: 0 };
  if (localSTGLanguage.id === 0) {
    me.innerText = "About me";
    projects.innerText = "Projects";
    contact.innerText = "Contact";
    languagePush.innerText = "ES";
    languageNarrowScreen.innerText = "Es";
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/atelier.html" ||
      window.location.href === "http://127.0.0.1:5500/html/atelier.html"
    ) {
      textAtelierProject.innerText = `Team: Diego Helguera, Luz María Helguera,
       Javier Dagnilo (construction)
        Ricardo Gomez (metal work) 

This project was the greatest learning I had as an architect, with its mistakes and successes it gave me a clear notion of the climatic, aesthetic, cultural, functional, material and management issues that must be mastered as construction professionals.
How to innovate and respect?
How to extend an already complete house?
The requirements of the clients were to build a workshop suitable for textile, architecture and music design, to generate a flexible space for creativity, to think "outside the box".
One of the first challenges was the volumetric rigor of the pre-existing house that made it difficult to extend it without deforming it.
 In the middle of the brainstorming, it occurred to us that it should be different from the house but somehow harmonize with it, generating an harmonic contrast. Its condition as a creative workshop led to this reading of an "art factory" that concluded in a sculptural volume, independent, light.

Located over a stream, they gave us two clear premises:
Zero humidity.
Zero maintenance.
Located in a large garden, we placed the studio in the back corner to obtain a total panoramic view of it, pointing its openings to the north to gain the most favorable sun. In addition, the difference in level (40 cm above the ground) makes this view more enjoyable.
The material proposal is hybrid, from a raised concrete base a light metallic structure emerges in ascendance. There are two main intentions in this decision: On the one hand, to respect the natural order, to found the building from the stone, generating a sensation of consistency and solidity, arranging the heavy below and the light above. On the other hand, devoting good part of the building to reusable and easily removable metal and wood construction, although the entire building is not, we think that something is better than nothing. By raising the building we free the irrigation surface from the ground.
A coincidence that we like is that its vertex points almost perfectly to the north, something that seemed poetic to us as it is a factory of projects, ideas and dreams.
We understand that the form, the image of the building greatly influences the behavior that a person will have inside, so the exterior reading was a priority when thinking about it.

Respect is not always mimetic.

Diego Helguera, Luz María Helguera, Javier Dagnilo, Ricardo Gómez as a blacksmith who was a true craftsman.
`;
    }

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
      aboutMeText.innerText = `Im an architect graduated in the Architecture and urbanism Tucumán National University of Argentina. I participated in numerous workshops, competitions and architecture meetings. 
With experience in the real estate sector and at the same time education in the purely project field, I believe that both approaches must cooperate to result in economically viable, culturally representative, socially responsable and environmentally correct projects that at the same time respond to the personal needs and desires of its users. But above all things: an architecture for daily enjoyment, which ensures good living. 
Management of graphic representation tools, bim and rendering.
  Recognitions:
- Finalist: Inspirelli awards 2020.
- 3° place: Contest for students coastal city plan in Corrientes province.
- 2° place: Arquisur Arzotegui awards in Belo Horizonte, Brasil. 
- 1° place: Internal contest to represent Tucumán national University at arzotegui awards.
- 3° place: “Taller virtual de las Américas” international contest for winery building in 
  Mendoza, Argentina.  2018.
 `;
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
      aboutMeText.innerText = ` Arquitecto graduado de la facultad de arquitectura y urbanismo de la Universidad Nacional de Tucumán. Participe de numerosos workshops, concursos y encuentros de arquitectura. 
Con experiencia en el rubro inmobiliario y de la construcción y a su vez educación en el ámbito meramente proyectual, creo que ambas lógicas deben cooperar para dar como resultado proyectos económicamente viables, culturalmente representativos, socialmente responsables, ambientalmente correctos que a la vez respondan a las necesidades y deseos personales de sus usuarios. Pero por sobre todas las cosas: una arquitectura de disfrute cotidiano, que vele por el buen vivir. 
Manejo herramientas de representación gráfica, bim y renderismo.

  Reconocimientos:
- Finalista en Inspirelli awards 2020.
- 3° Puesto concurso para estudiantes Proyecto costero ciudad de corrientes.
- 2° Puesto en Premio Arquisur  Arzotegui categoría C celebrado en Belo Horizonte. 
- 1° Lugar en categoría 4to y 5to año selección para participar en representación de la
  FAU en premios Arzotegui.
- 3° Puesto en concurso internacional de estudiantes taller virtual de las Américas 2018.

 `;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/atelier.html" ||
      window.location.href === "http://127.0.0.1:5500/html/atelier.html"
    ) {
      textAtelierProject.innerText = `Diego Helguera, Luz María Helguera 
Javier Dagnilo (Dirección técnica) 
Ricardo Gómez (Herrero)

Atelier del Arroyo fue mi primer proyecto de manera independiente, en donde estuve a cargo del diseño, gestión de materiales, cómputos y presupuestos, dirección técnica y terminaciones. 
Este proyecto fue el mayor aprendizaje que tuve como arquitecto, con sus errores y aciertos me dió una noción nítida de las cuestiones climáticas, estéticas, culturales, funcionales, materiales y de gestión que hay que dominar como profesionales. 
¿Como innovar y respetar? 
¿Como extender una casa ya completa?
Los requisitos de los comitentes fueron construir un taller apto para diseño textil, de arquitectura y de música, generar un espacio flexible para la creatividad, para pensar “fuera de la caja”.
En la suma de creatividades se nos ocurrió que debía ser diferente a la casa pero de alguna manera armonizar con ella, generando un contraste armónico. Su condición de taller creativo llevó a esta lectura de “fábrica de arte” que concluyó en un volumen escultórico, de múltiples lecturas, independiente, liviano.

Emplazada sobre un arroyo nos dieron dos premisas claras:

Humedad cero.
Mantenimiento cero.
Ubicado en un gran jardín situamos el taller en la esquina del fondo para obtener una vista panorámica total del mismo, apuntando sus aberturas al norte para ganar el sol más favorable. Además, la diferencia de nivel (40 cm sobre el suelo) hace esta vista más disfrutable. 

La propuesta material es híbrida, desde un basamento sobreelevado de hormigón emerge una estructura liviana metálica en ascendencia. Hay dos intenciones principales en esta decisión: Por un lado respetar el orden natural, fundar el edificio desde la piedra, generando una sensación de consistencia y solidez, disponiendo lo pesado abajo y lo liviano arriba. Por otro lado destinar gran parte del edificio a construcción seca reutilizable y fácilmente desmontable, si bien la totalidad del edificio no lo es, pensamos que algo es mejor que nada. 
Al sobreelevar el edificio liberamos la superficie de irrigación del suelo.
Una casualidad que nos gusta es que su vértice apunta casi perfectamente al norte, algo que nos pareció poético al tratarse de una fábrica de proyectos, ideas y sueños. 
Entendemos que la forma, la imagen del edificio influye en gran medida el comportamiento que una persona tendrá dentro, por lo que la lectura exterior tomó gran protagonismo a la hora de pensarlo.

El respeto no es siempre mimético. 

Diego Helguera, Luz María Helguera, Javier Dagnilo, Ricardo Gómez como herrero que fue un verdadero artesano.



`;
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
        "https://diego-helguera.netlify.app/html/atelier.html" ||
      window.location.href === "http://127.0.0.1:5500/html/atelier.html"
    ) {
      textAtelierProject.innerText = `Diego Helguera, Luz María Helguera 
      Javier Dagnilo (Dirección técnica) 
      Ricardo Gómez (Herrero)

      Atelier del Arroyo fue mi primer proyecto de manera independiente, en donde estuve a cargo del diseño, gestión de materiales, cómputos y presupuestos, dirección técnica y terminaciones. 
Este proyecto fue el mayor aprendizaje que tuve como arquitecto, con sus errores y aciertos me dió una noción nítida de las cuestiones climáticas, estéticas, culturales, funcionales, materiales y de gestión que hay que dominar como profesionales. 
¿Como innovar y respetar? 
¿Como extender una casa ya completa?
Los requisitos de los comitentes fueron construir un taller apto para diseño textil, de arquitectura y de música, generar un espacio flexible para la creatividad, para pensar “fuera de la caja”.
En la suma de creatividades se nos ocurrió que debía ser diferente a la casa pero de alguna manera armonizar con ella, generando un contraste armónico. Su condición de taller creativo llevó a esta lectura de “fábrica de arte” que concluyó en un volumen escultórico, de múltiples lecturas, independiente, liviano.

Emplazada sobre un arroyo nos dieron dos premisas claras:

Humedad cero.
Mantenimiento cero.
Ubicado en un gran jardín situamos el taller en la esquina del fondo para obtener una vista panorámica total del mismo, apuntando sus aberturas al norte para ganar el sol más favorable. Además, la diferencia de nivel (40 cm sobre el suelo) hace esta vista más disfrutable. 

La propuesta material es híbrida, desde un basamento sobreelevado de hormigón emerge una estructura liviana metálica en ascendencia. Hay dos intenciones principales en esta decisión: Por un lado respetar el orden natural, fundar el edificio desde la piedra, generando una sensación de consistencia y solidez, disponiendo lo pesado abajo y lo liviano arriba. Por otro lado destinar gran parte del edificio a construcción seca reutilizable y fácilmente desmontable, si bien la totalidad del edificio no lo es, pensamos que algo es mejor que nada. 
Al sobreelevar el edificio liberamos la superficie de irrigación del suelo.
Una casualidad que nos gusta es que su vértice apunta casi perfectamente al norte, algo que nos pareció poético al tratarse de una fábrica de proyectos, ideas y sueños. 
Entendemos que la forma, la imagen del edificio influye en gran medida el comportamiento que una persona tendrá dentro, por lo que la lectura exterior tomó gran protagonismo a la hora de pensarlo.

El respeto no es siempre mimético. 

Diego Helguera, Luz María Helguera, Javier Dagnilo, Ricardo Gómez como herrero que fue un verdadero artesano.



`;
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
        "https://diego-helguera.netlify.app/html/acercademi.html" ||
      window.location.href === "http://127.0.0.1:5500/html/acercademi.html"
    ) {
      aboutMeText.innerText = ` Arquitecto graduado de la facultad de arquitectura y urbanismo de la Universidad Nacional de Tucumán. Participe de numerosos workshops, concursos y encuentros de arquitectura. 
Con experiencia en el rubro inmobiliario y de la construcción y a su vez educación en el ámbito meramente proyectual, creo que ambas lógicas deben cooperar para dar como resultado proyectos económicamente viables, culturalmente representativos, socialmente responsables, ambientalmente correctos que a la vez respondan a las necesidades y deseos personales de sus usuarios. Pero por sobre todas las cosas: una arquitectura de disfrute cotidiano, que vele por el buen vivir. 
Manejo herramientas de representación gráfica, bim y renderismo.

  Reconocimientos:
- Finalista en Inspirelli awards 2020.
- 3° Puesto concurso para estudiantes Proyecto costero ciudad de corrientes.
- 2° Puesto en Premio Arquisur  Arzotegui categoría C celebrado en Belo Horizonte. 
- 1° Lugar en categoría 4to y 5to año selección para participar en representación de la
  FAU en premios Arzotegui.
- 3° Puesto en concurso internacional de estudiantes taller virtual de las Américas 2018. `;
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
        "https://diego-helguera.netlify.app/html/atelier.html" ||
      window.location.href === "http://127.0.0.1:5500/html/atelier.html"
    ) {
      textAtelierProject.innerText = `Team: Diego Helguera, Luz María Helguera,
       Javier Dagnilo (construction)
        Ricardo Gomez (metal work) 

This project was the greatest learning I had as an architect, with its mistakes and successes it gave me a clear notion of the climatic, aesthetic, cultural, functional, material and management issues that must be mastered as construction professionals.
How to innovate and respect?
How to extend an already complete house?
The requirements of the clients were to build a workshop suitable for textile, architecture and music design, to generate a flexible space for creativity, to think "outside the box".
One of the first challenges was the volumetric rigor of the pre-existing house that made it difficult to extend it without deforming it.
 In the middle of the brainstorming, it occurred to us that it should be different from the house but somehow harmonize with it, generating an harmonic contrast. Its condition as a creative workshop led to this reading of an "art factory" that concluded in a sculptural volume, independent, light.

Located over a stream, they gave us two clear premises:
Zero humidity.
Zero maintenance.
Located in a large garden, we placed the studio in the back corner to obtain a total panoramic view of it, pointing its openings to the north to gain the most favorable sun. In addition, the difference in level (40 cm above the ground) makes this view more enjoyable.
The material proposal is hybrid, from a raised concrete base a light metallic structure emerges in ascendance. There are two main intentions in this decision: On the one hand, to respect the natural order, to found the building from the stone, generating a sensation of consistency and solidity, arranging the heavy below and the light above. On the other hand, devoting good part of the building to reusable and easily removable metal and wood construction, although the entire building is not, we think that something is better than nothing. By raising the building we free the irrigation surface from the ground.
A coincidence that we like is that its vertex points almost perfectly to the north, something that seemed poetic to us as it is a factory of projects, ideas and dreams.
We understand that the form, the image of the building greatly influences the behavior that a person will have inside, so the exterior reading was a priority when thinking about it.

Respect is not always mimetic.

Diego Helguera, Luz María Helguera, Javier Dagnilo, Ricardo Gómez as a blacksmith who was a true craftsman.
`;
    }
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
      aboutMeText.innerText = `Im an architect graduated in the Architecture and urbanism Tucumán National University of Argentina. I participated in numerous workshops, competitions and architecture meetings. 
With experience in the real estate sector and at the same time education in the purely project field, I believe that both approaches must cooperate to result in economically viable, culturally representative, socially responsable and environmentally correct projects that at the same time respond to the personal needs and desires of its users. But above all things: an architecture for daily enjoyment, which ensures good living. 
Management of graphic representation tools, bim and rendering.
  Recognitions:
- Finalist: Inspirelli awards 2020.
- 3° place: Contest for students coastal city plan in Corrientes province.
- 2° place: Arquisur Arzotegui awards in Belo Horizonte, Brasil. 
- 1° place: Internal contest to represent Tucumán national University at arzotegui awards.
- 3° place: “Taller virtual de las Américas” international contest for winery building in 
  Mendoza, Argentina.  2018. `;
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
