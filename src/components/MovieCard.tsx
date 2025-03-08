import "../css/MovieCard.css";
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
  const onFovorite = () => {
    alert("Favorites");
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div className="movie-overlay">
          <button className="favorite-btn" onClick={onFovorite}>
            ❤
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}
