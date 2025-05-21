import "../css/MovieCard.css";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import { MovieCardProps } from "./MovieCard";
import { useTvShowContext } from "../contexts/TvShowContext";
export default function TvCard({ movie }: MovieCardProps) {
  const { isFavorite, addFavorites, removeFavorites } = useTvShowContext();
  const favorite = isFavorite(movie.id);
  const onFovorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (favorite) removeFavorites(movie.id);
    else addFavorites(movie);
  };
  return (
    <div className="movie-card">
      <Link to={`/tvShow-details/${movie.id}`}>
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={onFovorite}
            >
              ❤
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date?.split("-")[0]}</p>
        </div>
      </Link>
    </div>
  );
}
