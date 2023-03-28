import 'react-native';
import React from 'react';
import {act} from '@testing-library/react-native';
import {Home} from '../../../../src/screens';
import * as hooks from '../../../../src/screens/Home/view.model';
import {renderWithProviders} from '../../../../src/utils';
import {weatherMock} from '../../../__mocks__';

describe('Home screen', () => {
  var mock = {
    dataWeather: weatherMock,
    isLoading: false,
    hasPermissionGeolocation: true,
    fetchData: () => {},
    handleRequestPermission: () => Promise.resolve(),
  };

  it('renders correctly', async () => {
    const component = renderWithProviders(<Home />);
    await act(() => Promise.resolve());

    expect(component).toBeDefined();
  });

  it('render with weather component', async () => {
    jest.spyOn(hooks, 'useHomeViewModel').mockImplementation(() => mock);

    const {findByTestId} = renderWithProviders(<Home />);
    const componentCityName = await findByTestId('city-name');
    const componentWeatherData = await findByTestId('weather-data');

    expect(componentCityName).toBeDefined();
    expect(componentWeatherData).toBeDefined();
  });

  it('render with PermissionNotFound component', async () => {
    const permissionNotFoundMock = {
      ...mock,
      dataWeather: undefined,
      hasPermissionGeolocation: false,
    };

    jest
      .spyOn(hooks, 'useHomeViewModel')
      .mockImplementation(() => permissionNotFoundMock);

    const {findByTestId} = renderWithProviders(<Home />);
    const componentPermissionNotFound = await findByTestId(
      'permission-not-found',
    );

    expect(componentPermissionNotFound).toBeDefined();
  });
});
