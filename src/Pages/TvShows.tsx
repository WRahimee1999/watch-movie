import { useEffect, useState } from "react";
import { getTvShows } from "../Services/api";
import { Movie } from "../components/MovieCard";
import MovieCard from "../components/MovieCard";
export default function TvShows() {
  const [tvShows, setTvShows] = useState<Movie[]>([]);
  useEffect(() => {
    const loadTvShows = async () => {
      try {
        const tvShows = await getTvShows();
        setTvShows(tvShows);
      } catch (err) {
        console.error("Failed to load TV shows" + err);
      }
    };
    loadTvShows();
  }, []);
  return (
    <div>
      <div className="movies-grid">
        {tvShows?.map((show) => (
          <MovieCard movie={show} key={show.id} />
        ))}
      </div>
    </div>
  );
}
