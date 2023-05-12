import { styled } from 'styled-components'
import axios from "axios";
import { WEATHER_TYPE } from '../data/weatherImg'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const WeekSection = () => {
  // 주간 데이터


  const {area} = useParams();
  const [weekWeather, setWeekWeather] = useState(
    [{
      id: 0,
      date: "",
      weather: "",
      temp: 0.0,
      feels_like: 0.0,
      temp_min: 0.0,
      temp_max: 0.0,
      clouds: 0.0,
    }]);

  return (
    <>
      {weekWeather.map((data, idx) => (
        <St.MockCard key={idx}>
          <St.DayHeader>
              <h3>{data.date}</h3>
          </St.DayHeader>

          <img src={data.weather_img_url} alt={data.weather_description} />
          <div>
              <span> 온도 </span>
              <p> {data.temp} </p>
          </div>
          <div>
              <span> 체감 온도 </span>
              <p> {data.feels_like}</p>
          </div>
          <div>
              <span> 최저 / 최고 </span>
              <p> {data.temp_max} / {data.temp_min} </p>
          </div>
          <div>
              <span> 구름 </span>
              <p> {data.clouds}% </p>
          </div>
    </St.MockCard>  
      ))}
    </>
  )
}

export default WeekSection


const St = {

  DayHeader : styled.header`
      height: fit-content;
      font-size: 5rem;
      color: ${(props) => props.theme.backgroundColor};
  `,
  
   MockCard : styled.article `
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: center;
      width: 24rem;
      height: 40rem;
      border-radius: 1rem;
      background-color: ${(props) => props.theme.muteGreen};
      padding: 2rem 1rem;
      margin: 1rem;
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
          font-size: 2.3rem;
          font-weight: 600;
          >span {
              text-align: start;
          }
          >p {
              text-align: end;
          }
      }
      `,
};