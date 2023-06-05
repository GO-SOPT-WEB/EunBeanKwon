import styled from "styled-components";
import SingleCard from "./SingleCard";

const CardContainer = ({
  cardsNum,
  cardClicked,
  firstCard,
  secondCard,
  disabled,
}) => {
  return (
    <>
      <StCardContainer>
        {cardsNum.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              cardClicked={cardClicked}
              flipped={
                card === firstCard || card === secondCard || card.matched
              }
              disabled={disabled}
            />
          );
        })}
      </StCardContainer>
    </>
  );
};

export default CardContainer;

const StCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  flex-wrap: wrap;
  justify-content: center;
`;
