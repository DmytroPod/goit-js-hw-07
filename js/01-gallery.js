import { galleryItems } from "./gallery-items.js";
// Change code below this line
// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
 <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
 </li>`
  )
  .join("");
console.log(markup);

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", handleClickGallery);

function handleClickGallery(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" alt="${evt.target.alt}" />`,
    {
      onClose: () => {
        document.removeEventListener("keydown", closeModal);
      },
    }
  );

  instance.show();
  document.addEventListener("keydown", closeModal);
  function closeModal(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
    console.log(evt.code);
  }
}
