import { useEffect, useState } from "react";
import { getTvShows, searchTvShows } from "../Services/api";
import { Movie } from "../components/MovieCard";
import { FaSearch } from "react-icons/fa";
import TvCard from "../components/TvCard";
import SkeletonLoader from "../components/Loader/SkeletonLoader";
export default function TvShows() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [tvShows, setTvShows] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const loadTvShows = async () => {
      try {
        const tvShows = await getTvShows();
        setTvShows(tvShows);
      } catch (err) {
        setError("Failed to load TV shows, Error: " + err);
      } finally {
        setLoading(false);
      }
    };
    loadTvShows();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);

    try {
      const searchResult = await searchTvShows(searchQuery);
      setTvShows(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to search for movies");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          <FaSearch />
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <SkeletonLoader />
      ) : (
        <div className="movies-grid">
          {tvShows?.map((show) => (
            <TvCard movie={show} key={show.id} />
          ))}
        </div>
      )}
    </div>
  );
}
