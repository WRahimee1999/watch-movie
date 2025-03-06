import { useState } from "react";
import MovieCard, { Movie } from "../components/MovieCard";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const movies: Movie[] = [
    { id: 1, title: "Daban1", path: "url", release_date: Date.now.toString() },
    { id: 2, title: "Daban2", path: "url", release_date: Date.now.toString() },
    { id: 3, title: "Daban3", path: "url", release_date: Date.now.toString() },
    { id: 4, title: "Daban4", path: "url", release_date: Date.now.toString() },
  ];
  const handleSearch = () => {
    setSearchQuery("searching...");
  };
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
