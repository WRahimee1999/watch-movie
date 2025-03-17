import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";
import { MouseEvent } from "react";
import { Link } from "react-router-dom";
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}
export interface MovieCardProps {
  movie: Movie;
}
export default function MovieCard({ movie }: MovieCardProps) {
  const { isFavorite, addFavorites, removeFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const onFovorite = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (favorite) removeFavorites(movie.id);
    else addFavorites(movie);
  };
  return (
    <div className="movie-card">
      <Link to={`/movie-details/${movie.id}`}>
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
