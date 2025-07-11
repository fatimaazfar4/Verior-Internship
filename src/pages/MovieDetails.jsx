import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchMovieDetails, fetchMovieVideos } from '../api/tmdbApi';
import { useFavorites } from '../context/FavoritesContext';
import { PLACEHOLDER_IMAGE } from '../utils/constants';
import { FaStar, FaRegHeart, FaHeart, FaLink } from 'react-icons/fa';
import Spinner from '../components/common/Spinner';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const [movieRes, videoRes] = await Promise.all([
          fetchMovieDetails(movieId),
          fetchMovieVideos(movieId),
        ]);

        setMovie(movieRes.data);

        const trailer = videoRes.data.results.find(
          (vid) => vid.type === "Trailer" && vid.site === "YouTube"
        );

        setTrailerKey(trailer?.key || null);
        setError(null);
      } catch (err) {
        setError('Failed to fetch movie details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [movieId]);

  if (loading) return <Spinner />;
  if (error) return <p className="text-center text-red-500 py-10 text-xl">{error}</p>;
  if (!movie) return null;

  const isFav = isFavorite(movie.id); // Note: movie.id for TMDB
  const handleFavoriteClick = () => {
    if (isFav) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie.id);
    }
  };

  const posterPath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : PLACEHOLDER_IMAGE;

  return (
    <div className="flex flex-col md:flex-row gap-8 py-12">
      {/* Poster */}
      <div className="md:w-1/3 flex-shrink-0">
        <img
          src={posterPath}
          alt={movie.title}
          className="rounded-lg shadow-2xl w-full"
        />
      </div>

      {/* Details */}
      <div className="md:w-2/3">
        <h1 className="text-4xl font-bold mb-2">
          {movie.title} ({movie.release_date?.slice(0, 4)})
        </h1>
        <p className="italic text-gray-500 dark:text-gray-400 mb-4">
          {movie.genres?.map((g) => g.name).join(', ')}
        </p>

        <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mb-4">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" /> {movie.vote_average} / 10
          </span>
          <span>|</span>
          <span>{movie.runtime} min</span>
          <span>|</span>
          <span>{movie.status}</span>
          <span>|</span>
          <span>{movie.release_date}</span>
        </div>

        {/* Overview */}
        <h2 className="text-2xl font-semibold mb-2 mt-6">Overview</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">{movie.overview}</p>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8 flex-wrap">
          <a
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition-colors"
          >
            <FaLink /> View on TMDB
          </a>
          <button
            onClick={handleFavoriteClick}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors"
          >
            {isFav ? <FaHeart /> : <FaRegHeart />}
            {isFav ? 'Favorited' : 'Add to Favorites'}
          </button>
        </div>

        {/* Trailer */}
        {trailerKey && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4">Trailer</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title="Movie Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
