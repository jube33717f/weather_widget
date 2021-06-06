/**
 * file: Current weather file  (current weather and search functionality)
 * date: 2021-06-05
 * author: Jubi
 * lastModify: Jubi 2021-06-05
 */
import React,{useState,useEffect} from 'react'
import classNames from 'classnames/bind';
import style from './style.module.scss'
import Temperature from '../Temperature'
import VerticalDivider from '../VerticalDivider'
import TextField from '@material-ui/core/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherByCity, getWeatherByGeo } from '../../apis'
import SearchIcon from '@material-ui/icons/Search';
const cx = classNames.bind(style);

const CurrentWeather =  ()=>{
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const dispatch = useDispatch();
    const isCelcius = useSelector(state=>state.unit_reducer)
    const [ data , setData ] = useState(null)
    const [ showInput , setShowInput ] =  useState(false)
    const [ latitude, setLatitude ]  = useState(-33.8679)
    const [ longitude, setLongitude ] = useState(151.2073)
    const [ loading, setLoading ] = useState(true)
    const [ inputCity, setInputCity ] = useState('')
    const [ error ,setError]=useState(false)

    useEffect(()=>{
        getPosition()
        if(latitude && longitude) fetchLocalWeatherData()
        
    },[])
    /* <------------------------------------ **** HOOKS END **** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    const date = (new Date()+'').slice(4,10)
    /************* Get current location latitude and longitude *************/
    const getPosition = async()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            setLatitude(lat)
            setLongitude(lon)
        },(err)=>{console.error(err)})


    }
    /************* Fetch current weather data  by lat & lon *************/
    const fetchLocalWeatherData = async()=>{
        
        const req = await getWeatherByGeo(latitude,longitude)
        if(req.status === 200){
            const collection = {
                city:req.data.name,
                description:req.data.weather[0].main,
                icon:req.data.weather[0].icon,
                wind:req.data.wind.speed+' kph SW',
                humidity:req.data.main.humidity+'%',
                temp:parseInt(req.data.main.temp),        
                pressure:req.data.main.pressure
            }
            setData(collection)
            const ob={
                city:req.data.name,
                lat:req.data.coord.lat,
                lon:req.data.coord.lon
            }
            setLoading(false)
            dispatch({
                type:'REFRESH_CITY',
                city:ob
            })
            
           
        }
         
    }
    /************* Fetch current weather data by city name *************/
    const fetchWeatherData=async ()=>{
        
        try{
            const req = await getWeatherByCity(inputCity)
            const collection = {
                city:req.data.name,
                description:req.data.weather[0].main,
                icon:req.data.weather[0].icon,
                wind:req.data.wind.speed+' kph SW',
                humidity:req.data.main.humidity+'%',
                temp:parseInt(req.data.main.temp),        
                pressure:req.data.main.pressure
            }
            setData(collection)
            const ob ={
                city:req.data.name,
                lat:req.data.coord.lat,
                lon:req.data.coord.lon
            }
            dispatch({
                type:'REFRESH_CITY',
                city:ob
            })
            setInputCity('')
            setShowInput(false)
            setError(false)
        }catch(e){
            setError(true)
        }
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return <div className={style.current}>
        {loading ? (
          <div className={style.left}>
            <div className={style.loading}>Loading...</div>
          </div>
        ) :<>
        <div className={style.left}>
            <div  className={style.temperature}>
                <Temperature>{isCelcius?`${data.temp}`:`${parseInt(data.temp*1.8)+32}`}</Temperature>
            </div>
            <div className={style.weather}>
                    <img 
                    data-testid="WEATHER_ICON"
                    className={style.icon}
                    src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} 
                    alt={data.description} 
                    />
                    <span className={style.text}>
                        {data.description} <span className={style.date}>{date}</span>
                    </span>
                    
            </div>
            <div className={style.metas}>
                <div className={style.pressure}>
                    <div className={style.meta}>
                        <span className={cx('text', 'title')}>
                            PRESSURE
                        </span>
                        <br />
                        <span className={cx('text', 'value')}>
                            {data.pressure}
                        </span>
                    </div>
                </div>
                
                <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)" />
                <div className={style.wind}>
                    <div className={style.meta}>
                        <span className={cx('text', 'title')}>
                            WIND
                        </span>
                        <br />
                        <span className={cx('text', 'value')}>
                            {data.wind}
                        </span>
                    </div>
                </div>
                
                <VerticalDivider width="2px" color="rgba(255, 255, 255, 0.7)" />
                <div className={style.humidity}>
                    <div className={style.meta}>
                        <span className={cx('text', 'title')}>
                            HUMIDITY
                        </span>
                        <br />
                        <span className={cx('text', 'value')}>
                            {data.humidity}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.right}>
            {!showInput?<><h1  className={style.city}>{data.city}</h1>
            <SearchIcon onClick={()=>{
                setShowInput(true)
            }}/></>:
            <TextField id="standard-basic" 
                className={style.cityInput} 
                label={error?<span style={{color:'red'}}>City not correct</span>:"Input a city"} value={inputCity} 
                onChange={(e)=>{setInputCity(e.target.value)}}
                onKeyDown={(e)=>{
                    if(e.keyCode === 13){
                        fetchWeatherData()
                    }
                }}
            />}
        </div>
        </>}
        <div className={style.bottom} />
    </div>

}
export default CurrentWeather;