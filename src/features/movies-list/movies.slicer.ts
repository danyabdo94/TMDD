import axios from "axios";
import { ASYNC_STATUS } from "./../../app/enums";
import { GET_MOVIES_SORTED_BY } from "./../../app/const";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { MovieItem } from "../../models/movie-item";
import { MOVIE_TYPES } from "../../app/enums";

export interface MoviesState {
  movies: [MovieItem] | [];
  status: ASYNC_STATUS;
}

const initialState: MoviesState = {
  movies: [],
  status: ASYNC_STATUS.IDLE,
};

export const getMoviesAsync = createAsyncThunk(
  "Movies/fetchMovies",
  async (moviesTypes: MOVIE_TYPES | string) => {
    const response = await axios.get(
      GET_MOVIES_SORTED_BY(moviesTypes)
    );
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
        state.status = ASYNC_STATUS.LOADING;
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.status = ASYNC_STATUS.IDLE;
        state.movies = action.payload.results as [MovieItem];
      });
  },
});

export const { getMovies } = MoviesSlice.actions;

export const selectMovies = (state: RootState) => state.moviesReducer.movies;

export default MoviesSlice.reducer;
