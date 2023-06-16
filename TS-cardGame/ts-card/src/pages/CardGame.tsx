import { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
    CardInfo,
    cardsNumData,
    disabledData,
    firstCardData,
    modalOnData,
    scoreData,
    secondCardData,
} from '../recoil/atoms';

import CardContainer from '../components/CardContainer';
import ResetBtn from '../components/ResetBtn';
import Modal from '../components/Modal';
import Header from '../components/Header';
import LevelContainer from '../components/LevelContainer';

const CardGame = () => {
    const setModalOn = useSetRecoilState(modalOnData);

    const [cardsNum, setCardsNum] = useRecoilState(cardsNumData);
    const [score, setScore] = useRecoilState(scoreData);

    const [firstCard, setFirstCard] = useRecoilState(firstCardData);
    const [secondCard, setSecondCard] = useRecoilState(secondCardData);
    const setDisabled = useSetRecoilState(disabledData);

    // 클릭된 카드들 점부 초기화
    const resetTurn = () => {
        setFirstCard(null);
        setSecondCard(null);
        setDisabled(false);
    };

    const checkMatched = (prevCards: CardInfo[]): CardInfo[] => {
        return prevCards.map((card: CardInfo) => {
            if (firstCard !== null) {
                if (card.src === firstCard.src) {
                    return { ...card, matched: true };
                } else {
                    return card;
                }
            }
            return card; // 추가: undefined가 아닐 때의 기본 반환 값
        });
    };

    // 선택된 카드들 비교해서 같으면 matched 값 부여
    useEffect(() => {
        if (firstCard !== null && secondCard !== null) {
            setDisabled(true);
            if (firstCard.src === secondCard.src) {
                const updatedCards = checkMatched(cardsNum); // 수정: checkMatched 호출
                setCardsNum(updatedCards); // 수정: 반환된 배열을 전달
                setScore(score + 1);
                resetTurn();
            } else {
                setTimeout(() => resetTurn(), 500);
            }
        }
    }, [firstCard, secondCard, cardsNum, score]);

    // 전부 맞추면 축하 모달 띄우기
    useEffect(() => {
        const cardMatchedAll = score === cardsNum.length / 2;
        if (cardMatchedAll) {
            setModalOn(true);
        }
    }, [score]);

    return (
        <>
            <Modal />
            <ResetBtn />
            <Header />
            <StGameContainer>
                <LevelContainer />
                <CardContainer />
            </StGameContainer>
        </>
    );
};

export default CardGame;

const StGameContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    padding-top: 2.5rem;

    background-color: ${({ theme }) => theme.color.deepBlue};
`;
