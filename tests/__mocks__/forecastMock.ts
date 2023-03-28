import {ForecastModel, ForecastListItemModel} from '../../src/models';

const listItem: ForecastListItemModel = {
  dt: 'Quin - 16:00',
  main: {
    temp: '25ºC',
    feels_like: '26ºC',
    temp_min: '25ºC',
    temp_max: '25ºC',
    pressure: 1015,
    sea_level: 1015,
    grnd_level: 956,
    humidity: 87,
    temp_kf: 111,
  },
  weather: [
    {
      id: 802,
      main: 'Clouds',
      description: 'nuvens dispersas',
      icon: '02d',
    },
  ],
  clouds: {
    all: 46,
  },
  wind: {
    speed: '1,5 km/h',
    deg: 334,
    gust: 1.1,
  },
  visibility: 10000,
  pop: 1,
  sys: {
    pod: '1',
  },
  dt_txt: '2023_01_01',
};

const forecastModel: ForecastModel = {
  cod: '200',
  message: 123,
  cnt: 123,
  list: [listItem],
  city: {
    id: 3465090,
    name: 'Cruzeiro',
    coord: {
      lon: -44.9634,
      lat: -22.5765,
    },
    country: 'BR',
    population: 100,
    sunrise: 600,
    sunset: 1800,
    timezone: -10800,
  },
};

export default forecastModel;
