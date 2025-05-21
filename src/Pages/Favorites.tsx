import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";
import { Movie } from "../components/MovieCard";
import { useTvShowContext } from "../contexts/TvShowContext";
import TvCard from "../components/TvCard";

export default function Favorites() {
  const { favorites } = useMovieContext();
  const { favorites: tvShowFavorites } = useTvShowContext();
  const movies: Movie[] = favorites ?? []; // Ensures movies is always an array
  const tvShows: Movie[] = tvShowFavorites ?? [];

  return movies.length || tvShows.length > 0 ? (
    <div className="favorites">
      <h3>Your Favorites</h3>
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}

        {tvShows.map((tvShow) => (
          <TvCard movie={tvShow} key={tvShow.id} />
        ))}
      </div>
    </div>
  ) : (
    <div className="favorites-empty">
      <h2>No Favorite Movies Or TvShows Yet!</h2>
    </div>
  );
}
