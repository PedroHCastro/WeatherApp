import 'react-native';
import React from 'react';
import {act} from '@testing-library/react-native';
import {Forecast} from '../../../../src/screens';
import * as hooks from '../../../../src/screens/Forecast/view.model';
import {renderWithProviders} from '../../../../src/utils';
import {forecastMock, forecastToGraphMock} from '../../../__mocks__';

describe('Forecast screen', () => {
  var mock = {
    dataForecast: forecastMock,
    dataForecastToGraph: forecastToGraphMock,
    isLoading: false,
  };

  it('should renders without errors', async () => {
    const component = renderWithProviders(<Forecast />);
    await act(() => Promise.resolve());

    expect(component).toBeDefined();
  });

  it('should render LineChart without errors', async () => {
    jest.spyOn(hooks, 'useForecastViewModel').mockImplementation(() => mock);

    const {findByTestId} = renderWithProviders(<Forecast />);
    const component = await findByTestId('chart-wrapper');

    expect(component).toBeDefined();
  });
});
