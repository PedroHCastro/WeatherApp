import axios from 'axios';
import {BASE_URL_WEATHER} from 'react-native-dotenv';

const client = axios.create({
  baseURL: BASE_URL_WEATHER,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default client;
