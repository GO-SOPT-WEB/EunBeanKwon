import { useRecoilValue } from "recoil";
import styled, { css, keyframes } from "styled-components";
import { cardsNumData, scoreData } from "../recoil/atoms";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const score = useRecoilValue(scoreData);
  const cardsNum = useRecoilValue(cardsNumData);

  const [animateScore, setAnimateScore] = useState(false);

  // 점수 애니메이션
  useEffect(() => {
    setAnimateScore(true);
    const timeoutId = setTimeout(() => setAnimateScore(false), 500);
    return () => clearTimeout(timeoutId);
  }, [score]);

  return (
    <StHeader>
      <p> Match the MARIO! 🍄 </p>
      {cardsNum && cardsNum.length > 0 && (
        <StScore animate={animateScore}>
          {score}/{cardsNum.length / 2}
        </StScore>
      )}
    </StHeader>
  );
};

export default Header;

const StHeader = styled.header`
  display: flex;
  height: 20vh;
  flex-direction: column;
  justify-content: center;

  > p {
    color: ${({ theme }) => theme.color.red};
    font-size: 3rem;
    text-align: center;
    font-weight: 600;
  }
`;

const StScore = styled.div`
  color: ${({ theme }) => theme.color.green};
  font-size: 2.6rem;
  text-align: center;
  font-weight: 600;
  margin-top: 1.5rem;
  animation: ${({ animate }) =>
    animate
      ? css`
          ${blinkScore} 1s
        `
      : "none"};
`;

const blinkScore = keyframes`
0% {  opacity: 1; }
50% {  opacity: 0; }
100% {  opacity: 1; }
`;
