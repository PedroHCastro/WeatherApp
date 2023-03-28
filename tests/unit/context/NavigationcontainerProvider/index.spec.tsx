import React from 'react';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {
  NavigationContainerProvider,
  ThemeProvider,
} from '../../../../src/context';
import {store} from '../../../../src/store';

const WrapperProvider = ({children}: {children: JSX.Element}) => {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
};

describe('NavigationContainerProvider', () => {
  it('render navigationContainerProvider', () => {
    const children = <View></View>;
    const component = render(
      <WrapperProvider>
        <NavigationContainerProvider>{children}</NavigationContainerProvider>
      </WrapperProvider>,
    );

    expect(component).toBeDefined();
  });
});
