import axios from "axios";

const TMDB_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_API = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: TMDB_KEY,
    language: "en-US",
  },
});

// 🎬 Trending Movies
export const fetchTrendingMovies = () => TMDB_API.get("/trending/movie/week");

// 📊 ✅ Popular Movies (this was missing!)
export const fetchPopularMovies = () =>
  TMDB_API.get("/movie/popular", {
    params: { page: 1 },
  });

// 📺 Trending TV Shows
export const fetchTrendingTVShows = () => TMDB_API.get("/trending/tv/week");

// 🧑 Popular People
export const fetchPopularPeople = () => TMDB_API.get("/person/popular");

// 🔍 Individual movie, tv, or person by ID
export const fetchMovieDetails = (id) => TMDB_API.get(`/movie/${id}`);
export const fetchTVDetails = (id) => TMDB_API.get(`/tv/${id}`);
export const fetchPersonDetails = (id) => TMDB_API.get(`/person/${id}`);

// 🆕 Now Playing
export const fetchLatestMovies = () =>
  TMDB_API.get("/movie/now_playing", {
    params: { page: 1 },
  });

  // 🔍 Search by query
export const searchMoviesByQuery = (query) =>
  TMDB_API.get("/search/movie", {
    params: { query },
  });

// 🔍 Discover by genre
export const discoverMoviesByGenre = (genreId) =>
  TMDB_API.get("/discover/movie", {
    params: { with_genres: genreId },
  });

export const fetchMovieVideos = (id) =>
  TMDB_API.get(`/movie/${id}/videos`);


export default TMDB_API;
