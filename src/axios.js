import axios from 'axios';
import { TMDB } from './constants';

const instance = axios.create({
  baseURL: TMDB.BASE_URL,
});

export default instance;
