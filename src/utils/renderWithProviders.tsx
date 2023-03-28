import {NavigationContainer} from '@react-navigation/native';
import {render} from '@testing-library/react-native';
import React, {PropsWithChildren} from 'react';
import {Provider} from 'react-redux';
import {store} from '../store';
import {ThemeProvider} from '../context';

export const renderWithProviders = (
  ui: React.ReactElement,
  {...renderOptions} = {},
) => {
  function Wrapper({
    children,
  }: PropsWithChildren<Record<string, unknown>>): JSX.Element {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <NavigationContainer>
            <React.Suspense fallback={'Loading Content...'}>
              {children}
            </React.Suspense>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    );
  }
  return {...render(ui, {wrapper: Wrapper, ...renderOptions})};
};
