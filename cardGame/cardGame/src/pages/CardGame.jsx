import styled from "styled-components"
import { useState } from "react";
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

  const [scores, setScore]=useState(0);

    // 버튼 클릭 시 색 바뀌게
  const [cardsNum, setCardsNum] = useState(EasyVersion)
  const [nowLevel, setNowLevel] = useState("EASY")

  const ClickedLv = (e) => {
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

  return (
    <>
    {/* <Modal /> */}
    <ResetBtn />
    <StHeader>
        <p> Match the MARIO! 🍄 </p>
        <StScore> 1/5 </StScore>
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
          cardsNum={cardsNum} />
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

const StScore = styled.div`
  color:${({theme}) => theme.color.green};
  font-size: 2.6rem; 
  text-align: center;
  font-weight: 600;
  margin-top: 1.5rem;
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