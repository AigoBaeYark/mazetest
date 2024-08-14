import { configureStore } from "@reduxjs/toolkit";

export const makeStore = () =>
  configureStore({
    reducer: {},
  });

// Infer the type of mazeStore
export type MazeStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<MazeStore["getState"]>;
export type AppDispatch = MazeStore["dispatch"];
