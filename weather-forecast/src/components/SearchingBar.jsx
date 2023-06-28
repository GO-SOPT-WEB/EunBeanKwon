/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const SearchingBar = () => {
  const navigate = useNavigate();
  const [area, setArea] = useState("")
  const [dayWeek, setDayWeek] = useState("");

  const handleSelectChange = (e) => {
    setDayWeek(e.target.value);
    navigate(`/${e.target.value}`);
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    submitArea();
  }

  const handleChange = (e) => {
    setArea(e.target.value);
  }

  const submitArea = () => {
    navigate(`/${dayWeek}/${area}`);
  };

  useEffect(() => {
    console.log(dayWeek)
    handleSelectChange;
  }, [dayWeek])

  return (
    <>
    <St.Form onSubmit={(e)=>handleSubmit(e)}>
        <select value={dayWeek} onChange={(e)=>handleSelectChange(e)}> 
          <option value="day"> 오늘 </option>
          <option value="week"> 이번주 </option>
        </select>
        <input 
          type="text"
          value={area}
          placeholder="영어 도시명 ex)suwon"
          onChange={handleChange}>
        </input>
        <button type="submit" onClick={()=>submitArea()}> 날씨 검색 </button>
    </St.Form>
    </>
  )
}

export default SearchingBar;

const St = {

  Form : styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: ${(props)=>props.theme.beige};

  > select {
    width: 9rem;
    height: 3rem;
    margin: 0rem 1rem;
    text-align: center;
    border: 0.2rem solid ${(props)=>props.theme.muteGreen};
    border-radius: 0.5rem; 
    font-size: 2rem;
  }

  > input {
    width: 26rem;
    height: 5rem;
    border: none;
    border-radius: 1rem;
    background-color: ${(props)=>props.theme.lightGreen};

    &::placeholder { // 앞에 & 꼭...
    text-align: center;
    font-size: 1.8rem;
    }
  
    &:focus {
      outline: none;
    }
  } 

  > button {
    height: 5.2rem;
    background-color: ${(props)=>props.theme.muteGreen};
    margin-left: 1rem;
    border-radius: 1rem;
    color: ${(props)=>props.theme.backgroundColor};
    font-size: 2rem;
  `};
