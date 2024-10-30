import axios from "axios";

const key = "16a0e103ded9a57b467984107a8dff79";

export async function carouselData() {
  const url = `https://api.themoviedb.org/3/trending/movie/day?&language=pt-BR&page=1&api_key=${key}`;

  const response = await axios.get(url);
  const results = await response.data.results;
  const firstFive = results.slice(0, 6);
  const movieImage = firstFive.map((movie) => ({
    ...movie,
    imageOriginal: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    image780: `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`,
  }));
  return movieImage;
}

export async function popularData() {
  const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1&api_key=${key}`

  const response = await axios.get(url)
  const results = await response.data.results
  const movieImage = results.map(movie => ({
    ...movie,
    imageOriginal: `https://image.tmdb.org/t/p/original${movie.poster_path
    }`,
    image500: `https://image.tmdb.org/t/p/w500${movie.poster_path
    }`
  }))
  return movieImage
}

export async function topRateData() {
  const url = `https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1&api_key=${key}`
  const response = await axios.get(url)
  const results = await response.data.results
  const topTen = results.slice(0,10) 
  const movieImage = topTen.map(movie => ({
    ...movie,
    imageOriginal: `https://image.tmdb.org/t/p/original${movie.poster_path}`
  }))
  return movieImage
}
