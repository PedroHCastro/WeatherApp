import {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {getWeather} from '../../repositories';
import {CoordsDTO, WeatherModel} from '../../common/models';

const useWeatherViewModel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataWeather, setDataWeather] = useState<WeatherModel>();
  const [isMorning, setIsMorning] = useState(false);

  const getGeolocation = (callback: (coords: CoordsDTO) => void) => {
    Geolocation.getCurrentPosition(info => {
      const {latitude, longitude} = info.coords;

      callback({latitude, longitude});
    });
  };

  function formatTemperature(
    temp: number,
    unit: 'fahrenheit' | 'kelvin' | 'celsius' = 'celsius',
  ): string {
    // kelvin celsius, fahrenheit
    const postfix = {
      fahrenheit: '°F',
      kelvin: 'K',
      celsius: 'ºC',
    };

    return `${temp.toFixed(1).split('.')[0]} ${postfix[unit]}`;
  }

  function formatTimestampToTime(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = '0' + date.getMinutes();

    return `${hours}:${minutes.substring(-2)}`;
  }

  function transformMsTOkh(speed: number) {
    const result = speed * 3.6;
    return `${result.toFixed(1).replace('.', ',')} km/h`;
  }

  const fetchWeather = async ({latitude, longitude}: CoordsDTO) => {
    console.log({latitude, longitude});
    const mock = {
      coord: {
        lon: -44.9634,
        lat: -22.5765,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'nuvens dispersas',
          icon: '02n',
        },
      ],
      base: 'stations',
      main: {
        temp: formatTemperature(25.51),
        feels_like: formatTemperature(26.39),
        temp_min: formatTemperature(25.51),
        temp_max: formatTemperature(25.51),
        pressure: 1015,
        humidity: 87,
        sea_level: 1015,
        grnd_level: 956,
      },
      visibility: 10000,
      wind: {
        speed: transformMsTOkh(0.43),
        deg: 334,
        gust: 1.1,
      },
      clouds: {
        all: 46,
      },
      dt: 1679775228,
      sys: {
        country: 'BR',
        sunrise: formatTimestampToTime(1679735108),
        sunset: formatTimestampToTime(1679778392),
      },
      timezone: -10800,
      id: 3465090,
      name: 'Cruzeiro',
      cod: 200,
    };

    setDataWeather(mock);
    // console.log('fetchWeather---> step 1', {latitude, longitude});
    // try {
    //   setIsLoading(true);
    //   const response = await getWeather({latitude, longitude});
    //   console.log(response);
    //   setDataWeather(response);
    // } catch (error) {
    //   console.log('error---> ', error);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const fetchData = () => {
    const callbackFetchData = (coords: CoordsDTO) => {
      fetchWeather(coords);
    };
    getGeolocation(callbackFetchData);
  };

  // useEffect(() => {
  //   fetchWeather();
  //   console.log('aaaqui');
  // }, [latitude, longitude]);

  return {
    isMorning,
    dataWeather,
    isLoading,
    setIsLoading,
    fetchData,
  };
};

export default useWeatherViewModel;
