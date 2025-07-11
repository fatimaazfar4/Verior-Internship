import { useState, useEffect } from "react";

import {
  fetchTrendingMovies,
  fetchPopularMovies,
  fetchLatestMovies,
} from "../api/tmdbApi";
import MovieList from "../components/movie/MovieList";
import Spinner from "../components/common/Spinner";

function Home() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [latest, setLatest] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllMovies() {
      try {
        setLoading(true);

        const [trendingRes, popularRes, latestRes] = await Promise.all([
          fetchTrendingMovies(),
          fetchPopularMovies(),
          fetchLatestMovies(),
        ]);

        setTrending(trendingRes.data.results);
        setPopular(popularRes.data.results);
        setLatest(latestRes.data.results);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    fetchAllMovies();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="px-4 py-6 bg-[#2b0a0a] text-white space-y-12">
      <MovieList title="Trending 🔥" movies={trending} />
      <MovieList title="Popular 🎬" movies={popular} />
      <MovieList title="Latest 🆕" movies={latest} />
    </div>
  );
}

export default Home;
