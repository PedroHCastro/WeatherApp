import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import theme from '../../../theme';

export interface Color {
  colors: {
    background: string;
    font: string;
  };
}

export interface ThemeState {
  theme: Color;
  appearance: 'light' | 'dark' | 'auto';
}

const initialState: ThemeState = {
  theme,
  appearance: 'auto',
};

export const themeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<Color>) => {
      state.theme = action.payload;
    },
    setAppearance: (
      state,
      action: PayloadAction<'light' | 'dark' | 'auto'>,
    ) => {
      state.appearance = action.payload;
    },
  },
});

export const {setColor, setAppearance} = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
