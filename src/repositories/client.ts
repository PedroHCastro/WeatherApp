import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
});

export default client;
