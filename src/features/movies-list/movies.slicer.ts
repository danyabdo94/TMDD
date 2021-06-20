import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { MovieItem } from "../../models/movie-item";
import axios from "axios";

export interface MoviesState {
  movies: [MovieItem] | [];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MoviesState = {
  movies: [],
  status: "idle"
};

export const getMoviesAsync = createAsyncThunk(
  "Movies/fetchMovies",
  async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f9f33a1abf02ec3217e6018fc9fe264a`)
    return response.data;
  }
);

export const MoviesSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    getMovies: (state, action: PayloadAction<[MovieItem]>) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.movies = action.payload.results as [MovieItem];
      });
  },
});

export const { getMovies } = MoviesSlice.actions;

export const selectMovies = (state: RootState) => state.moviesReducer.movies;

export default MoviesSlice.reducer;
