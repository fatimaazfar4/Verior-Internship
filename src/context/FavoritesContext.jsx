import { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const addFavorite = (movieId) => {
    setFavorites((prev) => [...prev, movieId]);
  };

  const removeFavorite = (movieId) => {
    setFavorites((prev) => prev.filter((id) => id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.includes(movieId);
  };

  const value = { favorites, addFavorite, removeFavorite, isFavorite };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);