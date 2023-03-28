import {CoordsDTO, ForecastModel} from '../models';
import client from './client';

export const getForecast = async ({latitude, longitude}: CoordsDTO) => {
  const params = {
    appid: 'ede1bb2769d93b40529964b7aac02ee9',
    lat: latitude,
    log: longitude,
    lang: 'pt_br',
    units: 'metric',
  };

  // Units - default: kelvin, metric: Celsius, imperial: Fahrenheit
  // units: standard, metric and imperial

  const forecastData = await client.get<ForecastModel>('forecast', {params});

  return forecastData.data;
};
