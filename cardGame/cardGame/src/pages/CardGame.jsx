import styled from "styled-components";
import { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import ResetBtn from "../components/ResetBtn";
import Modal from "../components/Modal";

import { useRecoilState, useSetRecoilState } from "recoil";
import { cardsNumData, modalOnData, scoreData } from "../recoil/atoms";
import Header from "../components/Header";
import LevelContainer from "../components/LevelContainer";

const CardGame = () => {
  const setModalOn = useSetRecoilState(modalOnData);
  const [cardsNum, setCardsNum] = useRecoilState(cardsNumData);

  const [score, setScore] = useRecoilState(scoreData);
  const [animateScore, setAnimateScore] = useState(false);

  // 1 drilling props
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const cardMatchedAll = score === cardsNum.length / 2;

  useEffect(() => {
    if (cardMatchedAll) {
      setModalOn(true);
    }
  }, [cardMatchedAll, setModalOn]);

  // 카드 클릭시 첫번째로 클릭한 카드, 두번째로 클릭한 카드 넣어주기
  const cardClicked = (card) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  // 클릭된 카드들 점부 초기화
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  //선택된 카드들 비교해서 같으면 matched 값 부여
  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCardsNum((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstCard.src) {
              setScore(score + 1);
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [firstCard, score, secondCard, setCardsNum, setScore]);

  // 점수 애니메이션
  useEffect(() => {
    setAnimateScore(true);
    const timeoutId = setTimeout(() => setAnimateScore(false), 500);
    return () => clearTimeout(timeoutId);
  }, [score]);

  return (
    <>
      <Modal />
      <ResetBtn />
      <Header animate={animateScore} />
      <StGameContainer>
        <LevelContainer />
        <CardContainer
          firstCard={firstCard}
          secondCard={secondCard}
          disabled={disabled}
          cardClicked={cardClicked}
        />
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
