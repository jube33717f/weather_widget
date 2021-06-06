/**
 * file: Home File
 * date: 2021-06-06
 * author: Jubi
 * lastModify: Jubi 2021-06-06
 */
import React from 'react'
import style from './style.module.scss'
import CurrentWeather from '../../components/CurrentWeather';
import Forecast from '../../components/Forecast';

const HomePage = ()=>{

    return <div className={style.wrapper}>
        <div className={style.weather}>
            <div className={style.header}>
                <CurrentWeather />
            </div>
            <div className={style.content}>
                
                <Forecast />
            </div>

        </div>
    </div>
}

export default HomePage;