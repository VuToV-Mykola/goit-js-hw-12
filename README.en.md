### 🌐 Choose a language:

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) |
[🇩🇪 Deutsch](README.de.md)

# GoIT JS HW-12 — Image Search (Pixabay API)

**📌 GoIT Homework-JS #12:** Image search by keyword via Pixabay API. Axios, SimpleLightbox, iziToast, loading indicator. Dynamic gallery rendering, modal lightbox, responsive design.

<!-- AUTOGEN:STATS -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/)

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/goit-js-hw-12)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/blob/main/LICENSE)
<!-- END:AUTOGEN -->

## 📸 Project screenshot

![Project Screenshot](./assets/screenshot.png)

## 🎯 About

Homework #12 for JavaScript. Image search via **Pixabay API** (builds on HW-11):

- Search form and results gallery;
- **Load more** button — pagination (15 images per page), smooth scroll after loading;
- End-of-collection message;
- SimpleLightbox for enlarged images;
- Loading indicator below Load more; notifications via `iziToast`.

## 🧩 Features

- Search images by keyword (Pixabay API, Axios, async/await).
- Gallery with cards (webformatURL, largeImageURL, tags, likes, views, comments, downloads).
- **Load more** — fetch next page, append markup to gallery, SimpleLightbox `refresh()`.
- Smooth scroll by 2× card height after load (`getBoundingClientRect`, `scrollBy`).
- End of collection: hide Load more, show «We're sorry, but you've reached the end of search results.»
- SimpleLightbox modal on card click.
- Loader below button; iziToast for empty results and errors.

## 🛠 Tech stack

- HTML5, CSS3, JavaScript (ES2025, async/await)
- Vite, Axios, iziToast, SimpleLightbox, loaders.css
- Pixabay API

## 🔌 Pixabay API key

1. Get a key: [Pixabay API](https://pixabay.com/api/docs/).
2. Create `.env` in the project root (next to `package.json`):
   ```bash
   cp .env.example .env
   ```
3. Open `.env` and add your key:
   ```
   VITE_PIXABAY_API_KEY=your_key
   ```

## 📁 Structure

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
└── README.en.md
```

## 🚀 Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set up `.env` (see «Pixabay API key» section).
3. Start dev server:
   ```bash
   npm run dev
   ```
4. Open: `http://localhost:5173/` or `http://localhost:5173/index.html`.

## ✅ Validation

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- JS: https://jshint.com/

## 🔗 Links

- [HW-12 task](https://www.edu.goit.global/ru/learn/35708569/18936918/20968217/homework)
- [Pixabay API](https://pixabay.com/api/docs/)
- [Figma HW-JavaScript](https://www.figma.com/design/m8k9NQV7qZrtYDCvxfD68B/HW-JavaScript?node-id=3-1010)
- [Stylelint Rules](https://stylelint.io/user-guide/rules)
- [Code Guide](https://codeguide.co/)
