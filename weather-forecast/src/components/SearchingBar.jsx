/* eslint-disable no-unused-vars */
import React from 'react'
import { styled } from 'styled-components';

const SearchingBar = () => {
  return (
    <>
    <St.Container>
        <St.SelectBox> 
          <St.SelectBoxOptions value={"오늘"}> 오늘 </St.SelectBoxOptions>
          <St.SearchBtnSelectBoxOptions value={"주간"}> 주간 </St.SelectBoxOptions>
        </St.SelectBox>
        <St.InputBox 
          type="search" 
          placeholder="영어로 도시명 ex)suwon">

        </St.InputBox>
        <St.SearchBtn type="submit"> 날씨 검색 </St.SearchBtn>
    </St.Container>
    </>
  )
}

export default SearchingBar;

const St = {
  Container : styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(props)=>props.theme.beige};
`,

  SelectBox : styled.select`
  margin: 0rem 1rem;
  border-radius: 0.4rem;
  font-size: 2rem;
  height: 3rem;
`,

  SelectBoxOptions : styled.option`
  
` ,

  InputBox : styled.input`
    border: none;
    height: 5rem;
    width: 26rem;
    border-radius: 1rem;
    background-color: ${(props)=>props.theme.lightGreen};

    ::placeholder { // 왜 안돼
      color: #999;
      font-style: italic;
    }
` ,
  SearchBtn : styled.button`
    background-color: ${(props)=>props.theme.muteGreen};
    margin-left: 1rem;
    height: 5.2rem;
    border-radius: 1rem;
    color: ${(props)=>props.theme.backgroundColor};
    font-size: 2rem;
`,
  };
