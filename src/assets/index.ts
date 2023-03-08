import red from "./red.png";
import blue from "./blue.png";
import neutral from "./neutral.png";
import killer from "./killer.png";

export interface CardImages {
  red: string;
  blue: string;
  neutral: string;
  killer: string;
}

const cardImages: CardImages = {
  red,
  blue,
  neutral,
  killer,
};

export default cardImages;
