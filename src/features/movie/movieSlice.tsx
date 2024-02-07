import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type Movie } from '../../utils/interfaces';

interface MovieState {
  movies: Movie[];
  searchTerm: string;
}

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
