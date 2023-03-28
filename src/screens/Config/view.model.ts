import {useEffect, useState} from 'react';
import {setAppearanceAdapter} from '../../Adapters/appearanceAdapter';
import {useAppSelector} from '../../hooks';
import useAppTheme from '../../hooks/useAppTheme';
import {RootState} from '../../store';

export const useConfigViewModel = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const {appearance} = useAppSelector((state: RootState) => state.theme);
  const {changeTheme} = useAppTheme();

  useEffect(() => {
    setIsDarkTheme(appearance === 'dark');
  }, [appearance]);

  const toggle = (value: boolean) => {
    const appearance = value ? 'dark' : 'light';
    changeTheme(appearance);
    setAppearanceAdapter(appearance);
  };

  const data = [
    {
      label: 'Celsius ºC',
      value: 'metric',
    },
    {
      label: 'Fahrenheit ºF',
      value: 'imperial',
    },
    {
      label: 'Kelvin K',
      value: 'default',
    },
  ];

  return {
    toggle,
    data,
    isDarkTheme,
  };
};
