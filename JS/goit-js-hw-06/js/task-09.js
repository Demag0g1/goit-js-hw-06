// Напиши скрипт, який змінює кольори фону елемента < body >
// через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector("button.change-color");
const spanColor = document.querySelector("span.color");

changeColorBtn.addEventListener("click", () => {
  const colorRandom = getRandomHexColor();

  body.style.backgroundColor = colorRandom;

  spanColor.textContent = colorRandom;
});
