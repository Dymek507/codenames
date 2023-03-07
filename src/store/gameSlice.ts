import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Board } from "../modules/modelTypes";

interface GameState {
  board: Board;
}

const gameSlice = createSlice({
  name: "game",
  initialState: {
    board: {
      id: 0,
      front: false,
      word: "",
      color: "",
    },
  } as GameState,
  reducers: {
    toggle(state) {
      state.board.front = !state.board.front;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
