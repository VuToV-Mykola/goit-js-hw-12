### 🌐 Виберіть для Вас комфортну мову:

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) |
[🇩🇪 Deutsch](README.de.md)

# GoIT JS HW-12 — Image Search (Pixabay API)

**📌 GoIT Homework-JS #12:** пошук зображень за ключовим словом через Pixabay API. Axios, SimpleLightbox, iziToast, індикатор завантаження. Динамічний рендер галереї, модальний лайтбокс, адаптивний дизайн.

<!-- AUTOGEN:STATS -->
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/) 

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/goit-js-hw-12)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/blob/main/LICENSE)

## 📸 Скріншот проекту
![Project Screenshot](./assets/screenshot.png)
<!-- END:AUTOGEN -->

## 📸 Скріншот проєкту

![Project Screenshot](./assets/screenshot.png)

## 🎯 Про проєкт

Домашнє завдання №12 з JavaScript. Пошук зображень через **Pixabay API** (продовження HW-11):

- форма пошуку (`.form`, `name="search-text"`), галерея результатів;
- кнопка **Load more** — пагінація (15 зображень на сторінку), плавне прокручування після підвантаження;
- повідомлення про кінець колекції;
- SimpleLightbox для перегляду збільшених зображень;
- індикатор завантаження під кнопкою Load more та сповіщення через `iziToast`.

## 🧩 Функціонал

- Пошук зображень за ключовим словом (Pixabay API, Axios, async/await).
- Галерея з картками (webformatURL, largeImageURL, tags, likes, views, comments, downloads).
- **Load more** — запит наступної сторінки, додавання розмітки до галереї, `refresh()` SimpleLightbox.
- Плавне прокручування на 2 висоти картки після підвантаження (`getBoundingClientRect`, `scrollBy`).
- Кінець колекції: ховання Load more, текст «We're sorry, but you've reached the end of search results.»
- Модальне вікно SimpleLightbox по кліку на картку.
- Loader під кнопкою; iziToast при порожніх результатах та помилках.

## 🛠 Технології

- HTML5, CSS3, JavaScript (ES2025, async/await)
- Vite, Axios, iziToast, SimpleLightbox, loaders.css
- Pixabay API

## 🔌 Pixabay API key

1. Отримати ключ: [Pixabay API](https://pixabay.com/api/docs/).
2. Створити файл `.env` у корені проєкту (поруч із `package.json`):
   ```bash
   cp .env.example .env
   ```
3. Відкрити `.env` і вписати свій ключ:
   ```
   VITE_PIXABAY_API_KEY=ваш_ключ
   ```

## 📁 Структура

```
goit-js-hw-12/
├── src/
│   ├── index.html
│   ├── main.js
│   ├── css/
│   │   ├── styles.css
│   │   ├── base.css
│   │   ├── reset.css
│   │   ├── container.css
│   │   ├── footer.css
│   │   └── image-search.css
│   └── js/
│       ├── pixabay-api.js
│       └── render-functions.js
├── .env.example
├── package.json
└── README.md
```

## 🚀 Запуск

1. Встановити залежності:
   ```bash
   npm install
   ```
2. Налаштувати `.env` (див. розділ «Pixabay API key»).
3. Запустити dev-сервер:
   ```bash
   npm run dev
   ```
4. Відкрити: `http://localhost:5173/` або `http://localhost:5173/index.html`.

## ✅ Валідація

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- JS: https://jshint.com/

## 🔗 Корисні посилання

- [Технічне завдання HW-12](https://www.edu.goit.global/ru/learn/35708569/18936918/20968217/homework)
- [Pixabay API](https://pixabay.com/api/docs/)
- [Figma HW-JavaScript](https://www.figma.com/design/m8k9NQV7qZrtYDCvxfD68B/HW-JavaScript?node-id=3-1010)
- [Stylelint Rules](https://stylelint.io/user-guide/rules)
- [Code Guide](https://codeguide.co/)
