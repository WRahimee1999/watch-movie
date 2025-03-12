import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { Movie } from "../components/MovieCard";

interface MovieContextType {
    favorites: Movie[];
    addFavorites: (movie: Movie) => void;
    removeFavorites: (id: number) => void;
    isFavorite: (id: number) => boolean;
  }

const MovieContext = createContext<MovieContextType | null>(null);

// export const useMovieContext = () => useContext(MovieContext);
export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) {
      throw new Error("useMovieContext must be used within a MovieProvider");
    }
    return context;
  };

interface MovieProviderProps {
  children: ReactNode;
}
export const MovieProvider = ({ children }: MovieProviderProps) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storeFavorites = localStorage.getItem("favorites");
    if (storeFavorites) setFavorites(JSON.parse(storeFavorites));
  }, []);
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorites = (movie: Movie) => {
    setFavorites(prev => [...prev, movie]);
  };

  const removeFavorites = (id: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== id));
  }

  const isFavorite = (id: number) => {
    return favorites.some((movie) => movie.id === id);
  }


  const value: MovieContextType = {
    favorites,
    addFavorites,
    removeFavorites,
    isFavorite
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
