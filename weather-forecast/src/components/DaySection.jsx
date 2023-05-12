import { styled } from 'styled-components'
import { WEATHER_TYPE } from '../data/weatherImg'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const DaySection = () => {
  const {area} = useParams();
  const [isLoading, setIsLoading] = useState(false);
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
    
  const getDayWeather = async() => {
  // 일간 데이터
  try{
    setIsLoading(true);
    await axios
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
        } catch (err) {
    console.log(err);
  }
  setIsLoading(false);
  }

  useEffect(() => {
    getDayWeather();
  }, [area])

    return (
        <>
        {isLoading?(
    <>
        <St.MockCard>
        <h3 className='skeleton-title'></h3>
          <img className='skeleton-img'/>
          <div className='skeleton-div'>
              <span className='skeleton-span'>  </span>
              <p className='skeleton-p'> </p>
          </div>
          </St.MockCard>
    </>
        ):(
    <>
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
    </>
        )}
        </>
        )
    }

export default DaySection

const St = {

 MockCard : styled.article `
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
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
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
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
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }   
`,
};