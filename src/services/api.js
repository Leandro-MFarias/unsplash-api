import axios from "axios";

const key = "16a0e103ded9a57b467984107a8dff79";

async function fetchData(endpoint, limit, imgPath) {
  const url = `https://api.themoviedb.org/3/${endpoint}&language=pt-BR&page=1&api_key=${key}`
  const response = await axios.get(url)
  const data = response.data.results

  const slice = limit ? data.slice(0, limit) : data;
  
  return slice.map(movie => ({
    ...movie,
    imageOriginal: `https://image.tmdb.org/t/p/original${movie[imgPath.original]}`,
    image780: `https://image.tmdb.org/t/p/w780${movie[imgPath.original]}`
  }))

}

export function carouselData() {
  return fetchData('trending/movie/day?', 6, { original: "backdrop_path" })
}

export function topRateData() {
  return fetchData('movie/top_rated?', 10, { original: "poster_path" })
}

export function popularData() {
  return fetchData('movie/popular?', null, { original: "poster_path" })
}

export function genreActionData() {
  return fetchData('discover/movie?&with_genres=28&region=BR', null, { original: "poster_path" })
}

export async function movieDetailsData() {
  const url = `https://api.themoviedb.org/3/movie/889737?api_key=${key}&append_to_response=videos&language=pt-BR`
  const response = await axios.get(url)
  const data = await response.data
  const movieImage = {
    ...data,
    imageBackdrop: `https://image.tmdb.org/t/p/original${data.backdrop_path}`,
    imagePoster: `https://image.tmdb.org/t/p/original${data.poster_path}`,
  }
  return movieImage
}