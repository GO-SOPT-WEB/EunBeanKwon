import { marioData } from "../data/mario";

export interface ShuffledCardInfo {
    arr: string[];
}

export const Shuffled = (arr) => arr.sort(() => Math.random() - 0.5)

console.log(typeof(marioData))

export let ShuffledMario = Shuffled(marioData);

// export const