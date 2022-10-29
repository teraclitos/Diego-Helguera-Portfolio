const form = document.getElementById("form");

const inputsArray = document.querySelectorAll("#form input, textarea ");
const wrongName = document.querySelector(".wrong-name");
const wrongEmail = document.querySelector(".wrong-email");
const wrongText = document.querySelector(".wrong-text");
const btnSubmit = document.getElementById("btn-submit");

const expression = {
  name: /^[a-zA-ZÀ-ÿ\s]{3,20}$/,

  mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

  text: /\S{5,10}/,
};

const validation = (inputName, inputValue, inputs) => {
  switch (inputName) {
    case "name":
      if (expression.name.test(inputValue) || inputValue === "") {
        wrongName.classList.add("none");
        inputs.classList.remove("border-wrong");
      } else {
        wrongName.classList.remove("none");
        inputs.classList.add("border-wrong");
      }

      break;
    case "asunto":
      console.log("el asunto funciona");

      break;
    case "email":
      if (expression.mail.test(inputValue) || inputValue === "") {
        wrongEmail.classList.add("none");
        inputs.classList.remove("border-wrong");
      } else {
        wrongEmail.classList.remove("none");
        inputs.classList.add("border-wrong");
      }

      break;

    default:
      if (expression.text.test(inputValue) || inputValue === "") {
        wrongText.classList.add("none");
        btnSubmit.classList.remove("top-btn-submit");
        inputs.classList.remove("border-wrong");
      } else {
        wrongText.classList.remove("none");
        btnSubmit.classList.add("top-btn-submit");
        inputs.classList.add("border-wrong");
      }
      break;
  }
};

inputsArray.forEach((input) => {
  input.addEventListener("keyup", () => {
    validation(input.name, input.value, input);
  });
  input.addEventListener("blur", () => {
    validation(input.name, input.value, input);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
});
