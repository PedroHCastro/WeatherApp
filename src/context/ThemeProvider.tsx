import React from 'react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components/native';
import {RootState} from '../store';
import {useAppSelector} from '../hooks';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({children}: Props): JSX.Element => {
  const {theme} = useAppSelector((state: RootState) => state.theme);

  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
