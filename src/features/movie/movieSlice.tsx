import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type MovieState } from '../../utils/interfaces';

const initialState: MovieState = {
  movies: [],
  searchTerm: '',
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearchTerm } = movieSlice.actions;

export default movieSlice.reducer;
