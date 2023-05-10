/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from 'styled-components';

const SearchingBar = () => {
  return (
    <>
    <StContainer>
        <StSelectBox> 
          <StSelectBoxOptions value={"오늘"}> 오늘 </StSelectBoxOptions>
          <StSelectBoxOptions value={"주간"}> 주간 </StSelectBoxOptions>
        </StSelectBox>
        <StInputBox 
          type="search" 
          placeholder="영어로 도시명 ex)suwon">

        </StInputBox>
        <StSearchBtn type="submit"> 날씨 검색 </StSearchBtn>
    </StContainer>
    </>
  )
}

export default SearchingBar;

const StContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(props)=>props.theme.beige};
`

const StSelectBox = styled.select`
  margin: 0rem 1rem;
  border-radius: 0.4rem;
  font-size: 2rem;
  height: 3rem;
`

const StSelectBoxOptions = styled.option`
  
`

const StInputBox = styled.input`
  border: none;
  height: 5rem;
  width: 26rem;
  border-radius: 1rem;
  background-color: ${(props)=>props.theme.lightGreen};

  ::placeholder { // 왜 안돼
    color: #999;
    font-style: italic;
  }
`

const StSearchBtn = styled.button`
  background-color: ${(props)=>props.theme.muteGreen};
  margin-left: 1rem;
  height: 5.2rem;
  border-radius: 1rem;
  color: ${(props)=>props.theme.backgroundColor};
  font-size: 2rem;

  
`
