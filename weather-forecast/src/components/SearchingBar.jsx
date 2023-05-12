/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SearchingBar = () => {
  const navigate = useNavigate();
  const [area, setArea] = useState("Suwon")
  const [dayWeek, setDayWeek] = useState("day");

  const handleSelectChange = (e) => {
    setDayWeek(e.target.value);
    console.log(dayWeek)
  }

  const handleSubmit= (e) => {
    console.log(dayWeek)
    e.preventDefault();
    if( dayWeek === "day") {
      setDayWeek("day")
    } else  {
      setDayWeek("week")
    }
  }

  const handleChange = (e) => {
    setArea(e.target.value);
  }

  const submitArea = () => {
    navigate(`/${dayWeek}/${area}`);
  };

  useEffect(() => {
    setDayWeek, setArea
  }, [dayWeek, area])

  return (
    <>
    <St.Form onSubmit={handleSubmit}>
        <St.SelectBox value={dayWeek} onChange={handleSelectChange}> 
          <St.SelectBoxOptions value="day"> 오늘 </St.SelectBoxOptions>
          <St.SelectBoxOptions value="week"> 주간 </St.SelectBoxOptions>
        </St.SelectBox>
        <St.InputBox 
          type="search" 
          placeholder="영어 도시명 ex)suwon"
          onChange={handleChange}>
        </St.InputBox>
        <St.SearchBtn type="submit" onClick={()=>submitArea()}> 날씨 검색 </St.SearchBtn>
    </St.Form>
    </>
  )
}

export default SearchingBar;

const St = {
  Form : styled.form`
  width: 100%;
  height: 100%;
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
