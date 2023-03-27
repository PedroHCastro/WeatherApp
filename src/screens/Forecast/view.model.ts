import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

import {getForecast} from '../../repositories';
import {
  CoordsDTO,
  ForecastModel,
  ForecastToGraphModel,
} from '../../common/models';

const useWeatherViewModel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rawDataForecast, setRawDataForecast] = useState<ForecastModel>();
  const [dataForecast, setDataForecast] = useState<ForecastModel>();
  const [dataForecastToGraph, setDataForecastToGraph] =
    useState<ForecastToGraphModel>();
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

  function formatTimestampToTime2(timestamp: number) {
    var days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

    const date = new Date(timestamp * 1000);

    const day = days[date.getDay()];
    const hours = '0' + date.getHours();
    const hoursFormated = hours.slice(-2);
    const minutes = '0' + date.getMinutes();
    const minutesFormated = minutes.slice(-2);

    return {day, hours: hoursFormated, minutes: minutesFormated};
  }

  const fetchForecast = async ({latitude, longitude}: CoordsDTO) => {
    console.log({latitude, longitude});
    const mock = {
      cod: '200',
      message: 0,
      cnt: 40,
      list: [
        {
          dt: 1679788800,
          main: {
            temp: 286.65,
            feels_like: 285.41,
            temp_min: 285.05,
            temp_max: 286.65,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 52,
            temp_kf: 1.6,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algumas nuvens',
              icon: '02d',
            },
          ],
          clouds: {
            all: 20,
          },
          wind: {
            speed: 7.76,
            deg: 299,
            gust: 8.43,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-26 00:00:00',
        },
        {
          dt: 1679799600,
          main: {
            temp: 285.13,
            feels_like: 283.9,
            temp_min: 282.09,
            temp_max: 285.13,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1020,
            humidity: 58,
            temp_kf: 3.04,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algumas nuvens',
              icon: '02n',
            },
          ],
          clouds: {
            all: 14,
          },
          wind: {
            speed: 8.56,
            deg: 308,
            gust: 11.18,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-26 03:00:00',
        },
        {
          dt: 1679810400,
          main: {
            temp: 282.95,
            feels_like: 279.87,
            temp_min: 281.1,
            temp_max: 282.95,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 59,
            temp_kf: 1.85,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 7,
          },
          wind: {
            speed: 6.87,
            deg: 313,
            gust: 10.58,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-26 06:00:00',
        },
        {
          dt: 1679821200,
          main: {
            temp: 279.99,
            feels_like: 276.54,
            temp_min: 279.99,
            temp_max: 279.99,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 62,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 0,
          },
          wind: {
            speed: 5.58,
            deg: 326,
            gust: 8.75,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-26 09:00:00',
        },
        {
          dt: 1679832000,
          main: {
            temp: 278.8,
            feels_like: 275.52,
            temp_min: 278.8,
            temp_max: 278.8,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 66,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 2,
          },
          wind: {
            speed: 4.55,
            deg: 341,
            gust: 6.84,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-26 12:00:00',
        },
        {
          dt: 1679842800,
          main: {
            temp: 278.13,
            feels_like: 276.19,
            temp_min: 278.13,
            temp_max: 278.13,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 1022,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algumas nuvens',
              icon: '02d',
            },
          ],
          clouds: {
            all: 21,
          },
          wind: {
            speed: 2.31,
            deg: 21,
            gust: 2.53,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-26 15:00:00',
        },
        {
          dt: 1679853600,
          main: {
            temp: 281.74,
            feels_like: 280.55,
            temp_min: 281.74,
            temp_max: 281.74,
            pressure: 1026,
            sea_level: 1026,
            grnd_level: 1023,
            humidity: 52,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'nuvens dispersas',
              icon: '03d',
            },
          ],
          clouds: {
            all: 29,
          },
          wind: {
            speed: 2.18,
            deg: 1,
            gust: 3.3,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-26 18:00:00',
        },
        {
          dt: 1679864400,
          main: {
            temp: 284.12,
            feels_like: 282.4,
            temp_min: 284.12,
            temp_max: 284.12,
            pressure: 1025,
            sea_level: 1025,
            grnd_level: 1022,
            humidity: 43,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'nuvens dispersas',
              icon: '03d',
            },
          ],
          clouds: {
            all: 28,
          },
          wind: {
            speed: 3.35,
            deg: 293,
            gust: 4.2,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-26 21:00:00',
        },
        {
          dt: 1679875200,
          main: {
            temp: 284.1,
            feels_like: 282.61,
            temp_min: 284.1,
            temp_max: 284.1,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1021,
            humidity: 52,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algumas nuvens',
              icon: '02d',
            },
          ],
          clouds: {
            all: 14,
          },
          wind: {
            speed: 6.37,
            deg: 284,
            gust: 6.47,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-27 00:00:00',
        },
        {
          dt: 1679886000,
          main: {
            temp: 282,
            feels_like: 279.32,
            temp_min: 282,
            temp_max: 282,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1021,
            humidity: 62,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 4.96,
            deg: 298,
            gust: 6.25,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-27 03:00:00',
        },
        {
          dt: 1679896800,
          main: {
            temp: 281.12,
            feels_like: 279.88,
            temp_min: 281.12,
            temp_max: 281.12,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 66,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 4,
          },
          wind: {
            speed: 2.11,
            deg: 302,
            gust: 2.86,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-27 06:00:00',
        },
        {
          dt: 1679907600,
          main: {
            temp: 280.56,
            feels_like: 280.56,
            temp_min: 280.56,
            temp_max: 280.56,
            pressure: 1024,
            sea_level: 1024,
            grnd_level: 1021,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 0.03,
            deg: 130,
            gust: 1.23,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-27 09:00:00',
        },
        {
          dt: 1679918400,
          main: {
            temp: 279.93,
            feels_like: 279.1,
            temp_min: 279.93,
            temp_max: 279.93,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1020,
            humidity: 74,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 6,
          },
          wind: {
            speed: 1.52,
            deg: 122,
            gust: 1.71,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-27 12:00:00',
        },
        {
          dt: 1679929200,
          main: {
            temp: 279.98,
            feels_like: 278.57,
            temp_min: 279.98,
            temp_max: 279.98,
            pressure: 1023,
            sea_level: 1023,
            grnd_level: 1020,
            humidity: 72,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nublado',
              icon: '04d',
            },
          ],
          clouds: {
            all: 51,
          },
          wind: {
            speed: 2.08,
            deg: 113,
            gust: 2.29,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-27 15:00:00',
        },
        {
          dt: 1679940000,
          main: {
            temp: 283.57,
            feels_like: 282,
            temp_min: 283.57,
            temp_max: 283.57,
            pressure: 1022,
            sea_level: 1022,
            grnd_level: 1019,
            humidity: 51,
            temp_kf: 0,
          },
          weather: [
            {
              id: 802,
              main: 'Clouds',
              description: 'nuvens dispersas',
              icon: '03d',
            },
          ],
          clouds: {
            all: 47,
          },
          wind: {
            speed: 1.87,
            deg: 147,
            gust: 2.86,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-27 18:00:00',
        },
        {
          dt: 1679950800,
          main: {
            temp: 285.25,
            feels_like: 283.77,
            temp_min: 285.25,
            temp_max: 285.25,
            pressure: 1020,
            sea_level: 1020,
            grnd_level: 1017,
            humidity: 48,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nublado',
              icon: '04d',
            },
          ],
          clouds: {
            all: 67,
          },
          wind: {
            speed: 4.28,
            deg: 240,
            gust: 5.12,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-27 21:00:00',
        },
        {
          dt: 1679961600,
          main: {
            temp: 284.65,
            feels_like: 283.24,
            temp_min: 284.65,
            temp_max: 284.65,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1016,
            humidity: 53,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nublado',
              icon: '04d',
            },
          ],
          clouds: {
            all: 82,
          },
          wind: {
            speed: 5.63,
            deg: 234,
            gust: 7.31,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-28 00:00:00',
        },
        {
          dt: 1679972400,
          main: {
            temp: 283.1,
            feels_like: 280.26,
            temp_min: 283.1,
            temp_max: 283.1,
            pressure: 1018,
            sea_level: 1018,
            grnd_level: 1015,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nublado',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 6.2,
            deg: 200,
            gust: 9.13,
          },
          visibility: 10000,
          pop: 0.13,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-28 03:00:00',
        },
        {
          dt: 1679983200,
          main: {
            temp: 283.08,
            feels_like: 279.77,
            temp_min: 283.08,
            temp_max: 283.08,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1014,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 804,
              main: 'Clouds',
              description: 'nublado',
              icon: '04n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7.83,
            deg: 174,
            gust: 12.57,
          },
          visibility: 10000,
          pop: 0.22,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-28 06:00:00',
        },
        {
          dt: 1679994000,
          main: {
            temp: 282.86,
            feels_like: 278.85,
            temp_min: 282.86,
            temp_max: 282.86,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1011,
            humidity: 78,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 10.63,
            deg: 170,
            gust: 16.39,
          },
          visibility: 10000,
          pop: 0.62,
          rain: {
            '3h': 2.13,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-28 09:00:00',
        },
        {
          dt: 1680004800,
          main: {
            temp: 282.75,
            feels_like: 278.75,
            temp_min: 282.75,
            temp_max: 282.75,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1008,
            humidity: 90,
            temp_kf: 0,
          },
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'chuva moderada',
              icon: '10n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 10.37,
            deg: 188,
            gust: 17.98,
          },
          visibility: 7233,
          pop: 1,
          rain: {
            '3h': 6.87,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-28 12:00:00',
        },
        {
          dt: 1680015600,
          main: {
            temp: 280.28,
            feels_like: 276.9,
            temp_min: 280.28,
            temp_max: 280.28,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1011,
            humidity: 88,
            temp_kf: 0,
          },
          weather: [
            {
              id: 501,
              main: 'Rain',
              description: 'chuva moderada',
              icon: '10d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 5.6,
            deg: 258,
            gust: 9.56,
          },
          visibility: 7524,
          pop: 1,
          rain: {
            '3h': 9.83,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-28 15:00:00',
        },
        {
          dt: 1680026400,
          main: {
            temp: 282.36,
            feels_like: 279.32,
            temp_min: 282.36,
            temp_max: 282.36,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1012,
            humidity: 67,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10d',
            },
          ],
          clouds: {
            all: 96,
          },
          wind: {
            speed: 6.2,
            deg: 222,
            gust: 8.34,
          },
          visibility: 10000,
          pop: 1,
          rain: {
            '3h': 2.57,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-28 18:00:00',
        },
        {
          dt: 1680037200,
          main: {
            temp: 283.79,
            feels_like: 282.5,
            temp_min: 283.79,
            temp_max: 283.79,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1012,
            humidity: 61,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10d',
            },
          ],
          clouds: {
            all: 66,
          },
          wind: {
            speed: 8.28,
            deg: 230,
            gust: 9.73,
          },
          visibility: 10000,
          pop: 0.81,
          rain: {
            '3h': 0.63,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-28 21:00:00',
        },
        {
          dt: 1680048000,
          main: {
            temp: 283.17,
            feels_like: 282.03,
            temp_min: 283.17,
            temp_max: 283.17,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1011,
            humidity: 69,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10d',
            },
          ],
          clouds: {
            all: 69,
          },
          wind: {
            speed: 8.14,
            deg: 228,
            gust: 9.82,
          },
          visibility: 10000,
          pop: 1,
          rain: {
            '3h': 0.88,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-29 00:00:00',
        },
        {
          dt: 1680058800,
          main: {
            temp: 281.88,
            feels_like: 278.26,
            temp_min: 281.88,
            temp_max: 281.88,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1010,
            humidity: 76,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10n',
            },
          ],
          clouds: {
            all: 49,
          },
          wind: {
            speed: 7.66,
            deg: 221,
            gust: 9.97,
          },
          visibility: 10000,
          pop: 0.98,
          rain: {
            '3h': 0.79,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-29 03:00:00',
        },
        {
          dt: 1680069600,
          main: {
            temp: 281.83,
            feels_like: 278,
            temp_min: 281.83,
            temp_max: 281.83,
            pressure: 1013,
            sea_level: 1013,
            grnd_level: 1010,
            humidity: 80,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10n',
            },
          ],
          clouds: {
            all: 75,
          },
          wind: {
            speed: 8.38,
            deg: 212,
            gust: 10.91,
          },
          visibility: 10000,
          pop: 0.96,
          rain: {
            '3h': 1.15,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-29 06:00:00',
        },
        {
          dt: 1680080400,
          main: {
            temp: 281.83,
            feels_like: 278.16,
            temp_min: 281.83,
            temp_max: 281.83,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1010,
            humidity: 81,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7.8,
            deg: 210,
            gust: 10.41,
          },
          visibility: 10000,
          pop: 0.94,
          rain: {
            '3h': 1.89,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-29 09:00:00',
        },
        {
          dt: 1680091200,
          main: {
            temp: 281.5,
            feels_like: 277.96,
            temp_min: 281.5,
            temp_max: 281.5,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1008,
            humidity: 83,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10n',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7.04,
            deg: 197,
            gust: 9.74,
          },
          visibility: 10000,
          pop: 0.9,
          rain: {
            '3h': 1.81,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-29 12:00:00',
        },
        {
          dt: 1680102000,
          main: {
            temp: 280.82,
            feels_like: 277.09,
            temp_min: 280.82,
            temp_max: 280.82,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1008,
            humidity: 86,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7,
            deg: 151,
            gust: 9.17,
          },
          visibility: 10000,
          pop: 0.86,
          rain: {
            '3h': 1.59,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-29 15:00:00',
        },
        {
          dt: 1680112800,
          main: {
            temp: 281.76,
            feels_like: 278.22,
            temp_min: 281.76,
            temp_max: 281.76,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1009,
            humidity: 80,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 7.29,
            deg: 146,
            gust: 9.46,
          },
          visibility: 10000,
          pop: 0.78,
          rain: {
            '3h': 1.34,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-29 18:00:00',
        },
        {
          dt: 1680123600,
          main: {
            temp: 283.66,
            feels_like: 282.59,
            temp_min: 283.66,
            temp_max: 283.66,
            pressure: 1011,
            sea_level: 1011,
            grnd_level: 1008,
            humidity: 70,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 5.49,
            deg: 162,
            gust: 6.86,
          },
          visibility: 10000,
          pop: 0.96,
          rain: {
            '3h': 0.54,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-29 21:00:00',
        },
        {
          dt: 1680134400,
          main: {
            temp: 284.24,
            feels_like: 283.08,
            temp_min: 284.24,
            temp_max: 284.24,
            pressure: 1010,
            sea_level: 1010,
            grnd_level: 1008,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10d',
            },
          ],
          clouds: {
            all: 100,
          },
          wind: {
            speed: 1.12,
            deg: 113,
            gust: 2.23,
          },
          visibility: 10000,
          pop: 1,
          rain: {
            '3h': 0.79,
          },
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-30 00:00:00',
        },
        {
          dt: 1680145200,
          main: {
            temp: 282.07,
            feels_like: 279.41,
            temp_min: 282.07,
            temp_max: 282.07,
            pressure: 1012,
            sea_level: 1012,
            grnd_level: 1009,
            humidity: 84,
            temp_kf: 0,
          },
          weather: [
            {
              id: 500,
              main: 'Rain',
              description: 'chuva leve',
              icon: '10n',
            },
          ],
          clouds: {
            all: 89,
          },
          wind: {
            speed: 4.95,
            deg: 27,
            gust: 5.45,
          },
          visibility: 10000,
          pop: 0.66,
          rain: {
            '3h': 0.66,
          },
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-30 03:00:00',
        },
        {
          dt: 1680156000,
          main: {
            temp: 280.22,
            feels_like: 277.45,
            temp_min: 280.22,
            temp_max: 280.22,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1011,
            humidity: 88,
            temp_kf: 0,
          },
          weather: [
            {
              id: 803,
              main: 'Clouds',
              description: 'nublado',
              icon: '04n',
            },
          ],
          clouds: {
            all: 56,
          },
          wind: {
            speed: 4.19,
            deg: 22,
            gust: 4.81,
          },
          visibility: 10000,
          pop: 0.28,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-30 06:00:00',
        },
        {
          dt: 1680166800,
          main: {
            temp: 279.56,
            feels_like: 278.42,
            temp_min: 279.56,
            temp_max: 279.56,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1012,
            humidity: 87,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 1.75,
            deg: 16,
            gust: 1.95,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-30 09:00:00',
        },
        {
          dt: 1680177600,
          main: {
            temp: 279.51,
            feels_like: 279.51,
            temp_min: 279.51,
            temp_max: 279.51,
            pressure: 1014,
            sea_level: 1014,
            grnd_level: 1012,
            humidity: 85,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01n',
            },
          ],
          clouds: {
            all: 3,
          },
          wind: {
            speed: 0.44,
            deg: 283,
            gust: 1.05,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'n',
          },
          dt_txt: '2023-03-30 12:00:00',
        },
        {
          dt: 1680188400,
          main: {
            temp: 280.34,
            feels_like: 280.34,
            temp_min: 280.34,
            temp_max: 280.34,
            pressure: 1015,
            sea_level: 1015,
            grnd_level: 1012,
            humidity: 84,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01d',
            },
          ],
          clouds: {
            all: 5,
          },
          wind: {
            speed: 0.92,
            deg: 215,
            gust: 1.99,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-30 15:00:00',
        },
        {
          dt: 1680199200,
          main: {
            temp: 283.57,
            feels_like: 282.57,
            temp_min: 283.57,
            temp_max: 283.57,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1014,
            humidity: 73,
            temp_kf: 0,
          },
          weather: [
            {
              id: 801,
              main: 'Clouds',
              description: 'algumas nuvens',
              icon: '02d',
            },
          ],
          clouds: {
            all: 13,
          },
          wind: {
            speed: 3.1,
            deg: 262,
            gust: 4.24,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-30 18:00:00',
        },
        {
          dt: 1680210000,
          main: {
            temp: 285.17,
            feels_like: 284.1,
            temp_min: 285.17,
            temp_max: 285.17,
            pressure: 1016,
            sea_level: 1016,
            grnd_level: 1014,
            humidity: 64,
            temp_kf: 0,
          },
          weather: [
            {
              id: 800,
              main: 'Clear',
              description: 'céu limpo',
              icon: '01d',
            },
          ],
          clouds: {
            all: 9,
          },
          wind: {
            speed: 5.2,
            deg: 259,
            gust: 5.59,
          },
          visibility: 10000,
          pop: 0,
          sys: {
            pod: 'd',
          },
          dt_txt: '2023-03-30 21:00:00',
        },
      ],
      city: {
        id: 5391959,
        name: 'San Francisco',
        coord: {
          lat: 37.7858,
          lon: -122.4064,
        },
        country: 'US',
        population: 805235,
        timezone: -25200,
        sunrise: 1679753140,
        sunset: 1679797525,
      },
    };

    const formatedListData: any = [];
    setRawDataForecast(mock);
    mock.list.map(item => {
      const date = formatTimestampToTime2(item.dt);

      const newDt = `${date.day} - ${date.hours}:${date.minutes}`;
      const newTempMax = formatTemperature(item.main.temp_max);
      const newTempMin = formatTemperature(item.main.temp_min);
      const newMain = {
        ...item.main,
        temp_max: newTempMax,
        temp_min: newTempMin,
      };
      // dt: newDt, main: newMain
      const newItem = {...item, dt: newDt, main: newMain};
      formatedListData.push(newItem);
    });

    setDataForecast({...mock, list: formatedListData});
    // console.log('fetchWeather---> step 1', {latitude, longitude});
    // try {
    //   setIsLoading(true);
    //   const response = await getForecast({latitude, longitude});
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
      fetchForecast(coords);
    };
    getGeolocation(callbackFetchData);
  };

  const makeDataToGraph = (dataForecast?: ForecastModel) => {
    if (dataForecast) {
      const dataToGraph: ForecastToGraphModel = {
        labels: [''],
        data: [0],
      };
      dataToGraph.labels.splice(0, 1);
      dataToGraph.data.splice(0, 1);
      dataForecast.list.map(forecastItem => {
        const date = formatTimestampToTime2(forecastItem.dt);
        if (!dataToGraph.labels.includes(date.day)) {
          dataToGraph.labels.push(date.day);
          dataToGraph.data.push(forecastItem.main.temp);
        }
      });

      setDataForecastToGraph(dataToGraph);
    }
  };

  useEffect(() => {
    makeDataToGraph(rawDataForecast);
  }, [dataForecast]);

  return {
    isMorning,
    dataForecast,
    dataForecastToGraph,
    isLoading,
    setIsLoading,
    fetchData,
  };
};

export default useWeatherViewModel;
