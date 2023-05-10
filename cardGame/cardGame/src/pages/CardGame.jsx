import styled, {keyframes , css} from 'styled-components';
import { useState, useEffect } from "react";
import CardContainer from "../components/CardContainer";
import ResetBtn from "../components/ResetBtn";
import { Level } from "../data/level";
import Modal from "../components/Modal";


// 카드 데이터 가지고 오기 
import {
  EasyVersion,
  NormalVersion,
  HardVersion,
} from "../utils/ShuffledCard";


const CardGame = () => {


  const [cardsNum, setCardsNum] = useState(EasyVersion)
  const [nowLevel, setNowLevel] = useState("EASY")

  const [score, setScore] = useState(0);
  const [animateScore, setAnimateScore] = useState(false);

  const [modalOn, setModalOn] = useState(false);

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const [disabled, setDisabled] = useState(false);


  useEffect(() => {
    if (score === cardsNum.length/2) {
      setModalOn(true);
    }
  }, [score,setModalOn,modalOn]);


// 레벨 버튼 클릭 시 카드 수 변경
  const ClickedLv = (e) => {
    setScore(0)
    setNowLevel(e.target.value)
    switch (e.target.value) {
      case 'EASY' :
        return setCardsNum(EasyVersion)
      case 'NORMAL' :
        return setCardsNum(NormalVersion)
      case 'HARD' :
        return setCardsNum(HardVersion)
      }
    }

    // 카드 클릭시 첫번째로 클릭한 카드, 두번째로 클릭한 카드 넣어주기
    const cardClicked = (card) => {
      firstCard? setSecondCard(card): setFirstCard(card);
  }

  // 클릭된 카드들 점부 초기화
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  }


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
  }, [firstCard, secondCard]);

// 점수 애니메이션
  useEffect(() => {
    setAnimateScore(true);
    const timeoutId = setTimeout(() => setAnimateScore(false), 500);
    return () => clearTimeout(timeoutId);
  }, [score]);

  return (
    <>
    <Modal modalOn={modalOn} setModalOn={setModalOn} />
    <ResetBtn />
    <StHeader>
        <p> Match the MARIO! 🍄 </p>
        <StScore animate={animateScore} > {score}/{cardsNum.length/2} </StScore>
    </StHeader>
    <StGameContainer>
      <StLevenContainer>
      {Level.map(level => {
          return (
              <StLevelBtn 
                  key={level.id} 
                  value={level.lv} 
                  type="button" 
                  className={"btn"+(level.lv == nowLevel ? " active" : "")} 
                  onClick={ClickedLv}>
                  {level.lv}
              </StLevelBtn>
          )
      })}
      </StLevenContainer>
        <CardContainer 
          cardsNum={cardsNum}
          cardClicked={cardClicked}
          firstCard={firstCard}
          secondCard={secondCard}
          disabled={disabled} />
    </StGameContainer>
    </>
  )
}

export default CardGame;

const StHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 20vh;

    > p {
    color:${({theme}) => theme.color.red};
    font-size: 3rem; 
    text-align: center;
    font-weight: 600;
    }
`

const StGameContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    padding-top: 2.5rem;  

    background-color: ${({theme}) => theme.color.deepBlue};
`

const StLevenContainer = styled.nav`
    display: flex;
    justify-content: center;
`



const StLevelBtn = styled.button`
    background-color:${({theme}) => theme.color.yellow};
    width: 5rem;
    padding: 1rem 1rem;
    margin: 1rem 1rem;
    text-align: center;
    border-radius: 1rem;

    box-shadow: 0.2rem 0.2rem ${({theme}) => theme.color.blue};
    &.active {
        background-color: ${({theme}) => theme.color.blue};
        box-shadow: 0.2rem 0.2rem ${({theme}) => theme.color.yellow};
    }
`


const blinkScore = keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;

const StScore = styled.div`
  color:${({theme}) => theme.color.green};
  font-size: 2.6rem; 
  text-align: center;
  font-weight: 600;
  margin-top: 1.5rem;
  animation: ${({ animate }) => animate ? css`${blinkScore} 1s ` : 'none'};

`