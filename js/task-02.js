// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент < li >. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі < li > за одну операцію у список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listRef = document.querySelector("#ingredients");
const ListItemArr = [];
ingredients.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList.add("item");
  ListItemArr.push(listItem);
});
listRef.append(...ListItemArr);
