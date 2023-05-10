/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from 'styled-components'
import { WEATER_TYPE } from '../data/weatherImg'

const WeatherSection = () => {

    console.log(WEATER_TYPE[0].imgURL)
  return (
    <StContainer>
        <StMockCard>
            <StDayHeader>
                <h3>05-10</h3>
            </StDayHeader>
            <img src={WEATER_TYPE[0].imgURL} alt="" />
            <div>
                <span> 온도 </span>
                <p> 17.65 </p>
            </div>
            <div>
                <span> 체감 온도 </span>
                <p> 17.18 </p>
            </div>
            <div>
                <span> 최저 / 최고 </span>
                <p> 17.65 / 17.65 </p>
            </div>
            <div>
                <span> 구름 </span>
                <p> 93% </p>
            </div>
        </StMockCard>
      
    </StContainer>
  )
}

export default WeatherSection

const StContainer = styled.section `
    display: flex;
    flex-flow: row wrap;
    width: 75vw;
    margin: 0 auto;
`

const StDayHeader = styled.header`
    height: fit-content;
    font-size: 5rem;
    color: ${(props) => props.theme.backgroundColor};
`


const StMockCard = styled.article `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    width: 24rem;
    height: 40rem;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.muteGreen};
    padding: 2rem 1rem;
    > img {
        /* width: 17rem; */
        height: 17rem;
        object-fit: contain;
        border-radius: 1rem;
    }
    > div {
        display: flex;
        justify-content: space-between;
        width: 17rem;
        font-size: 2.6rem;
        font-weight: 600;
        >span {
            text-align: start;
        }
        >p {
            text-align: end;
        }
    }
`