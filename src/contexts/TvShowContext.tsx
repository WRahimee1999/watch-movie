import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Movie } from "../components/MovieCard";

interface TvShowContextType {
  favorites: Movie[];
  addFavorites: (movie: Movie) => void;
  removeFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const TvShowContext = createContext<TvShowContextType | null>(null);

export const useTvShowContext = () => {
  const context = useContext(TvShowContext);
  if (!context) {
    throw new Error("useTvShowContext must be used within a TvShowProvider");
  }
  return context;
};

interface TvShowProviderProps {
  children: ReactNode;
}

export const TvShowProvider = ({ children }: TvShowProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storeFavorites = localStorage.getItem("favorites");
    if (storeFavorites) setFavorites(JSON.parse(storeFavorites));
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removeFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isFavorite = (id: number) => {
    return favorites.some((movie) => movie.id === id);
  };

  const value: TvShowContextType = {
    favorites,
    addFavorites,
    removeFavorites,
    isFavorite,
  };

  return (
    <TvShowContext.Provider value={value}>{children}</TvShowContext.Provider>
  );
};
