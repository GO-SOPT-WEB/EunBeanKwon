import styled from "styled-components";
import QuestionBox from "../assets/imgs/QuestionBox.png"

const SingleCard = ({card, cardClicked, flipped, disabled, isOpen}) => {


    return (
    <>
        <OverlapCard
            className={flipped ? "flipped":""}>
            <StFrontCard>
                <div >
                    <img
                        src={card.src}
                        alt={card.alt}
                        id={card.id}>
                    </img>
                </div>
            </StFrontCard>
            <StBackCard>
                <div>
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
    width: 12rem;
    height: 18rem;
    position: absolute;
    display: flex;
    justify-content: center;

    border-radius: 2rem;

    background-color:${({theme}) => theme.color.yellow};
    box-shadow: 0.3rem 0.3rem ${({theme}) => theme.color.blue};

    backface-visibility: hidden;
    transition: transform 0.3s ease-out;    

    div {
        display: flex;
        background-color: ${({theme}) => theme.color.blue};
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