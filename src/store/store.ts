import { configureStore, Store } from "@reduxjs/toolkit";
import gameSlice from "./gameSlice";
import uiSlice from "./uiSlice";

const store = configureStore({
  // const store: Store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    game: gameSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
