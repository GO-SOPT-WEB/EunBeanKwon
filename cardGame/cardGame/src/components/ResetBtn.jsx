import styled from "styled-components"



const ResetBtn = () => {
  return (
    <StButton
      type="button"
      // 새로고침으로 카드 배열 전부 바꾸기
      onClick={()=> location.reload()}
    >
      Reset
    </StButton>
  )
}

export default ResetBtn

const StButton = styled.button`
  width: 8rem;
  height: 4rem;

  position: fixed;
  top: 4rem;
  right: 4rem;
  z-index: 999;

  background-color: ${({theme}) => theme.color.blue};
  border-radius: 1rem;

  font-size: 2rem;
  color: ${({theme}) => theme.color.white};
  text-align: center;

  box-shadow: 0.2rem 0.2rem ${({theme}) => theme.color.yellow};
`