import {renderHook} from '@testing-library/react-native';
import {useDate} from '../../../../src/hooks';

it('should return date formated', async () => {
  const {result} = renderHook(() => useDate());

  const dateFormated = result.current.timestampToDate(1679975466);
  expect(dateFormated.day).toEqual('Ter');
  expect(dateFormated.hours).toEqual('00');
  expect(dateFormated.minutes).toEqual('51');
});
