// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const validInput = document.querySelector("#validation-input");

validInput.addEventListener("blur", (event) => {
  if (event.target.value.length == validInput.getAttribute("data-length")) {
    validInput.classList.add("valid");

    if (validInput.classList.contains("invalid")) {
      validInput.classList.remove("invalid");
    }
  } else {
    if (validInput.classList.contains("valid")) {
      validInput.classList.remove("valid");
    }
    validInput.classList.add("invalid");
  }
});
