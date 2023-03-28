export type RawWeatherModel = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type WeatherModel = Omit<RawWeatherModel, 'main' | 'wind' | 'sys'> & {
  main: {
    temp: string;
    feels_like: string;
    temp_min: string;
    temp_max: string;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: string;
    sunset: string;
  };
  wind: {
    speed: string;
    deg: number;
    gust: number;
  };
};

export type CoordsDTO = {
  latitude: number;
  longitude: number;
};
