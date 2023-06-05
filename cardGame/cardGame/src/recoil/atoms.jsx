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

export const scoreData = atom({
  key: "scoreData",
  default: 0,
});

export const nowLevelData = atom({
  key: "nowLevelData",
  default: "EASY",
});
