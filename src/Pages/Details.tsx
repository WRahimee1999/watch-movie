import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails, getTvShowDetails } from "../Services/api";
import MovieDetailCard from "../components/DetailCard";
import "../css/Details.css";
import { Movie } from "../components/DetailCard";
import TVShowDetailCard, { TVShow } from "../components/TvShowDetailCard";

interface Props {
  type: "movie" | "tv";
}
export default function MovieDetails({ type }: Props) {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie>();
  const [tvShow, setTvShow] = useState<TVShow>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const loadMovieDetails = async (id: string) => {
      try {
        setLoading(true);
          if (type === "movie") {
            setMovie(await getMovieDetails(id));
          } else {
            setTvShow(await getTvShowDetails(id));
          }
      } catch (err) {
        console.error("Failed to fetch movie details:", err);
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    loadMovieDetails(id);
  }, [id]);

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      {type === "movie" ? (<MovieDetailCard movie={movie} />) : (<TVShowDetailCard tvShow={tvShow} />)}
    </div>
  );
}
