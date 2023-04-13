import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { CardT } from "../types/modelTypes";

interface GameState {
  board: CardT[];
}

const gameSlice = createSlice({
  name: "game",
  initialState: {
    board: [],
  } as GameState,
  reducers: {
    toggleCard(state, action: PayloadAction<number>) {
      const id = action.payload;
      const updatedBoard = [...state.board];
      const cardToUpdateIndex = updatedBoard.findIndex(
        (card) => card.id === id
      );
      updatedBoard[cardToUpdateIndex].front =
        !updatedBoard[cardToUpdateIndex].front;

      state.board = updatedBoard;
    },
    replaceBoard(state, action: PayloadAction<CardT[]>) {
      state.board = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
