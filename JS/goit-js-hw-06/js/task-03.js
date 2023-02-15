// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// < ul class="gallery"></>

// Використовуй масив об'єктів images для створення елементів < img>, вкладених в <li >. Для створення розмітки використовуй
// шаблонні рядки і метод insertAdjacentHTML().

//     Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//     Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listGallery = document.querySelector(".gallery");
const htmlMarkup = images
  .map(
    (image) =>
      `<li><img class="photo" src="${image.url}" alt="${image.alt}" width=200 height=133></li>`
  )
  .join("");

listGallery.insertAdjacentHTML("beforeend", htmlMarkup);

listGallery.style.display = "flex";
listGallery.style.padding = "15px";
listGallery.style.margin = "0";
listGallery.style.justifyContent = "center";
listGallery.style.alignItems = "center";
listGallery.style.gap = "45px";
listGallery.style.borderRadius = "80px";
listGallery.style.listStyleType = "none";
listGallery.style.backgroundColor = "cyan";

//console.dir(listGallery);
