import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMoviesByQuery, discoverMoviesByGenre } from "../api/tmdbApi";
import MovieList from "../components/movie/MovieList";
import Spinner from "../components/common/Spinner";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const genre = searchParams.get("genre");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchResults() {
      try {
        setLoading(true);
        setError(null);

        let response;
        if (genre) {
          response = await discoverMoviesByGenre(genre);
        } else if (query) {
          response = await searchMoviesByQuery(query);
        }

        setResults(response?.data?.results || []);
      } catch (err) {
        setError("Failed to fetch search results.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (query || genre) fetchResults();
  }, [query, genre]);

  if (loading) return <Spinner />;

  return (
    <div className="px-4 py-6 text-white">
      {results.length > 0 ? (
        <MovieList
          movies={results}
          title={
            genre
              ? `Genre Results`
              : `Search Results for "${query}"`
          }
        />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold">
            {error ? error : "No results found."}
          </h2>
        </div>
      )}
    </div>
  );
}

export default SearchResults;
