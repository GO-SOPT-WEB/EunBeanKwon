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