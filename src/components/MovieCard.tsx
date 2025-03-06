export interface Movie {
    id: number;
    title:string;
    path:string;
    release_date:string;
}
export interface MovieCardProps {
    movie:Movie;
}
export default function MovieCard({movie}: MovieCardProps) {
    const onFovorite = () => {
        alert('Favorites');
    }
    return (
        <div className="movie-card">
            <img width={300} height={300} src={movie.path} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFovorite}>
                    ❤
                </button>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}