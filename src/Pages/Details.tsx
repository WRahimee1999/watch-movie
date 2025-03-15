import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Services/api";
import { Movie } from "../components/MovieCard";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!id) return;

    const loadMovieDetails = async (id: string) => {
      try {
        setLoading(loading);
        const movieData = await getMovieDetails(id);
        setMovie(movieData);
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    loadMovieDetails(id);
  }, [id]);
  return <div>Movie ID: {JSON.stringify(movie)}</div>;
}
