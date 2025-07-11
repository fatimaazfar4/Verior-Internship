import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

const omdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    apikey: API_KEY,
  },
});

// 🔹 "Featured" section (original)
export const getInitialMovies = () =>
  omdbApi.get("/", {
    params: {
      s: "avengers",
      type: "movie",
    },
  });

// 🔍 For search results
export const searchMovies = (query) =>
  omdbApi.get("/", {
    params: {
      s: query,
      type: "movie",
    },
  });

// 📖 Full details
export const getMovieDetails = (imdbId) =>
  omdbApi.get("/", {
    params: {
      i: imdbId,
      plot: "full",
    },
  });

// 🔥 Trending
export const fetchTrendingMovies = () =>
  omdbApi.get("/", {
    params: {
      s: "avengers",
      type: "movie",
    },
  });

// 🎬 Popular
export const fetchPopularMovies = () =>
  omdbApi.get("/", {
    params: {
      s: "batman",
      type: "movie",
    },
  });

// 🆕 Latest
export const fetchLatestMovies = () =>
  omdbApi.get("/", {
    params: {
      s: "spiderman",
      type: "movie",
    },
  });

export default omdbApi;
