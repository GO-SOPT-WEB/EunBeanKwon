/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import SearchingBar from '../components/SearchingBar'
import WeatherSection from '../components/WeatherSection'
import axios from 'axios';



const MainPage = () => {
  const area="Suwon"
  axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
  .then(response => {
    // API 호출 결과를 이용한 작업 수행
    console.log(response.data);
  })
  .catch(error => {
    // 에러 처리
    console.error(error);
  });
  
  return (
    <>
        <Header />
        <SearchingBar />
        <WeatherSection />
    </>
  )
}

export default MainPage
