import { atom } from 'recoil';
import { EasyVersion } from '../utils/ShuffledCard';

export interface CardInfo {
    alt: string;
    id: number;
    matched: boolean;
    src: string;
}

export const modalOnData = atom<boolean>({
    key: 'modalOnData',
    default: false,
});

export const cardsNumData = atom<CardInfo[]>({
    key: 'cardsNumData',
    default: EasyVersion,
});

export const scoreData = atom<number>({
    key: 'scoreData',
    default: 0,
});

export const nowLevelData = atom<string>({
    key: 'nowLevelData',
    default: 'EASY',
});

export const firstCardData = atom<CardInfo | null>({
    key: 'firstCardData',
    default: null,
});

export const secondCardData = atom<CardInfo | null>({
    key: 'secondCardData',
    default: null,
});

export const disabledData = atom<boolean>({
    key: 'disabledData',
    default: false,
});
