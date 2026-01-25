### 🌐 Sprache wählen:

[🇺🇦 Українська](README.md) | [🇬🇧 English](README.en.md) |
[🇩🇪 Deutsch](README.de.md)

# GoIT JS HW-12 — Image Search (Pixabay API)

**📌 GoIT Homework-JS #12:** Bildersuche nach Stichwort über Pixabay API. Axios, SimpleLightbox, iziToast, Ladeanzeige. Dynamisches Galerie-Rendering, modales Lightbox, responsives Design.

<!-- AUTOGEN:STATS -->
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Terminal](https://img.shields.io/badge/mac%20terminal-000000?style=for-the-badge&logo=apple&logoColor=white&labelColor=000000)](https://support.apple.com/guide/terminal/welcome/mac) [![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/) [![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/) [![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)](https://www.figma.com/)

[![📊 Views](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/visitors-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/graphs/traffic)
[![⭐ Stars](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/likes-badge.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/actions/workflows/screenshot-and-visitor.yaml)
[![📦 Size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/repo-size.json)](https://github.com/VuToV-Mykola/goit-js-hw-12)
[![📄 License](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/VuToV-Mykola/goit-js-hw-12/main/assets/db/repo-license.json)](https://github.com/VuToV-Mykola/goit-js-hw-12/blob/main/LICENSE)
<!-- END:AUTOGEN -->

## 📸 Projektscreenshot

![Project Screenshot](./assets/screenshot.png)

## 🎯 Über das Projekt

Hausaufgabe Nr. 12 für JavaScript. Bildersuche über **Pixabay API** (Fortsetzung von HW-11):

- Suchformular, Galerie mit Ergebnissen;
- **Load more**-Button — Paginierung (15 Bilder pro Seite), sanftes Scrollen nach dem Nachladen;
- Meldung bei Ende der Kollektion;
- SimpleLightbox für vergrößerte Bilder;
- Ladeanzeige unter Load more; Benachrichtigungen via `iziToast`.

## 🧩 Funktionen

- Bildersuche nach Stichwort (Pixabay API, Axios, async/await).
- Galerie mit Karten (webformatURL, largeImageURL, tags, likes, views, comments, downloads).
- **Load more** — nächste Seite laden, Markup an Galerie anhängen, SimpleLightbox `refresh()`.
- Sanftes Scrollen um 2× Kartenhöhe nach dem Laden (`getBoundingClientRect`, `scrollBy`).
- Ende der Kollektion: Load more ausblenden, Text «We're sorry, but you've reached the end of search results.»
- SimpleLightbox-Modal per Klick auf Karte.
- Loader unter dem Button; iziToast bei leeren Ergebnissen und Fehlern.

## 🛠 Tech-Stack

- HTML5, CSS3, JavaScript (ES2025, async/await)
- Vite, Axios, iziToast, SimpleLightbox, loaders.css
- Pixabay API

## 🔌 Pixabay API-Key

1. Key holen: [Pixabay API](https://pixabay.com/api/docs/).
2. Datei `.env` im Projektroot erstellen (neben `package.json`):
   ```bash
   cp .env.example .env
   ```
3. `.env` öffnen und Key eintragen:
   ```
   VITE_PIXABAY_API_KEY=dein_key
   ```

## 📁 Struktur

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
└── README.de.md
```

## 🚀 Start

1. Abhängigkeiten installieren:
   ```bash
   npm install
   ```
2. `.env` einrichten (siehe Abschnitt «Pixabay API-Key»).
3. Dev-Server starten:
   ```bash
   npm run dev
   ```
4. Öffnen: `http://localhost:5173/` oder `http://localhost:5173/index.html`.

## ✅ Validierung

- HTML: https://validator.w3.org/
- CSS: https://jigsaw.w3.org/css-validator/
- JS: https://jshint.com/

## 🔗 Links

- [HW-12 Aufgabe](https://www.edu.goit.global/ru/learn/35708569/18936918/20968217/homework)
- [Pixabay API](https://pixabay.com/api/docs/)
- [Figma HW-JavaScript](https://www.figma.com/design/m8k9NQV7qZrtYDCvxfD68B/HW-JavaScript?node-id=3-1010)
- [Stylelint Rules](https://stylelint.io/user-guide/rules)
- [Code Guide](https://codeguide.co/)
