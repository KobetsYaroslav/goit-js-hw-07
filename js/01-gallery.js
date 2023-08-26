import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");

// Функція для створення елементів галереї
function createGalleryItem(item) {
  const galleryItem = document.createElement("li");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.alt = item.description;
  galleryImage.setAttribute("data-source", item.original);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

// Функція для відображення галереї
function renderGallery() {
  const galleryMarkup = galleryItems.map(createGalleryItem);
  galleryContainer.append(...galleryMarkup);
}

renderGallery();
// Делегування подій для обробки кліків на елементах галереї
galleryContainer.addEventListener("click", handleGalleryClick);

// Функція для обробки кліків на елементах галереї
function handleGalleryClick(event) {
  event.preventDefault();

  const target = event.target;

  if (target.classList.contains("gallery__image")) {
    let largeImageUrl = target.getAttribute("data-source");

    // Модальне вікно з великим зображенням
    const modalContent = `
      <div>
        <img src="${largeImageUrl}"\>
      </div>
    `;

    const instance = basicLightbox.create(modalContent);

    instance.show();
  }
}
