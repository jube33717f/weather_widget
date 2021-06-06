/**
 * file: Weather (7 days forecast component format )
 * date: 2021-06-06
 * author: Jubi
 * lastModify: Jubi 2021-06-06
 */
import React from 'react';
import style from './style.module.scss';
import Temperature from '../Temperature';
import { useSelector } from 'react-redux';

const Weather = ({
  day,
  temperature,
  weather,
}) => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const isCelcius = useSelector(state=>state.unit_reducer)
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    return (<div  className={style.weather}>
        <h3  className={style.day}>{day}</h3>
        <img 
          data-testid="WEATHER_ICON"
          className={style.icon}
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
          alt={weather.description} 
        />
        <div className={style.temperature}>
          <Temperature>{isCelcius?temperature:parseInt(temperature*1.8)+32}</Temperature>
        </div>
        <div>
            dew {weather.dew_point}
        </div>
      </div>)

};

export default Weather;