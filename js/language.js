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
const textCiudadParqueProject = document.querySelector(
  ".text-ciudad-parque-project"
);
const textJardinesColgantesProject = document.querySelector(
  ".text-jardines-colgantes-project"
);
const textPatioAltoProject = document.querySelector(".text-patio-alto-project");
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
        "https://diego-helguera.netlify.app/html/ciudadparque.html" ||
      window.location.href === "http://127.0.0.1:5500/html/ciudadparque.html"
    ) {
      textCiudadParqueProject.innerText = `Team: Diego Helguera, Teachers National University of Tucumán

Ciudad Parque is an urban masterplan for Yerba Buena, Tucumán, Argentina. An application of contemporary urban guidelines to respond to the post-pandemic context that we are going through.

It has a park with sports equipment and wild routes taking advantage of the landscape possibilities of the open-air water canal.

Continuity was given to the pre-existing urban fabric by means of a grid of rectangular blocks with a greater North-South orientation, to reduce heat gains in an East-West direction and increase the surface area exposed to the favorable sun of the North and ventilation from the South. At the same time, these blocks will be grouped into two superblocks where the main objective is to punish the use of the car to increase public space for commercial, recreational and environmental support.

In this way, the interior streets of the superblock will become a semi-pedestrian environmental corridor with reduced vehicular access, and the lungs of the block will become semi-public parks for the use of the surrounding buildings. The latter will be intervened and cared for by the immediate neighbors of the block, promoting a sense of belonging and neighborhood interaction. The heart of the superblock is a 30m x 30m central plaza.

The streets in a North-South direction present an organic development and the East-West streets an aligned development, clearing the hill as a backdrop and reference point.

Both the block lungs and the environmental corridor generated on the public road will serve as a support for the restoration and regeneration of the natural territory, through a conscious afforestation and landscaping plan, the goal is to recover original native flora and fauna, avoid changing the metabolic functions of the territory and generate a continuous tree layer that allows the development of these functions without interruptions.

In addition, the diversity of tree species and water treatment will attract various species of birds and other fauna.

The increase in built-up density in height proposes to satisfy housing demand and free up green space for common use, increasing green square meters per inhabitant.

The homogeneous dispersion of functions facilitates the arrival of the inhabitants to consumer goods, work, services in a short time and without the need to use a car or public transport, reducing carbon emissions and improving the quality of life and the availability of time of the community. 

This increase of building density will be treated visually with the interruption of the urban profile through intermittent setbacks, with tree masses that will “camouflage” the buildings, generating in turn widening of the sidewalk for commercial and recreational support.

Ideally, a building should produce more energy than it consumes. Meeting this energy demand completely with solar energy may not be possible, but it may be possible to reduce it. In the process of implementing energy labeling and the possibility of easily donating energy to the grid, it is proposed to develop a photovoltaic grid that reduces electrical network consumption.


`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/jardinescolgantes.html" ||
      window.location.href ===
        "http://127.0.0.1:5500/html/jardinescolgantes.html"
    ) {
      textJardinesColgantesProject.innerText = `Team: Diego Helguera
Responsibilities:
Design
Modeling 
rendering
drawing plans
Video edition

Vertical Gardens of Yerba Buena was the product of exploring new ways of living for the post-pandemic. In the search for an architectural language adapted to the humid and warm climate of Tucumán, Argentina, the goal was to create an architecture that enables the interaction of neighbors in a social isolation situation and at the same time generate a pleasant and warm atmosphere to make life bearable during the lockdown.

The proposal is part of an comprehensive urban Masterplan that integrates the building with common block lungs, Super blocks with central squares, mixed uses, collaborative photovoltaic network, afforestation plan, fauna insertion, landscape lamination lagoons, urban equipment among other things. that I designed as part of my thesis.

The proposal was designed in an academic environment while considering its feasibility in the real commercial and urban environment.

The houses have total cross ventilation, four types of one, two and three bedrooms, corner balconies and front patios linked to a continuous common walkway.

The staggering of its levels allows access to natural light but at the same time its balconies protect the openings from the strong sun. 

the building is lower than the native trees to give prominence to the natural environment and integrate the architecture with the vegetation.

The front patios are a consequence of the cultural custom of placing chairs and tables on the sidewalk, in this case this tradition was brought to the height.



`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/patioalto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/patioalto.html"
    ) {
      textPatioAltoProject.innerText = `Team: Diego Helguera, Teachers of the National University of Tucumán.

In a post-pandemic context, the design focused on spaces for interaction, rethinking, reimagining the ways of inhabiting, of circulating, taking advantage of this moment susceptible to drastic changes (for example, remote work and adoption of video calls) to make these innovative proposals feasible.
 
Our climate in Tucumán, Argentina makes intermediate spaces (semi-covered) usable and desirable; this was identified as an opportunity to create these situations of direct and indirect interaction where just seeing neighbors and greeting each other during isolation can generate a sensation of well-being and where having the space to meet once it is over, too.

Exposing circulation to the outside will help to avoid sources of contagion, replacing minimal distribution shields and stairwells with wide double-height halls and outdoor stairs where green and warm materials play an important role.

The large double-height Elevated hall distributes 8 homes, where each one can accommodate six people. The great hall during the night will act as a great lamp giving identity to the building.

Access to the apartments is through walkways that enter through the balcony. This is a big difference with traditional buildings, entering from the outside is something typical of homes, not apartments. These balconies are facing each other but at the same time distanced to generate this indirect interaction filtered by vegetation, used as a material that provides privacy but not totally.

Mixed uses: The ground floor is intended for commercial premises, the first floor (basement) for offices, the other levels for housing and the terrace for common space and gardens. That way, the inhabitants can work in their own building without having to do home office (something very exhausting according to the pandemic experience), buy products on the street floor without using the car, and produce their vegetables in their own garden.

Circulation as a social space will strengthen the neighborhood bond.



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
        "https://diego-helguera.netlify.app/html/ciudadparque.html" ||
      window.location.href === "http://127.0.0.1:5500/html/ciudadparque.html"
    ) {
      textCiudadParqueProject.innerText = `Equipo: Diego Helguera, Docentes Universidad Nacional de Tucumán

Ciudad parque es un masterplan urbanístico para Yerba Buena, Tucumán, Argentina. Una aplicación de lineamientos urbanísticos contemporáneos para dar respuesta al context pospandémico que atravesamos.

Cuenta con un parque con equipamiento deportivo y vías silvestres aprovechando las posibilidades paisajísticas del canal hídrico a cielo abierto. 

Se dió continuidad a la trama urbana preexistente mediante una malla de manzanas rectangulares con mayor orientación Norte – Sur, para reducir las ganancias de calor en sentido este-oeste y aumentar superficie expuesta al favorable sol del norte y la ventilación del sur. A su vez, estas manzanas se agruparán en dos supermanzanas donde el principal objetivo es castigar el uso del automóvil para aumentar espacio público de apoyo comercial, recreativo y Ambiental.

De esta manera las calles interiores de la supermanzana se convertirán en un corredor ambiental semipeatonal de acceso vehicular reducido, y los pulmones de manzana en parques semipúblicos para uso de los edificios circundantes. Estos últimos serán intervenidos y cuidados por los vecinos inmediatos de la manzana, fomentando el sentido de pertenencia y la interacción barrial. El corazón de la supermanzana es una plaza central de 30 m x 30 m. 

Las calles en dirección Norte-Sur presentan un desarrollo orgánico y las calles Este-Oeste  un desarrollo alineado despejando el cerro como telón de fondo y punto de referencia. 

Tanto los pulmones de manzana como el corredor ambiental generado en la vía publica servirán como soporte para la restauración y regeneración del territorio natural, mediante un plan de forestación y paisajismo consciente el objetivo es recuperar flora y fauna autóctona original, evitar cambiar las funciones metabólicas del territorio y generar un estrato arbóreo continuo que permita el desarrollo de estas funciones sin interrupciones

Ademas la diversidad de especies de arboles y el tratamiento de agua atraerá variadas especies de pájaros y demás fauna.

El aumento de densidad edificada en altura propone saciar demanda habitacional y liberar superficie verde para uso común, aumentando metros cuadrados verdes por habitante.

La dispersión homogénea de funciones facilita la llegada de los habitantes a bienes de consumo, trabajo, servicios en poco tiempo y sin necesidad de usar automóvil o transporte público, disminuyendo las emisiones de carbono y mejorando la calidad de vida y la disposición de tiempo de la gente.

Este incremento de edificación será tratado visualmente con la interrupción de la continuidad del perfil urbano mediante retranqueos intermitentes, con masas arbóreas que “camuflarán” los edificios generando a su vez ensanches de vereda de apoyo comercial y recreativo.

Idealmente, un edificio debería producir más energía de la que consume. Satisfacer esta demanda energética por completo con energía solar puede no ser posible, pero si reducirla. En vías de implementación del etiquetado energético y la posibilidad de donar energía fácilmente a la red, se propone desarrollar una red fotovoltaica que reduzca el consumo de la red.

`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/jardinescolgantes.html" ||
      window.location.href ===
        "http://127.0.0.1:5500/html/jardinescolgantes.html"
    ) {
      textJardinesColgantesProject.innerText = `Equipo: Diego Helguera 
Responsabilidades: 
Diseño
Renderismo
Dibujo de planos 
Edición de video

Jardines verticales de Yerba Buena fue producto de la exploración de nuevos modos de habitar para la pospandemia. En la búsqueda de un lenguaje arquitectónico adaptado al húmedo y cálido clima de Tucumán, el objetivo fue crear una arquitectura que posibilite la interacción de los vecinos en situación de aislamiento social y al mismo tiempo generar una atmosfera agradable y cálida para hacer llevadera la vida en situación de encierro. 

La propuesta es parte de un Masterplan urbano integral que integra el edificio con pulmones de manzana comunes, Super manzanas con plazas centrales, usos mixtos, red fotovoltaica colaborativa, plan de forestación, inserción de fauna, lagunas de laminación paisajísticas, equipamiento urbano entre otras cosas que diseñé como parte de mi tesis de grado. 

La propuesta fue pensada en un ámbito académico teniendo a la vez en cuenta su factibilidad en el ámbito comercial y urbanístico real. 

Las viviendas cuentan con ventilación cruzada total, cuatro tipologías de un, dos y tres dormitorios, balcones en esquina y patios frontales vinculados a una pasarela común corrida. 

El escalonamiento de sus niveles permite el acceso a la luz natural a la vez que sus balcones protegen las aberturas del fuerte sol. La altura del edificio es menor a la de los árboles autóctonos para dar protagonismo al medio natural e integrar la arquitectura a la vegetación. 

Las circulaciones son al aire libre para evitar focos de contagio.

Los patios frontales son consecuencia de la costumbre cultural de situar sillas y mesas en la vereda, en este caso esta tradicion se llevo a la altura. 


`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/patioalto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/patioalto.html"
    ) {
      textPatioAltoProject.innerText = `Equipo: Diego Helguera. Docentes de la Universidad Nacional de Tucumán.

En un contexto pospandémico el diseño se enfocó en espacios de interacción, replantear, reimaginar los modos de habitar, de circular, aprovechando este momento susceptible a cambios drásticos (ejemplo trabajo remoto y adopción de videollamadas) para hacer factibles estas propuestas novedosas.
 
Nuestro clima hace aprovechables y deseables los espacios intermedios (semicubiertos), esto se identificó como oportunidad para crear estas situaciones de interacción directa e indirecta. Donde solo ver vecinos y saludarse durante el aislamiento puede generar una situación de bienestar y donde disponer del espacio para reunirse una vez terminado éste, también. 

Exponer las circulaciones al exterior ayudará a evitar focos de contagio, reemplazando palieres mínimos de distribución y cajas de escalera por amplios halles en dobles alturas y escaleras aéreas donde el verde y los materiales cálidos juegan un importante papel.

El gran hall en doble altura Elevado distribuye 8 viviendas, donde cada una pude alojar seis personas. El gran hall durante la noche actuará como una gran lámpara dándole identidad al edificio. 

El acceso a los departamentos es mediante pasarelas que ingresan por el balcón. Esta es una gran diferencia con los edificios tradicionales, ingresar por el exterior es algo propio de las viviendas, no de los departamentos. Estos balcones se encuentran enfrentados y distanciados para generar esta interacción indirecta filtrada por vegetación, usada como material que propicia privacidad pero no total. 

Usos mixtos: La planta baja está destinada a locales comerciales, el primer piso (basamento) a oficinas, los demás niveles a Vivienda y la terraza a espacio común y Huertas. De esta manera los habitantes pueden trabajar en su mismo edificio sin necesidad de hacer home office (algo muy desgastante según la experiencia de la pandemia), comprar productos sin usar el automóvil, y producir sus verduras en su propia huerta. 

La circulación como espacio social fortalecerá el vínculo vecinal. 



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
        "https://diego-helguera.netlify.app/html/ciudadparque.html" ||
      window.location.href === "http://127.0.0.1:5500/html/ciudadparque.html"
    ) {
      textCiudadParqueProject.innerText = `Equipo: Diego Helguera, Docentes Universidad Nacional de Tucumán

Ciudad parque es un masterplan urbanístico para Yerba Buena, Tucumán, Argentina. Una aplicación de lineamientos urbanísticos contemporáneos para dar respuesta al context pospandémico que atravesamos.

Cuenta con un parque con equipamiento deportivo y vías silvestres aprovechando las posibilidades paisajísticas del canal hídrico a cielo abierto. 

Se dió continuidad a la trama urbana preexistente mediante una malla de manzanas rectangulares con mayor orientación Norte – Sur, para reducir las ganancias de calor en sentido este-oeste y aumentar superficie expuesta al favorable sol del norte y la ventilación del sur. A su vez, estas manzanas se agruparán en dos supermanzanas donde el principal objetivo es castigar el uso del automóvil para aumentar espacio público de apoyo comercial, recreativo y Ambiental.

De esta manera las calles interiores de la supermanzana se convertirán en un corredor ambiental semipeatonal de acceso vehicular reducido, y los pulmones de manzana en parques semipúblicos para uso de los edificios circundantes. Estos últimos serán intervenidos y cuidados por los vecinos inmediatos de la manzana, fomentando el sentido de pertenencia y la interacción barrial. El corazón de la supermanzana es una plaza central de 30 m x 30 m. 

Las calles en dirección Norte-Sur presentan un desarrollo orgánico y las calles Este-Oeste  un desarrollo alineado despejando el cerro como telón de fondo y punto de referencia. 

Tanto los pulmones de manzana como el corredor ambiental generado en la vía publica servirán como soporte para la restauración y regeneración del territorio natural, mediante un plan de forestación y paisajismo consciente el objetivo es recuperar flora y fauna autóctona original, evitar cambiar las funciones metabólicas del territorio y generar un estrato arbóreo continuo que permita el desarrollo de estas funciones sin interrupciones

Ademas la diversidad de especies de arboles y el tratamiento de agua atraerá variadas especies de pájaros y demás fauna.

El aumento de densidad edificada en altura propone saciar demanda habitacional y liberar superficie verde para uso común, aumentando metros cuadrados verdes por habitante.

La dispersión homogénea de funciones facilita la llegada de los habitantes a bienes de consumo, trabajo, servicios en poco tiempo y sin necesidad de usar automóvil o transporte público, disminuyendo las emisiones de carbono y mejorando la calidad de vida y la disposición de tiempo de la gente.

Este incremento de edificación será tratado visualmente con la interrupción de la continuidad del perfil urbano mediante retranqueos intermitentes, con masas arbóreas que “camuflarán” los edificios generando a su vez ensanches de vereda de apoyo comercial y recreativo.

Idealmente, un edificio debería producir más energía de la que consume. Satisfacer esta demanda energética por completo con energía solar puede no ser posible, pero si reducirla. En vías de implementación del etiquetado energético y la posibilidad de donar energía fácilmente a la red, se propone desarrollar una red fotovoltaica que reduzca el consumo de la red.

`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/jardinescolgantes.html" ||
      window.location.href ===
        "http://127.0.0.1:5500/html/jardinescolgantes.html"
    ) {
      textJardinesColgantesProject.innerText = `Equipo: Diego Helguera 
Responsabilidades: 
Diseño
Renderismo
Dibujo de planos 
Edición de video

Jardines verticales de Yerba Buena fue producto de la exploración de nuevos modos de habitar para la pospandemia. En la búsqueda de un lenguaje arquitectónico adaptado al húmedo y cálido clima de Tucumán, el objetivo fue crear una arquitectura que posibilite la interacción de los vecinos en situación de aislamiento social y al mismo tiempo generar una atmosfera agradable y cálida para hacer llevadera la vida en situación de encierro. 

La propuesta es parte de un Masterplan urbano integral que integra el edificio con pulmones de manzana comunes, Super manzanas con plazas centrales, usos mixtos, red fotovoltaica colaborativa, plan de forestación, inserción de fauna, lagunas de laminación paisajísticas, equipamiento urbano entre otras cosas que diseñé como parte de mi tesis de grado. 

La propuesta fue pensada en un ámbito académico teniendo a la vez en cuenta su factibilidad en el ámbito comercial y urbanístico real. 

Las viviendas cuentan con ventilación cruzada total, cuatro tipologías de un, dos y tres dormitorios, balcones en esquina y patios frontales vinculados a una pasarela común corrida. 

El escalonamiento de sus niveles permite el acceso a la luz natural a la vez que sus balcones protegen las aberturas del fuerte sol. La altura del edificio es menor a la de los árboles autóctonos para dar protagonismo al medio natural e integrar la arquitectura a la vegetación. 

Las circulaciones son al aire libre para evitar focos de contagio.

Los patios frontales son consecuencia de la costumbre cultural de situar sillas y mesas en la vereda, en este caso esta tradicion se llevo a la altura. 


`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/patioalto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/patioalto.html"
    ) {
      textPatioAltoProject.innerText = `Equipo: Diego Helguera. Docentes de la Universidad Nacional de Tucumán.

En un contexto pospandémico el diseño se enfocó en espacios de interacción, replantear, reimaginar los modos de habitar, de circular, aprovechando este momento susceptible a cambios drásticos (ejemplo trabajo remoto y adopción de videollamadas) para hacer factibles estas propuestas novedosas.
 
Nuestro clima hace aprovechables y deseables los espacios intermedios (semicubiertos), esto se identificó como oportunidad para crear estas situaciones de interacción directa e indirecta. Donde solo ver vecinos y saludarse durante el aislamiento puede generar una situación de bienestar y donde disponer del espacio para reunirse una vez terminado éste, también. 

Exponer las circulaciones al exterior ayudará a evitar focos de contagio, reemplazando palieres mínimos de distribución y cajas de escalera por amplios halles en dobles alturas y escaleras aéreas donde el verde y los materiales cálidos juegan un importante papel.

El gran hall en doble altura Elevado distribuye 8 viviendas, donde cada una pude alojar seis personas. El gran hall durante la noche actuará como una gran lámpara dándole identidad al edificio. 

El acceso a los departamentos es mediante pasarelas que ingresan por el balcón. Esta es una gran diferencia con los edificios tradicionales, ingresar por el exterior es algo propio de las viviendas, no de los departamentos. Estos balcones se encuentran enfrentados y distanciados para generar esta interacción indirecta filtrada por vegetación, usada como material que propicia privacidad pero no total. 

Usos mixtos: La planta baja está destinada a locales comerciales, el primer piso (basamento) a oficinas, los demás niveles a Vivienda y la terraza a espacio común y Huertas. De esta manera los habitantes pueden trabajar en su mismo edificio sin necesidad de hacer home office (algo muy desgastante según la experiencia de la pandemia), comprar productos sin usar el automóvil, y producir sus verduras en su propia huerta. 

La circulación como espacio social fortalecerá el vínculo vecinal. 



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
        "https://diego-helguera.netlify.app/html/ciudadparque.html" ||
      window.location.href === "http://127.0.0.1:5500/html/ciudadparque.html"
    ) {
      textCiudadParqueProject.innerText = `Team: Diego Helguera, Teachers National University of Tucumán

Ciudad Parque is an urban masterplan for Yerba Buena, Tucumán, Argentina. An application of contemporary urban guidelines to respond to the post-pandemic context that we are going through.

It has a park with sports equipment and wild routes taking advantage of the landscape possibilities of the open-air water canal.

Continuity was given to the pre-existing urban fabric by means of a grid of rectangular blocks with a greater North-South orientation, to reduce heat gains in an East-West direction and increase the surface area exposed to the favorable sun of the North and ventilation from the South. At the same time, these blocks will be grouped into two superblocks where the main objective is to punish the use of the car to increase public space for commercial, recreational and environmental support.

In this way, the interior streets of the superblock will become a semi-pedestrian environmental corridor with reduced vehicular access, and the lungs of the block will become semi-public parks for the use of the surrounding buildings. The latter will be intervened and cared for by the immediate neighbors of the block, promoting a sense of belonging and neighborhood interaction. The heart of the superblock is a 30m x 30m central plaza.

The streets in a North-South direction present an organic development and the East-West streets an aligned development, clearing the hill as a backdrop and reference point.

Both the block lungs and the environmental corridor generated on the public road will serve as a support for the restoration and regeneration of the natural territory, through a conscious afforestation and landscaping plan, the goal is to recover original native flora and fauna, avoid changing the metabolic functions of the territory and generate a continuous tree layer that allows the development of these functions without interruptions.

In addition, the diversity of tree species and water treatment will attract various species of birds and other fauna.

The increase in built-up density in height proposes to satisfy housing demand and free up green space for common use, increasing green square meters per inhabitant.

The homogeneous dispersion of functions facilitates the arrival of the inhabitants to consumer goods, work, services in a short time and without the need to use a car or public transport, reducing carbon emissions and improving the quality of life and the availability of time of the community. 

This increase of building density will be treated visually with the interruption of the urban profile through intermittent setbacks, with tree masses that will “camouflage” the buildings, generating in turn widening of the sidewalk for commercial and recreational support.

Ideally, a building should produce more energy than it consumes. Meeting this energy demand completely with solar energy may not be possible, but it may be possible to reduce it. In the process of implementing energy labeling and the possibility of easily donating energy to the grid, it is proposed to develop a photovoltaic grid that reduces electrical network consumption.

`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/jardinescolgantes.html" ||
      window.location.href ===
        "http://127.0.0.1:5500/html/jardinescolgantes.html"
    ) {
      textJardinesColgantesProject.innerText = `Team: Diego Helguera
Responsibilities:
Design
Modeling 
rendering
drawing plans
Video edition

Vertical Gardens of Yerba Buena was the product of exploring new ways of living for the post-pandemic. In the search for an architectural language adapted to the humid and warm climate of Tucumán, Argentina, the goal was to create an architecture that enables the interaction of neighbors in a social isolation situation and at the same time generate a pleasant and warm atmosphere to make life bearable during the lockdown.

The proposal is part of an comprehensive urban Masterplan that integrates the building with common block lungs, Super blocks with central squares, mixed uses, collaborative photovoltaic network, afforestation plan, fauna insertion, landscape lamination lagoons, urban equipment among other things. that I designed as part of my thesis.

The proposal was designed in an academic environment while considering its feasibility in the real commercial and urban environment.

The houses have total cross ventilation, four types of one, two and three bedrooms, corner balconies and front patios linked to a continuous common walkway.

The staggering of its levels allows access to natural light but at the same time its balconies protect the openings from the strong sun. 

the building is lower than the native trees to give prominence to the natural environment and integrate the architecture with the vegetation.

The front patios are a consequence of the cultural custom of placing chairs and tables on the sidewalk, in this case this tradition was brought to the height.



`;
    }
    if (
      window.location.href ===
        "https://diego-helguera.netlify.app/html/patioalto.html" ||
      window.location.href === "http://127.0.0.1:5500/html/patioalto.html"
    ) {
      textPatioAltoProject.innerText = `Team: Diego Helguera, Teachers of the National University of Tucumán.

In a post-pandemic context, the design focused on spaces for interaction, rethinking, reimagining the ways of inhabiting, of circulating, taking advantage of this moment susceptible to drastic changes (for example, remote work and adoption of video calls) to make these innovative proposals feasible.
 
Our climate in Tucumán, Argentina makes intermediate spaces (semi-covered) usable and desirable; this was identified as an opportunity to create these situations of direct and indirect interaction where just seeing neighbors and greeting each other during isolation can generate a sensation of well-being and where having the space to meet once it is over, too.

Exposing circulation to the outside will help to avoid sources of contagion, replacing minimal distribution shields and stairwells with wide double-height halls and outdoor stairs where green and warm materials play an important role.

The large double-height Elevated hall distributes 8 homes, where each one can accommodate six people. The great hall during the night will act as a great lamp giving identity to the building.

Access to the apartments is through walkways that enter through the balcony. This is a big difference with traditional buildings, entering from the outside is something typical of homes, not apartments. These balconies are facing each other but at the same time distanced to generate this indirect interaction filtered by vegetation, used as a material that provides privacy but not totally.

Mixed uses: The ground floor is intended for commercial premises, the first floor (basement) for offices, the other levels for housing and the terrace for common space and gardens. That way, the inhabitants can work in their own building without having to do home office (something very exhausting according to the pandemic experience), buy products on the street floor without using the car, and produce their vegetables in their own garden.

Circulation as a social space will strengthen the neighborhood bond.



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
