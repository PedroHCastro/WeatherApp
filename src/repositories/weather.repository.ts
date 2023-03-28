import {CoordsDTO, RawWeatherModel} from '../models';
import client from './client';

export const getWeather = async ({latitude, longitude}: CoordsDTO) => {
  const params = {
    appid: 'ede1bb2769d93b40529964b7aac02ee9',
    lat: latitude,
    log: longitude,
    lang: 'pt_br',
    units: 'metric',
  };

  // Units - default: kelvin, metric: Celsius, imperial: Fahrenheit
  // units: standard, metric and imperial

  const weatherData = await client.get<RawWeatherModel>('weather', {params});

  return weatherData.data;
};
