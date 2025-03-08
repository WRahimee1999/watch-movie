import { createContext, useContext } from "react";

const MovieContext = createContext<null | string >(null);

export const useMovieContext = () => useContext(MovieContext);