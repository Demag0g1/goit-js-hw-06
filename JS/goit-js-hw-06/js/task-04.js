// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// < div id="counter">
//   < button type="button" data-action="decrement">-1</>
//   < span id="value">0</>
//   < button type="button" data-action="increment">+1</>
// </>

//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//     Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//     Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const counter = document.querySelector("#value");
const decr = document.querySelector('button[data-action="decrement"]');
const incr = document.querySelector('button[data-action="increment"]');

decr.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
incr.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});
