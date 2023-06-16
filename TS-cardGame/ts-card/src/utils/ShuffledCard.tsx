import { marioData, marioInfo } from '../data/mario';

export const Shuffled = (arr: marioInfo[]) => arr.sort(() => Math.random() - 0.5);

export let ShuffledMario = Shuffled(marioData);

export const EasyVersion = Shuffled([...ShuffledMario.slice(0, 5), ...ShuffledMario.slice(0, 5)]).map((randomId) => ({
    ...randomId,
    cardId: Math.random() * 100,
}));

export const NormalVersion = Shuffled([...ShuffledMario.slice(0, 7), ...ShuffledMario.slice(0, 7)]).map((randomId) => ({
    ...randomId,
    cardId: Math.random(),
}));

export const HardVersion = Shuffled([...ShuffledMario.slice(0, 9), ...ShuffledMario.slice(0, 9)]).map((randomId) => ({
    ...randomId,
    cardId: Math.random(),
}));
