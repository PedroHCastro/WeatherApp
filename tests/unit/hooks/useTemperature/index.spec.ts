import {renderHook} from '@testing-library/react-native';
import {useTemperature} from '../../../../src/hooks';

it('should return temperature formated', async () => {
  const {result} = renderHook(() => useTemperature());

  const temperatureFormated1 = result.current.formatTemperature(1.23);
  expect(temperatureFormated1).toEqual('1 °C');

  const temperatureFormated2 = result.current.formatTemperature(
    12.3,
    'fahrenheit',
  );
  expect(temperatureFormated2).toEqual('12 °F');

  const temperatureFormated3 = result.current.formatTemperature(
    123.0,
    'kelvin',
  );
  expect(temperatureFormated3).toEqual('123 K');
});
