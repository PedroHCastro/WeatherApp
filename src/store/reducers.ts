import {combineReducers} from '@reduxjs/toolkit';
import {themeReducer} from './slices';

export default combineReducers({
  theme: themeReducer,
});
