import { doc, getDoc, updateDoc } from "@firebase/firestore";
import { db } from "../firebaseConfig";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { gameActions } from "./gameSlice";
import makeBoard from "../utils/makeBoard";

export const sendBoardData = (
  color: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    // const uId = getState().ui.userData.uId;
    // const myPlayers = getState().players.myPlayers;
    const board = makeBoard(color);

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
