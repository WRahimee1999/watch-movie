import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";
import { Movie } from "../components/MovieCard";

export default function Favorites() {
  const { favorites } = useMovieContext();
  const movies: Movie[] = favorites ?? []; // Ensures movies is always an array

  return movies.length > 0 ? (
    <div className="favorites">
      <h3>Your Favorites</h3>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="favorites-empty">
      <h2>No Favorite Movies Yet!</h2>
    </div>
  );
}
