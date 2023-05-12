import { styled } from 'styled-components'
import { WEATHER_TYPE } from '../data/weatherImg'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DaySection = () => {
  const {area} = useParams();
  const [dayWeather, setDayWeather] = useState(
    {
      id: 0,
      name: "",
      weather: "",
      temp: 0.0,
      feels_like: 0.0,
      temp_min: 0.0,
      temp_max: 0.0,
      clouds: 0.0,
    });
    
  const getDayWeather = () => {
  // 일간 데이터
    axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${import.meta.env.VITE_APP_WEATHER}&units=metric`)
        .then((res) => res.data)
        .then((data)=> {
            if(data.cod == 200) {
                console.log(data)
                setDayWeather(
                          {
                            id: 0,
                            name: data.name,
                            weather_description: data.weather[0].description,
                            weather_img_url: WEATHER_TYPE.filter(
                              (weather) => weather.description === data.weather[0].description
                            )[0].imgURL,
                            temp: data.main.temp,
                            feels_like: data.main.feels_like,
                            temp_min: data.main.temp_min,
                            temp_max: data.main.temp_max,
                            clouds: data.clouds.all,
                          })
                }
            })
        }

    useEffect(() => {
      getDayWeather();
    }, [area])

    if(dayWeather) {
        console.log(dayWeather)
        return (
                <St.MockCard>
                    <h3>{dayWeather.name}</h3>
                    <img src={dayWeather.weather_img_url} alt={dayWeather.weather_description} />
                    <div>
                        <span> 온도 </span>
                        <p> {dayWeather.temp} </p>
                    </div>
                    <div>
                        <span> 체감 온도 </span>
                        <p> {dayWeather.feels_like}</p>
                    </div>
                    <div>
                        <span> 최저 / 최고 </span>
                        <p> {dayWeather.temp_max} / {dayWeather.temp_min} </p>
                    </div>
                    <div>
                        <span> 구름 </span>
                        <p> {dayWeather.clouds}% </p>
                    </div>
                </St.MockCard>
            )
        }
    else {
        return (
            <h1> Loading ... </h1>
        )
    }
  }

export default DaySection

const St = {

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
    > h3 {
        height: fit-content;
        font-size: 4rem;
        color: ${(props) => props.theme.backgroundColor};
    }
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