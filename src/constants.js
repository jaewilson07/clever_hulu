export const TMDB = {
  KEY: '3b182bfacbd39c8b0c019915cced471e',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p/original/',
};

TMDB.GENRES = [
  {
    category: 'Trending',
    url: `/trending/all/week?api_key=${TMDB.KEY}&language=en-us`,
  },
  {
    category: 'Top Rated',
    url: `/movie/top_rated?api_key=${TMDB.KEY}&language=en-us`,
  },
  {
    category: 'Action',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=28`,
  },
  {
    category: 'Comedy',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=35`,
  },
  {
    category: 'Horror',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=27`,
  },
  {
    category: 'Romance',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=10749`,
  },
  {
    id: 878,
    category: 'Science Fiction',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=878`,
  },
  {
    id: 10770,
    category: 'TV Movie',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=10770`,
  },
  {
    id: 53,
    category: 'Thriller',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=53`,
  },
  {
    id: 10752,
    category: 'War',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=10752`,
  },
  {
    id: 37,
    category: 'Western',
    url: `discover/movie?api_key=${TMDB.KEY}&with_genres=37`,
  },
];
