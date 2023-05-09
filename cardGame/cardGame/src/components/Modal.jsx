import Portal from "./Portal";
import styled from 'styled-components';

const Modal = ({modalOn, setModalOn}) => {

  const modalClose = () => {
    setModalOn(false);
}

    return (
        <>
        <Portal>
            <Background>
                <StModal>
                    <h1>mamma mia!</h1>
                    <StCloseBtn onClick={()=>modalClose()}>게임으로 돌아가기</StCloseBtn>
                </StModal>
            </Background>
        </Portal>
        </>
    )
}

export default Modal

const Background = styled.div`
    display: ${(props) => (props.modalOn ? 'flex':'none')};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.5);
`

const StModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 2rem;
    position: relative;
    width: 60vw;
    height: 20vh;
    text-align: center;
    background-color: ${({theme}) => theme.color.yellow};
     > h1 {
        font-weight: 800;
        font-size: 2.6rem;
        color: ${({theme}) => theme.color.red};
    }
`

const StCloseBtn = styled.button`
 display : ${(props) => (props.modalOn ? "flex" : "none")};    border-radius: 10rem;
    padding: 0rem 2rem;
    height: 5vh;
    color: ${({theme}) => theme.color.white};
`