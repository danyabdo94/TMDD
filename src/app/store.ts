import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesReducer from "../features/movies-list/movies.slicer";

export const store = configureStore({
  reducer: {
    moviesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
