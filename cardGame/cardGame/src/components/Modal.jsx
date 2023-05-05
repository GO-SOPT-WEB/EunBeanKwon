import React, { useEffect, useState } from 'react'
import Portal from "./Portal";
import styled from 'styled-components';

const Modal = () => {
    const [modalOn, setModalOn] = useState(true);

    //  모달 창이 띄워지면 스크롤 금지
    useEffect(() => {
        //현재 위치에 고정
        document.body.style.cssText = `
            position: fixed;
            top: -${window.scrollY}rem;
            overflow-y: scroll;
            width: 100%;
        `;
        return () => {
            //  모달 사라지지면 style 코드 지우기
            const scrollY = document.body.style.top;
            document.body.style.cssText = '';
            window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
    }, []);

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
    display: none;
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
    background-color: ${({theme}) => theme.color.deepBlue};
    border-radius: 10rem;
    padding: 0rem 2rem;
    height: 5vh;
    color: ${({theme}) => theme.color.white};
`