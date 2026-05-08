import axios from 'axios';

const API_KEY = '9813ce01a72ca1bd2ae25f091898b1c7';

export const getPopularMovies = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  );

  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`,
  );

  return response.data.results;
};