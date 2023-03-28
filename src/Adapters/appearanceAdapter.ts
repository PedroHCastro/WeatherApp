import {AsyncStorageAdapter} from './asyncStorageAdapter';

const makeAsyncStorageAdapter = (): AsyncStorageAdapter =>
  new AsyncStorageAdapter();

export const setAppearanceAdapter = (
  appearance: 'light' | 'dark' | 'auto',
): void => {
  makeAsyncStorageAdapter().set('appearance', appearance);
};

export const getAppearanceAdapter = async (): Promise<
  'light' | 'dark' | 'auto' | undefined
> => {
  return await makeAsyncStorageAdapter().get('appearance');
};
