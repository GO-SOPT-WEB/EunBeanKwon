import styled from "styled-components";
import QuestionBox from "../assets/imgs/QuestionBox.png"
import { useEffect } from "react";

const SingleCard = ({card, cardClicked, flipped, disabled}) => {

    const handleClick = () => {
        if (!disabled) {
            cardClicked(card);
        }
    }


useEffect(()=> {
}, [card])

    return (
    <>
        <OverlapCard
            className={flipped ? "flipped":""}> 
            <StFrontCard>
                <div >
                    <p> {flipped} </p>
                    <img
                        src={card.src}
                        alt={card.alt}
                        id={card.id}>
                    </img>
                </div>
            </StFrontCard>
            <StBackCard>
                <div>
                    <p> {flipped} </p>
                    <img 
                        onClick={handleClick}
                        src={QuestionBox}
                        alt="물음표박스" /> 
                </div>
            </StBackCard>
        </OverlapCard>
    </>
  )
}

export default SingleCard;


const OverlapCard = styled.div`
    width: 12rem;
    height: 18rem;
    position: relative;
    perspective: 4rem;
    padding: 1rem 1rem;
    transition: 0.4s;
    transform-style: preserve-3d;
    :hover {
        cursor: pointer;
    }
    &.flipped {
        transform: rotateY(180deg);
    }
`

const StFrontCard = styled.div `
    width: 12rem;
    height: 18rem;
    position: absolute;
    display: flex;
    justify-content: center;

    border-radius: 2rem;

    background-color:${({theme}) => theme.color.yellow};
    box-shadow: 0.3rem 0.3rem ${({theme}) => theme.color.blue};

    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform 0.3s ease-out;

    div {
        display: flex;
        background-color:${({theme}) => theme.color.blue};
        border-radius: 2rem;
        width: 9rem;
        height: 14rem;
        margin-top: 2rem;
        
    }
     img {
        width: 7rem;
        object-fit: contain;
        margin: 0 auto;
}
`

const StBackCard = styled.div `
    display: flex;
    width: 12rem;
    height: 18rem;
    position: absolute;
    justify-content: center;

    border-radius: 2rem;

    background-color:${({theme}) => theme.color.yellow};
    box-shadow: 0.3rem 0.3rem ${({theme}) => theme.color.blue};

    backface-visibility: hidden;
    transition: transform 0.3s ease-out;    

    div {
        display: flex;
        width: 9rem;
        height: 14rem;

        background-color: ${({theme}) => theme.color.blue};
        
        border-radius: 2rem;
        margin-top: 2rem;
        
    }
     img {
        width: 7rem;
        margin: 0 auto;
        object-fit: contain;
}
`