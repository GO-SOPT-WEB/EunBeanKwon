import styled from "styled-components";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const CardContainer = ({cardsNum}) => {

  const [score, setScore] = useState(0);
  const [cards, setCards] = useState([]);

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const [disabled, setDisabled] = useState(false);

  const cardClicked = (card) => {
    firstCard? setSecondCard(card): setFirstCard(card);
}

const loadCards = () => {
  setCards(cardsNum);
  setFirstCard(null);
  setSecondCard(null);
}


  //선택된 카드들 비교
  useEffect(() => {
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCards((prevCards) => {
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


  // 클릭된 카드들 점부 초기화
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  }

  useEffect(() => {
    loadCards();
  }, [])

  return (
    <StCardContainer>
      {cards.map((card,index) => {
        return ( 
          <SingleCard 
            key={`${card.id}${index}`}
            card={card}
            cardClicked={cardClicked}
            flipped={card === firstCard || card === secondCard || card.matched }
            disabled={disabled}
          />
        )
      })}
    </StCardContainer>
  )
}

export default CardContainer;

const StCardContainer = styled.div `

display: flex;
flex-wrap: wrap;
justify-content: center;

flex-wrap: wrap;
justify-content: center;
`