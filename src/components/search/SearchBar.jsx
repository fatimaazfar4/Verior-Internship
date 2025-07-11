import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { FaSearch } from "react-icons/fa";

const genres = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
  { id: 10749, name: "Romance" },
  { id: 16, name: "Animation" },
  { id: 53, name: "Thriller" },
];

function SearchBar() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams();
    if (debouncedQuery) params.set("q", debouncedQuery);
    if (genre) params.set("genre", genre);

    if (debouncedQuery || genre) {
      navigate(`/search?${params.toString()}`);
    }
  }, [debouncedQuery, genre, navigate]);

  return (
    <div className="flex items-center gap-2 px-4">
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="rounded-full px-3 py-2 text-sm bg-white dark:bg-gray-800 text-black dark:text-white shadow-md"
      >
        <option value="">Genre</option>
        {genres.map((g) => (
          <option key={g.id} value={g.id}>
            {g.name}
          </option>
        ))}
      </select>

      <div className="relative w-full max-w-xs">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movie, show or anything"
          className="w-full px-4 py-3 pl-10 rounded-full bg-white dark:bg-gray-800 shadow-md text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
}

export default SearchBar;
