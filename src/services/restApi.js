import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = 'cbf7b4582ce31cf384dd80d27cc60e4c';

const fetchTrend = () => {
  return axios.get(`/trending/all/day?api_key=${key}`);
};

const fetchMovie = movieId => {
  return axios.get(`/movie/${movieId}?api_key=${key}&language=en-US`);
};

const fetchSearch = query => {
  return axios.get(
    `/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=true`,
  );
};

const fetchCast = movieId => {
  return axios.get(`/movie/${movieId}/credits?api_key=${key}&language=en-US`);
};

const fetchReviews = movieId => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`,
  );
};

export default { fetchTrend, fetchMovie, fetchSearch, fetchCast, fetchReviews };
