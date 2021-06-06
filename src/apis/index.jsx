/**
 * file: Project APIS File
 * date: 2021-06-05
 * author: Jubi
 * lastModify: Jubi 2021-06-05
 */

import OpenWeatherMap from '../config/OpenWeatherMap'



export const getForecast =(lat, lon)=>
    OpenWeatherMap.get(`/onecall`,{
        params:{
            lat: lat,
            lon: lon,
            exclude:'minutely,hourly'
        }
    })


export const getWeatherByCity=(city)=>
    OpenWeatherMap.get(`/weather`,{
        params:{
            q:city
        }
    })
export const getWeatherByGeo =(lat,lon)=>
    OpenWeatherMap.get(`/weather`,{
        params:{
            lat:lat,
            lon:lon
        }
    })

