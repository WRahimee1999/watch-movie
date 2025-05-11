import React from 'react';

interface Genre {
  id: number;
  name: string;
}

interface Network {
  id: number;
  name: string;
  logo_path: string | null;
}

interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
}

export interface TVShow {
  name: string;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  genres: Genre[];
  first_air_date: string;
  number_of_seasons: number;
  number_of_episodes: number;
  vote_average: number;
  vote_count: number;
  homepage: string;
  production_companies: ProductionCompany[];
  networks: Network[];
  tagline?: string;
}

interface TVShowCardProps {
  tvShow?: TVShow;
}

const TVShowDetailCard: React.FC<TVShowCardProps> = ({ tvShow }) => {
  return (
    <div className="relative pt-1 w-full mx-auto text-white bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      {/* Backdrop */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${tvShow?.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold">{tvShow?.name}</h1>
        </div>
      </div>

      <div className="p-6 pt-2 flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <img
          className="w-full md:w-48 h-72 object-cover rounded-lg shadow-lg"
          src={`https://image.tmdb.org/t/p/w500${tvShow?.poster_path}`}
          alt={tvShow?.name}
        />

        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-3xl font-semibold">{tvShow?.name}</h2>
            {tvShow?.tagline && <p className="text-sm text-gray-400">{tvShow?.tagline}</p>}
            <p className="mt-4 text-gray-300">{tvShow?.overview}</p>

            {/* Genres */}
            <div className="mt-4 flex flex-wrap gap-2">
              {tvShow?.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full hover:bg-purple-700 transition"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Details */}
            <p className="mt-4 text-gray-400">
              📅 First Aired: <strong>{tvShow?.first_air_date}</strong>
            </p>
            <p className="text-gray-400">
              📺 Seasons: {tvShow?.number_of_seasons} | Episodes: {tvShow?.number_of_episodes}
            </p>
            <p className="mt-2 text-yellow-400">
              ⭐ {tvShow?.vote_average.toFixed(1)} ({tvShow?.vote_count} votes)
            </p>
          </div>

          {/* Homepage */}
          {tvShow?.homepage && (
            <a
              href={tvShow.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-4 rounded transition"
            >
              🌐 Visit Official Website
            </a>
          )}
        </div>
      </div>

      {/* Networks */}
      <div className="p-4 bg-gray-800 mt-4">
        <h3 className="text-lg font-semibold">Broadcasted On</h3>
        <div className="flex flex-wrap mt-2 gap-4">
          {tvShow?.networks.map((network) => (
            <div key={network.id} className="flex items-center">
              {network.logo_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200${network.logo_path}`}
                  alt={network.name}
                  className="h-12 mr-2"
                />
              ) : (
                <span className="text-gray-400 text-sm">{network.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Production Companies */}
      <div className="p-4 bg-gray-800 mt-4">
        <h3 className="text-lg font-semibold">Produced By</h3>
        <div className="flex flex-wrap mt-2 gap-4">
          {tvShow?.production_companies.map((company) => (
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

export default TVShowDetailCard;
