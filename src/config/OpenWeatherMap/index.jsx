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
    config.params.appid = process.env.API_KEY?process.env.API_KEY:'e682527a758e6a7479a68de3d3461e1b'
    config.params.units = 'metric'
    return config
 }

 OpenWeatherMap.interceptors.request.use( enrichRequest )

 export default OpenWeatherMap;

 