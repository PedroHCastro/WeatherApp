import {APP_ID_WEATHER} from 'react-native-dotenv';
import {CoordsDTO, RawForecastModel} from '../models';
import client from './client';

export const getForecast = async ({latitude, longitude}: CoordsDTO) => {
  const params = {
    appid: APP_ID_WEATHER,
    lat: latitude,
    lon: longitude,
    lang: 'pt_br',
    units: 'metric',
  };

  // Units - default: kelvin, metric: Celsius, imperial: Fahrenheit
  // units: standard, metric and imperial

  const forecastData = await client.get<RawForecastModel>('forecast', {
    params,
  });
  return forecastData.data;
};
