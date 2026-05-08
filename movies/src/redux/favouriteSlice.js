import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favourites',

  initialState: {
    movies: [],
  },

  reducers: {
    addFavourite: (state, action) => {
      state.movies.push(action.payload);
    },

    removeFavourite: (state, action) => {
      state.movies = state.movies.filter(
        item => item.id !== action.payload.id,
      );
    },
  },
});

export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;