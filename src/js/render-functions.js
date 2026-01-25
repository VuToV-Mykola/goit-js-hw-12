import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"

const galleryEl = document.querySelector(".gallery")
const loaderEl = document.querySelector(".loader-wrap")
const loadMoreBtnEl = document.querySelector(".btn-load-more")

let lightboxInstance = null

function createCardMarkup(img) {
  const {
    webformatURL,
    largeImageURL,
    tags = "",
    likes = 0,
    views = 0,
    comments = 0,
    downloads = 0
  } = img

  const raw = String(tags).slice(0, 200)
  const safe = raw
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

  return `
<li class="gallery-item">
  <a class="gallery-item__link" href="${largeImageURL}" title="${safe}">
    <img
      class="gallery-item__img"
      src="${webformatURL}"
      alt="${safe}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-item__info">
      <span class="gallery-item__info-item">❤️ ${likes}</span>
      <span class="gallery-item__info-item">👁 ${views}</span>
      <span class="gallery-item__info-item">💬 ${comments}</span>
      <span class="gallery-item__info-item">⬇ ${downloads}</span>
    </div>
  </a>
</li>`
}

export function createGallery(images, append = false) {
  if (!galleryEl) return

  if (!Array.isArray(images) || images.length === 0) {
    if (!append) galleryEl.innerHTML = ""
    return
  }

  const markup = images.map(createCardMarkup).join("")

  if (append) {
    galleryEl.insertAdjacentHTML("beforeend", markup)
  } else {
    galleryEl.innerHTML = markup
  }

  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox(".gallery a", {
      captionsData: "title",
      captionDelay: 250
    })
  } else {
    lightboxInstance.refresh()
  }
}

export function clearGallery() {
  if (galleryEl) galleryEl.innerHTML = ""
}

export function showLoader() {
  if (loaderEl) loaderEl.classList.remove("is-hidden")
}

export function hideLoader() {
  if (loaderEl) loaderEl.classList.add("is-hidden")
}

export function showLoadMoreButton() {
  if (loadMoreBtnEl) loadMoreBtnEl.classList.remove("is-hidden")
}

export function hideLoadMoreButton() {
  if (loadMoreBtnEl) loadMoreBtnEl.classList.add("is-hidden")
}
