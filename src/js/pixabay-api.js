// HTTP-запити до Pixabay API (axios, async/await)
import axios from "axios"

const BASE_URL = "https://pixabay.com/api/"

function getApiKey() {
  return import.meta.env.VITE_PIXABAY_API_KEY || ""
}

export async function getImagesByQuery(query, page = 1) {
  const key = getApiKey()
  if (!key || !String(key).trim()) {
    throw new Error("MISSING_API_KEY")
  }

  const params = {
    key: key.trim(),
    q: String(query).trim(),
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    page: Number(page) || 1,
    per_page: 15
  }

  const response = await axios.get(BASE_URL, {params})
  return response.data
}
