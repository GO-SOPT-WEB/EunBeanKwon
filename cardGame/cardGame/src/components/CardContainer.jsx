import styled from "styled-components";
import SingleCard from "./SingleCard";
import { useRecoilValue } from "recoil";
import { cardsNumData } from "../recoil/atoms";

const CardContainer = () => {
  const cardsNum = useRecoilValue(cardsNumData);

  return (
    <>
      <StCardContainer>
        {cardsNum &&
          Array.isArray(cardsNum) &&
          cardsNum.map((card) => {
            return <SingleCard key={card.id} card={card} />;
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
