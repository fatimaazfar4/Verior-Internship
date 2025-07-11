import { useEffect, useState } from "react";
import { fetchTrendingTVShows } from "../api/tmdbApi";
import Spinner from "../components/common/Spinner";
import MovieList from "../components/movie/MovieList";

function TVShows() {
  const [tvShows, setTVShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTV() {
      try {
        const res = await fetchTrendingTVShows();
        setTVShows(res.data.results);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadTV();
  }, []);

  if (loading) return <Spinner />;
  return (
    <div className="px-4 py-6 bg-[#2b0a0a] text-white">
      <MovieList title="Trending TV Shows 📺" movies={tvShows} />
    </div>
  );
}

export default TVShows;
