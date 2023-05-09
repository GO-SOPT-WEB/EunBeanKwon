import styled from "styled-components";
import SingleCard from "./SingleCard";

const CardContainer = ({cards, cardClicked, firstCard, secondCard, disabled}) => {

  return (
    <>
    <StCardContainer>
      {cards.map((card) => {
        return ( 
          <SingleCard 
            key={card.id}
            card={card}
            cardClicked={cardClicked}
            flipped={card === firstCard || card === secondCard || card.matched }
            disabled={disabled}
          />
        )
      })}
    </StCardContainer>
    </>
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


const StScore = styled.div`
  color:${({theme}) => theme.color.green};
  font-size: 2.6rem; 
  text-align: center;
  font-weight: 600;
  margin-top: 1.5rem;
`