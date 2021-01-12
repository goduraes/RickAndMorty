// https://rickandmortyapi.com/api/

// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export default api;
