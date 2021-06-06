/**
 * file: OPENWEATHERMAP API 
 * date: 2021-06-06
 * author: Jubi
 * lastModify: Jubi 2021-06-06
 */
 import axios from 'axios';

 const baseURL = 'https://api.openweathermap.org/data/2.5';

 const OpenWeatherMap = axios.create({
    baseURL,
 })

 const enrichRequest = (config) => {
    config.params.appid = process.env.API_KEY
    config.params.units = 'metric'
    return config
 }

 OpenWeatherMap.interceptors.request.use( enrichRequest )

 export default OpenWeatherMap;

 