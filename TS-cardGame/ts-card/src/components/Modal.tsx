import { useRecoilState } from 'recoil';
import Portal from './Portal';
import styled from 'styled-components';
import { modalOnData } from '../recoil/atoms';

const Modal = () => {
    const [modalOn, setModalOn] = useRecoilState(modalOnData);

    const ModalClose = () => {
        setModalOn(false);
        location.reload();
    };

    return (
        <>
            <Portal>
                <Background modalOn={modalOn}>
                    <StModal>
                        <h1>mamma mia!</h1>
                        <StCloseBtn onClick={() => ModalClose()}>게임으로 돌아가기</StCloseBtn>
                    </StModal>
                </Background>
            </Portal>
        </>
    );
};

export default Modal;

const Background = styled.div<{ modalOn: boolean }>`
    display: ${(props) => (props.modalOn ? 'flex' : 'none')};
    z-index: 999;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const StModal = styled.div`
    display: flex;
    width: 60vw;
    height: 20vh;

    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 2rem;

    position: relative;
    text-align: center;
    background-color: ${({ theme }) => theme.color.yellow};
    > h1 {
        font-weight: 800;
        font-size: 2.6rem;
        color: ${({ theme }) => theme.color.red};
    }
`;

const StCloseBtn = styled.button`
    background-color: ${({ theme }) => theme.color.deepBlue};
    border-radius: 10rem;
    padding: 0rem 2rem;
    height: 5vh;
    color: ${({ theme }) => theme.color.white};
`;
