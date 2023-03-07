import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../modules/modelTypes";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menu: true,
  },
  reducers: {
    toggle(state) {
      state.menu = !state.menu;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
