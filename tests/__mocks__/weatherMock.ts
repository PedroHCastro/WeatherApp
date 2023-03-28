import {WeatherModel} from '../../src/models';

const weatherModel: WeatherModel = {
  coord: {
    lon: -44.9634,
    lat: -22.5765,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'nuvens dispersas',
      icon: '02d',
    },
  ],
  rain: {
    '1h': 1,
  },
  base: 'stations',
  main: {
    temp: '25ºC',
    feels_like: '26ºC',
    temp_min: '25ºC',
    temp_max: '25ºC',
    pressure: 1015,
    humidity: 87,
    sea_level: 1015,
    grnd_level: 956,
  },
  visibility: 10000,
  wind: {
    speed: '1,5 km/h',
    deg: 334,
    gust: 1.1,
  },
  clouds: {
    all: 46,
  },
  dt: 1679775228,
  sys: {
    type: 1,
    id: 1,
    country: 'BR',
    sunrise: '06:00',
    sunset: '18:00',
  },
  timezone: -10800,
  id: 3465090,
  name: 'Cruzeiro',
  cod: 200,
};

export default weatherModel;
