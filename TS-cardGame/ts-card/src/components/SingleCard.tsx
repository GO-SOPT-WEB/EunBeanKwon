import styled from 'styled-components';
import QuestionBox from '../assets/imgs/QuestionBox.png';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { CardInfo, disabledData, firstCardData, secondCardData } from '../recoil/atoms';

interface SingleCardProps {
    card: CardInfo;
}

const SingleCard = ({ card }: SingleCardProps) => {
    const disabled = useRecoilValue(disabledData);
    const [firstCard, setFirstCard] = useRecoilState(firstCardData);
    const [secondCard, setSecondCard] = useRecoilState(secondCardData);

    // 카드 뒤집기
    const flipped = card === firstCard || card === secondCard || card.matched;

    // 카드 클릭시 첫번째로 클릭한 카드, 두번째로 클릭한 카드 넣어주기
    const cardClicked = (card: CardInfo) => {
        firstCard ? setSecondCard(card) : setFirstCard(card);
    };

    useEffect(() => {}, [cardClicked]);

    // 카드 클릭했을 때 클릭된 카드면 선택 불가 상태되게
    const handleClick = () => {
        if (!disabled) {
            cardClicked(card);
        }
    };

    return (
        <>
            <OverlapCard className={flipped ? 'flipped' : ''}>
                <StFrontCard>
                    <div>
                        <p> {flipped} </p>
                        <img src={card.src} alt={card.alt}></img>
                    </div>
                </StFrontCard>
                <StBackCard>
                    <div>
                        <p> {flipped} </p>
                        <img onClick={handleClick} src={QuestionBox} alt="물음표박스" />
                    </div>
                </StBackCard>
            </OverlapCard>
        </>
    );
};

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
`;

const StFrontCard = styled.div`
    width: 12rem;
    height: 18rem;
    position: absolute;
    display: flex;
    justify-content: center;

    border-radius: 2rem;

    background-color: ${({ theme }) => theme.color.yellow};
    box-shadow: 0.3rem 0.3rem ${({ theme }) => theme.color.blue};

    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform 0.3s ease-out;

    div {
        display: flex;
        background-color: ${({ theme }) => theme.color.blue};
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
`;

const StBackCard = styled.div`
    display: flex;
    width: 12rem;
    height: 18rem;
    position: absolute;
    justify-content: center;

    border-radius: 2rem;

    background-color: ${({ theme }) => theme.color.yellow};
    box-shadow: 0.3rem 0.3rem ${({ theme }) => theme.color.blue};

    backface-visibility: hidden;
    transition: transform 0.3s ease-out;

    div {
        display: flex;
        width: 9rem;
        height: 14rem;

        background-color: ${({ theme }) => theme.color.blue};

        border-radius: 2rem;
        margin-top: 2rem;
    }
    img {
        width: 7rem;
        margin: 0 auto;
        object-fit: contain;
    }
`;
