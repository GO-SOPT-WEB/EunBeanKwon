import styled from "styled-components"

const CardGame = () => {
  return (
    <>    
    <HeaderStyled>
        <p> Match the MARIO! 🍄 </p>
    </HeaderStyled>
    <GameContainerStyled>
    </GameContainerStyled>
    </>
  )
}

export default CardGame;

const HeaderStyled = styled.header`
    height: 21vh;
    display: flex;
    flex-direction: column;

    > p {
    color:#FC233A;
    font-size: 2rem;
    margin-top: 2rem; 
    text-align: center;
    }
`

const GameContainerStyled = styled.section`
    min-height: 100vh;
    background-color: #005FAE;
`
