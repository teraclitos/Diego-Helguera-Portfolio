const form = document.getElementById("form");

const inputsArray = document.querySelectorAll("#form input, textarea ");
const wrongName = document.querySelector(".wrong-name");
const wrongEmail = document.querySelector(".wrong-email");
const wrongText = document.querySelector(".wrong-text");
const btnSubmit = document.getElementById("btn-submit");

const expression = {
  name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,

  mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

  text: /\S{5,100}/,
};

const validation = (x, y) => {
  switch (x) {
    case "name":
      if (expression.name.test(y) || y === "") {
        wrongName.classList.add("none");
      } else {
        wrongName.classList.remove("none");
      }

      break;
    case "asunto":
      console.log("el asunto funciona");

      break;
    case "email":
      if (expression.mail.test(y) || y === "") {
        wrongEmail.classList.add("none");
      } else {
        wrongEmail.classList.remove("none");
      }

      break;

    default:
      if (expression.text.test(y) || y === "") {
        wrongText.classList.add("none");
        btnSubmit.classList.remove("top-btn-submit");
      } else {
        wrongText.classList.remove("none");
        btnSubmit.classList.add("top-btn-submit");
      }
      break;
  }
};

inputsArray.forEach((input) => {
  input.addEventListener("keyup", () => {
    validation(input.name, input.value);
  });
  input.addEventListener("blur", () => {
    validation(input.name, input.value);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
