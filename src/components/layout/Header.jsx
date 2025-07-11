import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { FaSun, FaMoon, FaFilm } from 'react-icons/fa';
import SearchBar from '../search/SearchBar';

function Header() {
  const { isDarkMode, toggleTheme } = useTheme();

  const activeLinkStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  return (
    <header className="bg-[#1e0606] dark:bg-gray-800 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex flex-wrap md:flex-nowrap justify-between items-center gap-4">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-yellow-400 dark:text-yellow-300"
        >
          <FaFilm />
          <span>CineScope</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 font-medium text-sm md:text-base">
          <NavLink to="/" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Home</NavLink>
          <NavLink to="/movies" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>Movies</NavLink>
          <NavLink to="/tv" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>TV Shows</NavLink>
          <NavLink to="/people" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>People</NavLink>
          <NavLink to="/favorites" style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}>My List</NavLink>
        </div>

        {/* Search + Theme Toggle + PFP */}
        <div className="flex items-center gap-4 ml-auto">
          <SearchBar />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Profile Picture */}
          <img
            src={`https://i.pravatar.cc/40?img=${Math.floor(Math.random() * 70) + 1}`}
            alt="Profile"
            className="w-9 h-9 rounded-full border-2 border-yellow-400 object-cover cursor-pointer"
            title="Profile"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
