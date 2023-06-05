import styled from "styled-components";
import { Level } from "../data/level";
import { useRecoilState, useSetRecoilState } from "recoil";
import { cardsNumData, nowLevelData, scoreData } from "../recoil/atoms";
// 카드 데이터 가지고 오기
import { EasyVersion, NormalVersion, HardVersion } from "../utils/ShuffledCard";

const LevelContainer = () => {
  const [nowLevel, setNowLevel] = useRecoilState(nowLevelData);
  const setScore = useSetRecoilState(scoreData);
  const setCardsNum = useSetRecoilState(cardsNumData);

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
  return (
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
  );
};

export default LevelContainer;

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
