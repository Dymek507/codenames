import React from "react";
import { CardT } from "../modules/modelTypes";
import wordsDb from "../data/wordsDb.json";

interface Distribution {
  color: string;
  amount: number;
}

const makeBoard = (color: string) => {
  //Chose first player and add additional card to deck
  const choseFirst = (color: string) => {
    const distribution: Distribution[] = [
      {
        color: "blue",
        amount: 8,
      },
      {
        color: "red",
        amount: 8,
      },
      {
        color: "neutral",
        amount: 7,
      },
      {
        color: "killer",
        amount: 1,
      },
    ];

    const indexCardToAdd = distribution.findIndex(
      (team) => team.color === color
    );
    distribution[indexCardToAdd].amount++;
    return distribution;
  };

  //Draw card color from deck
  const drawCard = (distribution: Distribution[]) => {
    const id = Math.floor(Math.random() * distribution.length);
    const initialValue = 0;
    const sumWithInitial = distribution.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      initialValue
    );
    let color = "";
    //amount of card that type left in distribution and sum of all card left
    if (distribution[id].amount > 1) {
      distribution[id].amount--;
      color = distribution[id].color;
      return color;
    } else if (distribution[id].amount === 1) {
      color = distribution[id].color;
      distribution.splice(id, 1);
      return color;
    }
    if (sumWithInitial !== 0) {
      drawCard(distribution);
    }
  };

  //Draw words from db
  const drawWords = () => {
    const wordsFromDb = [...wordsDb];
    const id = Math.floor(Math.random() * wordsFromDb.length);
    const word = wordsFromDb[id];
    wordsFromDb.splice(id, 1);
    return word;
  };

  // Create pattern of card on the Board
  const makePattern = (color: string) => {
    const distribution = choseFirst(color);
    const pattern: CardT[] = [];
    for (let i = 0; i < 25; i++) {
      const color = drawCard(distribution);
      const word = drawWords();
      pattern.push({
        id: i,
        front: false,
        word: word,
        color: color!,
      });
    }
    return pattern;
  };

  return makePattern(color);
};

export default makeBoard;
