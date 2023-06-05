import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import ResetBtn from "../components/ResetBtn";
import { Level } from "../data/level";
import Modal from "../components/Modal";

// 카드 데이터 가지고 오기
import { EasyVersion, NormalVersion, HardVersion } from "../utils/ShuffledCard";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cardsNumData, modalOnData, scoreData } from "../recoil/atoms";

const CardGame = () => {
  const setModalOn = useSetRecoilState(modalOnData);
  const [cardsNum, setCardsNum] = useRecoilState(cardsNumData);

  const [nowLevel, setNowLevel] = useState("EASY");

  const [score, setScore] = useSetRecoilState(scoreData);
  const [animateScore, setAnimateScore] = useState(false);

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const cardMatchedAll = score === cardsNum.length / 2;

  useEffect(() => {
    if (cardMatchedAll) {
      setModalOn(true);
    }
  }, [cardMatchedAll, setModalOn]);

  // 레벨 버튼 클릭 시 카드 수 변경
  const ClickedLv = (e) => {
    setScore(0);
    setNowLevel(e.target.value);
    switch (e.target.value) {
      case "EASY":
        return setCardsNum(EasyVersion);
      case "NORMAL":
        return setCardsNum(NormalVersion);
      case "HARD":
        return setCardsNum(HardVersion);
    }
  };

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
  }, [firstCard, score, secondCard]);

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
      <StGameContainer>
        <StLevenContainer>
          {Level.map((level) => {
            return (
              <StLevelBtn
                key={level.id}
                value={level.lv}
                type="button"
                className={"btn" + (level.lv == nowLevel ? " active" : "")}
                onClick={ClickedLv}
              >
                {level.lv}
              </StLevelBtn>
            );
          })}
        </StLevenContainer>
        <CardContainer
          cardsNum={cardsNum}
          cardClicked={cardClicked}
          firstCard={firstCard}
          secondCard={secondCard}
          disabled={disabled}
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

const StLevenContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

const StLevelBtn = styled.button`
  width: 5rem;
  margin: 1rem 1rem;
  background-color: ${({ theme }) => theme.color.yellow};
  padding: 1rem 1rem;

  text-align: center;
  border-radius: 1rem;

  box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.blue};
  &.active {
    background-color: ${({ theme }) => theme.color.blue};
    box-shadow: 0.2rem 0.2rem ${({ theme }) => theme.color.yellow};
  }
`;
