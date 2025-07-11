import MovieCard from "./MovieCard";

function MovieSection({ title, movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold mb-4 px-2">{title}</h2>
      <div className="flex overflow-x-auto gap-4 px-2 scrollbar-thin scrollbar-thumb-gray-600">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="flex-shrink-0">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieSection;
