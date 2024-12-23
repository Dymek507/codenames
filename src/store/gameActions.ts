//@ts-nocheck

import { doc, updateDoc } from "@firebase/firestore";
import { db } from "../firebaseConfig";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { gameActions } from "./gameSlice";
import makeBoard from "../utils/makeBoard";

export const sendBoardData = (
  twoPlayers: boolean,
  color: string,
  database: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    const board = makeBoard(twoPlayers, color, database);

    const userDocRef = doc(db, `games/game`);
    try {
      dispatch(gameActions.replaceBoard(board));
      await updateDoc(userDocRef, {
        board: board,
      });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
export const updateCardData = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    const board = getState().game.board;

    const userDocRef = doc(db, `games/game`);
    try {
      await updateDoc(userDocRef, {
        board: board,
      });
    } catch (error) {
      console.log(`Błąd wysyłania ${error}`);
    }
  };
};
