import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook} from 'react-redux';
import reducers from './reducers';

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppSelector = TypedUseSelectorHook<RootState>;
export type AppDispatch = typeof store.dispatch;
