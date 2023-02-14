// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює інлайн - стиль span#text,
// оновлюючи властивість font - size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const sizeControl = document.querySelector("input#font-size-control");
const textChange = document.querySelector("span#text");
textChange.style.fontSize = `${sizeControl.value}px`;
sizeControl.addEventListener("input", (event) => {
  textChange.style.fontSize = `${event.target.value}px`;
  // console.log(textChange.style.fontSize);
});
