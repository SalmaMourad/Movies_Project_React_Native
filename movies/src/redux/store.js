import { configureStore } from '@reduxjs/toolkit';
import favouriteReducer from './favouriteSlice';

export const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
  },
});