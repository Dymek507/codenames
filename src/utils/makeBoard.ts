import { CardT } from "../types/modelTypes";
import wordsDb from "../data/words-sorted.json";
import originalWords from "../data/words-original.json";

interface Distribution {
  color: string;
  amount: number;
}

const makeBoard = (twoPlayers: boolean, color: string, database: string) => {
  //Chose first player and add additional card to deck
  const choseFirst = (color: string, twoPlayers: boolean) => {
    const distribution: Distribution[] = [
      {
        color: "blue",
        amount: 8,
      },
      {
        color: "red",
        amount: twoPlayers ? 0 : 8,
      },
      {
        color: "neutral",
        amount: twoPlayers ? 11 : 7,
      },
      {
        color: "killer",
        amount: twoPlayers ? 5 : 1,
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
  const drawWords = (wordsFromDb: string[]) => {
    const id = Math.floor(Math.random() * wordsFromDb.length);
    const word = wordsFromDb[id];
    wordsFromDb.splice(id, 1);
    return word;
  };

  // Create pattern of card on the Board
  const makePattern = (
    color: string,
    twoPlayers: boolean,
    dictionary: string
  ) => {
    const distribution = choseFirst(color || "blue", twoPlayers);
    const pattern: CardT[] = [];
    const words = dictionary === "Standard" ? originalWords : wordsDb;
    const wordsFromDb = [...words];
    for (let i = 0; i < 25; i++) {
      const color = drawCard(distribution);
      const word = drawWords(wordsFromDb);
      pattern.push({
        id: i,
        front: false,
        word: word,
        color: color!,
      });
    }
    // console.log(pattern);
    return pattern;
  };

  return makePattern(color, twoPlayers, database);
};

export default makeBoard;
