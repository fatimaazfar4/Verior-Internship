import { Link } from "react-router-dom";
import { PLACEHOLDER_IMAGE } from "../../utils/constants";

function MovieCard({ movie }) {
  const IMG_BASE = "https://image.tmdb.org/t/p/w500";
  const posterPath = movie.poster_path
    ? `${IMG_BASE}${movie.poster_path}`
    : PLACEHOLDER_IMAGE;

  return (
    <Link to={`/movie/${movie.id}`} className="block group">
      <div className="max-w-[160px] overflow-hidden rounded-lg shadow-md bg-gray-50 dark:bg-gray-800 transition-transform duration-300 transform group-hover:scale-105">
        <img
          src={posterPath}
          alt={movie.title}
          className="w-full h-[240px] object-cover"
        />
        <div className="p-2">
          <h3 className="text-sm font-semibold truncate group-hover:text-yellow-400">
            {movie.title}
          </h3>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            {movie.release_date?.slice(0, 4) || "N/A"}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
