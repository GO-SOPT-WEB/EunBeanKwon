import { marioData } from "../data/mario";

export const Shuffled = (arr) => arr.sort(() => Math.random() - 0.5);

let ShuffledMario = Shuffled(marioData)

export const EasyVersion = Shuffled([
    ...ShuffledMario.slice(0,5),
    ...ShuffledMario.slice(0,5)
]
)

export const NormalVersion = Shuffled([
    ...ShuffledMario.slice(0,7),
    ...ShuffledMario.slice(0,7),
]
)

export const HardVersion = Shuffled(
    [...ShuffledMario.slice(0,9),
    ...ShuffledMario.slice(0,9)]
)