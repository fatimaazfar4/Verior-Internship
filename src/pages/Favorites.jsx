import { useState, useEffect } from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { getMovieDetails } from '../api/omdbApi'; // 
import MovieList from '../components/movie/MovieList';
import Spinner from '../components/common/Spinner';

function Favorites() {
  const { favorites } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFavoriteMovies() {
      setLoading(true);
      const moviePromises = favorites.map(id => getMovieDetails(id)); 
      const responses = await Promise.all(moviePromises);
      const movies = responses
        .filter(res => res.data.Response === 'True')
        .map(res => res.data);
      setFavoriteMovies(movies);
      setLoading(false);
    }

    if (favorites.length > 0) {
      fetchFavoriteMovies();
    } else {
      setLoading(false);
      setFavoriteMovies([]);
    }
  }, [favorites]);

  if (loading) return <Spinner />;

  return (
    <div>
      {favoriteMovies.length > 0 ? (
        <MovieList movies={favoriteMovies} title="My Favorites" />
      ) : (
        <div className="text-center py-10">
          <h2 className="text-2xl font-bold mb-4">Your List is Empty</h2>
          <p className="text-gray-600 dark:text-gray-400">Add some movies to see them here!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;