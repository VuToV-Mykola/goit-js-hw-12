// Логіка додатку: форма, Load more, iziToast, scroll — ТЗ main.js
import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css"

import {getImagesByQuery} from "./js/pixabay-api.js"
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton
} from "./js/render-functions.js"

const PER_PAGE = 15
const formEl = document.querySelector(".form")
const loadMoreBtnEl = document.querySelector(".btn-load-more")
const galleryEl = document.querySelector(".gallery")
const endMessageEl = document.querySelector(".end-message")

let currentQuery = ""
let currentPage = 1

function hideEndMessage() {
  if (endMessageEl) endMessageEl.classList.add("is-hidden")
}

function showEndMessage() {
  if (endMessageEl) endMessageEl.classList.remove("is-hidden")
}

function isEndOfCollection(totalHits) {
  return currentPage * PER_PAGE >= totalHits
}

function getIziToastError(err) {
  let msg = "Something went wrong. Please try again."
  if (err.message === "MISSING_API_KEY") {
    msg =
      "Pixabay API key is missing. Create .env and add VITE_PIXABAY_API_KEY=your_key (get key: https://pixabay.com/api/docs/)"
  } else if (err.response?.status === 429) {
    msg = "Too many requests. Please try again later."
  } else if (err.response?.status === 400) {
    msg = "Invalid request (e.g. missing API key). Check .env and VITE_PIXABAY_API_KEY."
  } else if (err.message) {
    msg = err.message
  }
  return msg
}

function scrollAfterLoadMore() {
  if (!galleryEl) return
  const card = galleryEl.querySelector(".gallery-item")
  if (!card) return
  const {height} = card.getBoundingClientRect()
  window.scrollBy({top: 2 * height, behavior: "smooth"})
}

async function handleSearchSubmit(event) {
  event.preventDefault()

  const input = formEl?.querySelector('input[name="search-text"]')
  const query = input ? input.value.trim() : ""
  if (!query) return

  currentQuery = query
  currentPage = 1

  hideLoadMoreButton()
  hideEndMessage()
  showLoader()
  clearGallery()

  try {
    const data = await getImagesByQuery(query, 1)
    hideLoader()

    if (!data || !Array.isArray(data.hits)) {
      iziToast.info({
        title: "Info",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
        timeout: 4000
      })
      return
    }

    if (data.hits.length === 0) {
      iziToast.info({
        title: "Info",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "topRight",
        timeout: 4000
      })
      return
    }

    createGallery(data.hits)

    if (isEndOfCollection(data.totalHits)) {
      hideLoadMoreButton()
      showEndMessage()
    } else {
      showLoadMoreButton()
    }
  } catch (err) {
    hideLoader()
    iziToast.error({
      title: "Error",
      message: getIziToastError(err),
      position: "topRight",
      timeout: 6000
    })
  }
}

async function handleLoadMore() {
  if (!currentQuery) return

  const nextPage = currentPage + 1
  showLoader()

  try {
    const data = await getImagesByQuery(currentQuery, nextPage)
    hideLoader()

    if (!data || !Array.isArray(data.hits) || data.hits.length === 0) {
      hideLoadMoreButton()
      showEndMessage()
      return
    }

    currentPage = nextPage
    createGallery(data.hits, true)

    if (isEndOfCollection(data.totalHits)) {
      hideLoadMoreButton()
      showEndMessage()
    }

    scrollAfterLoadMore()
  } catch (err) {
    hideLoader()
    iziToast.error({
      title: "Error",
      message: getIziToastError(err),
      position: "topRight",
      timeout: 6000
    })
  }
}

if (formEl) {
  formEl.addEventListener("submit", handleSearchSubmit)
}

if (loadMoreBtnEl) {
  loadMoreBtnEl.addEventListener("click", handleLoadMore)
}
