import styled from "styled-components";
import SingleCard from "./SingleCard";
import { useEffect, useState } from "react";

const CardContainer = ({cardsNum, }) => {

  const [matched, setMatched] = useState(0);
  const [cards, setCards] = useState([]);

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);

  const [disabled, setDisabled] = useState(false);
  const [isOpen, setIsOpen] = useState(Array(cardsNum.length).fill(false));

  

  const cardClicked = (card) => {
    firstCard? setSecondCard(card): setFirstCard(card);
    const updatedIsOpen = [...isOpen]; 
    updatedIsOpen[card.id] = true; 
    setIsOpen(updatedIsOpen); 
}


  //선택된 카드들 비교
  useEffect(() => {
    console.log(isOpen)
    if (firstCard && secondCard) {
      setDisabled(true);
      if (firstCard.src === secondCard.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstCard.src) {
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


  // reset Choice
  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  }


  return (
    <StCardContainer>
      {cardsNum.map((card,index) => {

        return ( 
          <SingleCard 
            key={`${card.id}${index}`}
            card={card}
            cardClicked={cardClicked}
            flipped={card === firstCard || card === secondCard }
            disabled={disabled}
            idOpen={isOpen}
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
width: 60vw;

flex-wrap: wrap;
justify-content: center;
`