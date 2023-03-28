import {renderHook} from '@testing-library/react-native';
import {useSpeed} from '../../../../src/hooks';

it('should return speed formated', async () => {
  const {result} = renderHook(() => useSpeed());

  const speedFormated = result.current.transformMsTOKh(1);
  expect(speedFormated).toEqual('3,6 km/h');
});
