import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
//Створення галереї зображень
function createGalleryItem(item) {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery__item");

  const link = document.createElement("a");
  link.classList.add("gallery__link");
  link.href = item.original;

  const image = document.createElement("img");
  image.classList.add("gallery__image");
  image.src = item.preview;
  image.alt = item.description;

  link.appendChild(image);
  listItem.appendChild(link);

  return listItem;
}

galleryItems.forEach((item) => {
  const galleryItem = createGalleryItem(item);
  galleryList.appendChild(galleryItem);
});
//Відображення підписів
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// Гортання за допомогою клавіатури
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    lightbox.next();
  } else if (event.key === "ArrowLeft") {
    lightbox.prev();
  }
});
