import { BASE_URL,API_KEY } from "../config";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};

export const searchTvShows = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  )
  const data = await response.json();
  return data.results;
}

export const getMovieDetails = async (movie_id : string) => {
  const response = await fetch(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

export const getTvShowDetails = async (tv_id : string) => {
  const response = await fetch(`${BASE_URL}/tv/${tv_id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

export const getTvShows = async (page: number = 1) => {
  const response = await fetch(`${BASE_URL}/discover/tv?page=${page}&sort_by=popularity.desc&api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
}

// export const getPopularMovie = () => {
//     return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
//         .then((response) => response.json()
//         .then((data) => data.results)
//         .catch((error) => {
//             console.log(error);
//             return null;
//         }));
// }
