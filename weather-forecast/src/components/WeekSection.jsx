import { styled } from 'styled-components'
import axios from "axios";
import { WEATHER_TYPE } from '../data/weatherImg'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const WeekSection = () => {
  // 주간 데이터
  const {area} = useParams();
  const [isLoading, setIsLoading] = useState(false);
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

const getWeekWeather = async() => {
  let WeatherData = []; 
  try {
    setIsLoading(true);
    await axios
      .get(`https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric
      `)
      .then((res) => res.data)
      .then((data)=> {
        if(data.cod == 200) {
          data.list
          // 5일 간의 오후 3시 날씨
          .filter((item, idx) => [2, 10, 18, 26, 34].includes(idx))
          .map((data, idx) => {
            //   날짜 세팅
            //UTC와 대한민국 표준 시간 차 초단위로 빼기 (9 * 60 * 60)
            const date = new Date((data.dt - 9 * 60 * 60) * 1000);
            const month = date.getMonth()+1;
            const day = date.getDate();
            const dateString = `${month}월 ${day}일`;
            WeatherData.push({
              id: idx,
              date: dateString,
              weather_description: data.weather[0].description,
              weather_img_url: WEATHER_TYPE.filter(
                (weather) => weather.description === data.weather[0].description
              )[0].imgURL,
              temp: data.main.temp,
              feels_like: data.main.feels_like,
              temp_min: data.main.temp_min,
              temp_max: data.main.temp_max,
              clouds: data.clouds.all,

            });
          });
          setWeekWeather(WeatherData);
        }
      })
} catch (err) {
  console.log(err)
}
  setIsLoading(false);
}


useEffect(() => {
  getWeekWeather();
}, [area])

  return (
    <>
    {isLoading?(
      <>
      {weekWeather.map((data, idx) => (
        <St.MockCard key={idx}>
        <h3 className='skeleton-title'></h3>
          <img className='skeleton-img'/>
          <div className='skeleton-div'>
              <span className='skeleton-span'>  </span>
              <p className='skeleton-p'> </p>
          </div>
          </St.MockCard>
      ))}
      </>
    ):(
    <>
    {weekWeather.map((data, idx) => (
      <St.MockCard key={idx}>
        <h3>{data.date}</h3>
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
      )}
    </>
  )
}

export default WeekSection


const St = {
   MockCard : styled.article `
   display: flex;
   width: 24rem;
   height: 40rem;
   margin: 1rem;
   flex-flow: column wrap;
   justify-content: space-around;
   align-items: center;
   border-radius: 1rem;
   background-color: ${(props) => props.theme.muteGreen};
   padding: 2rem 1rem;
      > h3 {
        height: fit-content;
        font-size: 4rem;
        color: ${(props) => props.theme.backgroundColor};
      }
      > img {
          height: 17rem;
          object-fit: contain;
          border-radius: 1rem;
      }
      > div {
          display: flex;
          width: 17rem;
          justify-content: space-between;
          font-size: 2.3rem;
          font-weight: 600;
          >span {
              text-align: start;
          }
          >p {
              text-align: end;
          }
      }

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }
    .skeleton-title {
      width: 12rem;
      height: 4rem;
      background: ${(props) => props.theme.lightgrey};
      overflow: hidden;
      position: relative;
    }

    .skeleton-title::before {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        animation: skeleton-gradient 1.5s infinite ease-in-out;
  }


    .skeleton-img {
      width: 14rem;
      height: 14rem;
      background: ${(props) => props.theme.lightgrey};
      margin: 2rem 2rem;
      overflow: hidden;
      position: relative;
    }

        .skeleton-img::before {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        animation: skeleton-gradient 1.5s infinite ease-in-out;
    }

    .skeleton-div {
          width: 14rem;
          height: 14rem;
          background: ${(props) => props.theme.lightgrey};
          overflow: hidden;
          position: relative;
    }

    .skeleton-div::before {
        width: 100%;
        height: 100%;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        animation: skeleton-gradient 1.5s infinite ease-in-out;
    }   
      `,
};