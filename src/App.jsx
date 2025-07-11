import { Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Favorites from './pages/Favorites';
import SearchResults from './pages/SearchResults';
import NotFound from './pages/NotFound';
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import People from "./pages/People";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="movie/:movieId" element={<MovieDetails />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TVShows />} />
        <Route path="/people" element={<People />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
