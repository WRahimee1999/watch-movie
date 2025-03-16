import React from "react";

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
}

export interface Movie {
  title: string;
  tagline: string;
  overview: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
  poster_path: string;
  backdrop_path: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
}

interface MovieCardProps {
  movie?: Movie;
}

const MovieDetailCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="relative pt-1 w-full mx-auto text-white bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      {/* Backdrop Image */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold">{movie?.title}</h1>
        </div>
      </div>
      {/* Movie Details */}
      <div className="p-6 pt-2 flex flex-col md:flex-row gap-6">
        {/* Poster Image */}
        <img
          className="w-full md:w-48 h-72 object-cover rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />

        {/* Movie Info */}
        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-3xl font-semibold">{movie?.title}</h2>
            <p className="text-sm text-gray-400">{movie?.tagline}</p>
            <p className="mt-4 text-gray-300">{movie?.overview}</p>

            {/* Genres */}
            <div className="mt-4 flex flex-wrap gap-2">
              {movie?.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full hover:bg-indigo-700 transition"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Release Info */}
            <p className="mt-4 text-gray-400">
              📅 Release Date: <strong>{movie?.release_date}</strong>
            </p>
            <p className="text-gray-400">⏳ Runtime: {movie?.runtime} min</p>

            {/* Ratings */}
            <p className="mt-2 text-yellow-400">
              ⭐ {movie?.vote_average.toFixed(1)} ({movie?.vote_count} votes)
            </p>
          </div>

          {/* IMDb Link */}
          <a
            href={`https://www.imdb.com/title/${movie?.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded transition"
          >
            🎬 View on IMDb
          </a>
        </div>
      </div>

      {/* Production Companies */}
      <div className="p-4 bg-gray-800 mt-4">
        <h3 className="text-lg font-semibold">Produced By</h3>
        <div className="flex flex-wrap mt-2 gap-4">
          {movie?.production_companies.map((company) => (
            <div key={company.id} className="flex items-center">
              {company.logo_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                  className="h-12 mr-2"
                />
              ) : (
                <span className="text-gray-400 text-sm">{company.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailCard;
