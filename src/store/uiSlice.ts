import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    menuOpen: false,
  },
  reducers: {
    toggle(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
