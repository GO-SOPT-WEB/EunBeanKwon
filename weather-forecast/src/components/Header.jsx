/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <>
        <St.Header> 비니의 일기예보 ☔️ </St.Header>
    </>
  )
}

export default Header

const St = {
  Header : styled.header`
    width: 100%;
    height: 100%;

    font-size: 4rem;
    font-weight: 600;

    padding: 3rem 2rem;
    
    background-color: ${(props) => props.theme.darkBeige};
    color: ${(props) => props.theme.backgroundColor};
`,
};