// Підключення SimpleLightbox та його стилів
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Посилання на контейнер галереї та елемент лоадера
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader-wrap');

// Екземпляр SimpleLightbox (лінива ініціалізація при першому createGallery)
let lightboxInstance = null;

// Створення HTML-розмітки однієї картки зображення
function createCardMarkup(img) {
  const {
    webformatURL,
    largeImageURL,
    tags = '',
    likes = 0,
    views = 0,
    comments = 0,
    downloads = 0,
  } = img;

  // Екранування спецсимволів для безпечного використання в alt/title
  const raw = String(tags).slice(0, 200);
  const safe = raw
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

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
</li>`;
}

// Додає розмітку галереї в DOM та викликає refresh() на SimpleLightbox
export function createGallery(images) {
  if (!galleryEl) return;

  // Порожній масив або не масив — очищаємо галерею
  if (!Array.isArray(images) || images.length === 0) {
    galleryEl.innerHTML = '';
    return;
  }

  // Генеруємо розмітку всіх карток одним рядком
  const markup = images.map(createCardMarkup).join('');
  galleryEl.innerHTML = markup;

  // Ініціалізація лайтбокса або оновлення після додавання нових елементів
  if (!lightboxInstance) {
    lightboxInstance = new SimpleLightbox('.gallery a', {
      captionsData: 'title',
      captionDelay: 250,
    });
  } else {
    lightboxInstance.refresh();
  }
}

// Очищення вмісту контейнера галереї
export function clearGallery() {
  if (galleryEl) galleryEl.innerHTML = '';
}

// Показ індикатора завантаження (прибирає клас is-hidden)
export function showLoader() {
  if (loaderEl) loaderEl.classList.remove('is-hidden');
}

// Приховування індикатора завантаження (додає клас is-hidden)
export function hideLoader() {
  if (loaderEl) loaderEl.classList.add('is-hidden');
}
