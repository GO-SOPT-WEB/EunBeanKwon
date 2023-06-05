import { atom } from "recoil";
import { EasyVersion } from "../utils/ShuffledCard";

export const modalOnData = atom({
  key: "modalOnData",
  default: false,
});

export const cardsNumData = atom({
  key: "cardsNumData",
  default: EasyVersion,
});
