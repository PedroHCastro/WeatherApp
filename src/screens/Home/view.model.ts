import {useEffect, useState} from 'react';
import {Platform} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import {useNavigation, useRoute} from '@react-navigation/native';

import {getWeather} from '../../repositories';
import {CoordsDTO, RawWeatherModel, WeatherModel} from '../../models';
import {useDate, useTemperature, useSpeed, useAppTheme} from '../../hooks';
import {RootStackScreenProps} from '../../routes';
import {getAppearanceAdapter} from '../../Adapters/appearanceAdapter';

export const useHomeViewModel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dataWeather, setDataWeather] = useState<WeatherModel>();
  const [hasPermissionGeolocation, setHasPermissionGeolocation] =
    useState<boolean>(false);

  const {timestampToDate} = useDate();
  const {formatTemperature} = useTemperature();
  const {transformMsTOKh} = useSpeed();
  const {changeTheme} = useAppTheme();

  const navigation =
    useNavigation<RootStackScreenProps<'Home'>['navigation']>();
  const route = useRoute<RootStackScreenProps<'Home'>['route']>();
  const refresh = route.params?.refresh ?? false;

  useEffect(() => {
    if (refresh) {
      fetchData();
      navigation.setParams({refresh: false});
    }
  }, [refresh]);

  useEffect(() => {
    fetchData();
  }, [hasPermissionGeolocation]);

  useEffect(() => {
    const checkTheme = async () => {
      const appearance = await getAppearanceAdapter();
      if (appearance) changeTheme(appearance);
    };
    checkTheme();
  }, []);

  const getGeolocation = async (callback: (coords: CoordsDTO) => void) => {
    await checkPermission();
    if (hasPermissionGeolocation) {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          callback({latitude, longitude});
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      handleRequestPermission();
    }
  };

  const checkPermission = async () => {
    let hasPermission = false;
    if (Platform.OS === 'ios') {
      const resultAways = await check(PERMISSIONS.IOS.LOCATION_ALWAYS);
      const resultWhenInUse = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      hasPermission =
        resultAways === RESULTS.GRANTED || resultWhenInUse === RESULTS.GRANTED;
    } else {
      const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      hasPermission = result === RESULTS.GRANTED;
    }

    setHasPermissionGeolocation(hasPermission);
  };

  const handleRequestPermission = async () => {
    let result = '';
    if (Platform.OS === 'ios') {
      result = await request(PERMISSIONS.IOS.LOCATION_ALWAYS);
    } else {
      result = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    if (result === 'blocked') {
      setHasPermissionGeolocation(false);
    } else {
      setHasPermissionGeolocation(true);
    }
  };

  function formatTimestampToTime(timestamp: number) {
    const date = timestampToDate(timestamp);
    return `${date.hours}:${date.minutes}`;
  }

  function transformDataToView(data: RawWeatherModel) {
    const sunrise = data.sys.sunrise;
    const sunset = data.sys.sunset;

    const formatedSys = {
      ...data.sys,
      sunrise: formatTimestampToTime(sunrise),
      sunset: formatTimestampToTime(sunset),
    };

    const speed = data.wind.speed;
    const formatedWind = {
      ...data.wind,
      speed: transformMsTOKh(speed),
    };

    const formatedMain = {
      ...data.main,
      temp: formatTemperature(data.main.temp),
      feels_like: formatTemperature(data.main.feels_like),
      temp_min: formatTemperature(data.main.temp_min),
      temp_max: formatTemperature(data.main.temp_max),
    };

    const newDataWeather = {
      ...data,
      sys: formatedSys,
      wind: formatedWind,
      main: formatedMain,
    } as WeatherModel;

    return newDataWeather;
  }

  const fetchWeather = async ({latitude, longitude}: CoordsDTO) => {
    setIsLoading(true);

    try {
      setIsLoading(true);
      const response = await getWeather({latitude, longitude});
      const newDataWeather = transformDataToView(response);
      setDataWeather(newDataWeather);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchData = () => {
    const callbackFetchData = (coords: CoordsDTO) => {
      fetchWeather(coords);
    };
    getGeolocation(callbackFetchData);
  };

  return {
    dataWeather,
    isLoading,
    hasPermissionGeolocation,
    fetchData,
    handleRequestPermission,
  };
};
