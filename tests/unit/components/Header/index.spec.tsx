import 'react-native';
import {forecastMock, forecastToGraphMock} from '../../../__mocks__';
import {Header} from '../../../../src/components';
import theme from '../../../../src/theme';

describe('Header component', () => {
  var mock = {
    dataForecast: forecastMock,
    dataForecastToGraph: forecastToGraphMock,
    isLoading: false,
  };

  it('should renders without errors', async () => {
    const navigation = {
      goBack: jest.fn(),
      canGoBack: () => true,
      ...({} as any),
    };

    const {title, headerLeft, headerRight} = Header({
      navigation,
      theme,
      hasHeaderRight: false,
    });

    expect(title).toEqual('');
    expect(headerLeft()).toBeDefined();
    expect(headerRight()).toEqual(undefined);
  });

  it('should render headerRight without errors', async () => {
    const navigation = {
      goBack: jest.fn(),
      canGoBack: () => true,
      ...({} as any),
    };

    const {headerRight} = Header({
      navigation,
      theme,
      hasHeaderRight: true,
    });

    expect(headerRight()).toBeDefined();
  });
});
