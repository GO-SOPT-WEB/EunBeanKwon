import React from 'react'
import { styled } from 'styled-components'

const Header = () => {
  return (
    <>
        <StHeader> 비니의 일기예보 ☔️ </StHeader>
    </>
  )
}

export default Header

const StHeader = styled.header`
    font-size: 4rem;
    font-weight: 600;
    padding: 3rem 2rem;
    background-color: ${(props) => props.theme.darkBeige};
    color: ${(props) => props.theme.backgroundColor};
`