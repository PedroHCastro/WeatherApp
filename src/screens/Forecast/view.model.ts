import {useState, useEffect} from 'react';
// import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';

import {getForecast} from '../../repositories';
import {
  CoordsDTO,
  RawForecastModel,
  ForecastModel,
  ForecastToGraphModel,
} from '../../models';
import {useDate, useTemperature} from '../../hooks';

export const useForecastViewModel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [rawDataForecast, setRawDataForecast] = useState<RawForecastModel>();
  const [dataForecast, setDataForecast] = useState<ForecastModel>();
  const [dataForecastToGraph, setDataForecastToGraph] =
    useState<ForecastToGraphModel>();

  const {timestampToDate} = useDate();
  const {formatTemperature} = useTemperature();

  useEffect(() => {
    fetchData();
  }, []);

  const getGeolocation = (callback: (coords: CoordsDTO) => void) => {
    Geolocation.getCurrentPosition(info => {
      const {latitude, longitude} = info.coords;

      callback({latitude, longitude});
    });
  };

  function transformDataToView(data: RawForecastModel) {
    const formatedListData: any = [];

    data.list.map(item => {
      const date = timestampToDate(item.dt);

      const newDt = `${date.day} - ${date.hours}:${date.minutes}`;
      const newTempMax = formatTemperature(item.main.temp_max);
      const newTempMin = formatTemperature(item.main.temp_min);
      const newMain = {
        ...item.main,
        temp_max: newTempMax,
        temp_min: newTempMin,
      };
      const newItem = {...item, dt: newDt, main: newMain};
      formatedListData.push(newItem);
    });

    const newDataWeather = {...data, list: formatedListData} as ForecastModel;
    return newDataWeather;
  }

  const fetchForecast = async ({latitude, longitude}: CoordsDTO) => {
    setIsLoading(true);
    try {
      setIsLoading(true);
      const response = await getForecast({latitude, longitude});
      setRawDataForecast(response);
      const forecast = transformDataToView(response);
      setDataForecast(forecast);
      setIsLoading(false);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = () => {
    const callbackFetchData = (coords: CoordsDTO) => {
      fetchForecast(coords);
    };
    getGeolocation(callbackFetchData);
  };

  const makeDataToGraph = (dataForecast?: RawForecastModel) => {
    if (dataForecast) {
      const dataToGraph: ForecastToGraphModel = {
        labels: [''],
        data: [0],
      };
      dataToGraph.labels.splice(0, 1);
      dataToGraph.data.splice(0, 1);
      dataForecast.list.map(forecastItem => {
        const date = timestampToDate(forecastItem.dt);
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
    dataForecast,
    dataForecastToGraph,
    isLoading,
  };
};
