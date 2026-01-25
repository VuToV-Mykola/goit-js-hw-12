// Підключення iziToast для нотифікацій та його стилів
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Імпорт функцій для HTTP-запитів та рендеру інтерфейсу
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

// Посилання на форму пошуку
const formEl = document.querySelector('.form');

// Обробник сабміту форми — запит до Pixabay, відмальовування галереї або повідомлення
function handleSearchSubmit(event) {
  event.preventDefault();

  const input = formEl.querySelector('input[name="search-text"]');
  const query = input ? input.value.trim() : '';

  // Перевірка на порожній пошуковий рядок
  if (!query) {
    return;
  }

  // Показуємо лоадер та очищаємо попередні результати
  showLoader();
  clearGallery();

  // Виконуємо HTTP-запит за ключовим словом
  getImagesByQuery(query)
    .then((data) => {
      hideLoader();

      // Перевірка на відсутність даних або порожній масив hits
      if (!data || !Array.isArray(data.hits)) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 4000,
        });
        return;
      }

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 4000,
        });
        return;
      }

      // Відмальовуємо галерею отриманих зображень
      createGallery(data.hits);
    })
    .catch((err) => {
      hideLoader();

      // Визначаємо текст помилки за типом (відсутній ключ, 429, 400 тощо)
      let msg = 'Something went wrong. Please try again.';
      if (err.message === 'MISSING_API_KEY') {
        msg =
          'Pixabay API key is missing. Create .env and add VITE_PIXABAY_API_KEY=your_key (get key: https://pixabay.com/api/docs/)';
      } else if (err.response?.status === 429) {
        msg = 'Too many requests. Please try again later.';
      } else if (err.response?.status === 400) {
        msg =
          'Invalid request (e.g. missing API key). Check .env and VITE_PIXABAY_API_KEY.';
      } else if (err.message) {
        msg = err.message;
      }

      iziToast.error({
        title: 'Error',
        message: msg,
        position: 'topRight',
        timeout: 6000,
      });
    });
}

// Підключення обробника сабміту форми
if (formEl) {
  formEl.addEventListener('submit', handleSearchSubmit);
}
