/**
 * file: Forecast File (7 days forecast )
 * date: 2021-06-06
 * author: Jubi
 * lastModify: Jubi 2021-06-06
 */
 import React,{useState,useEffect} from 'react'
 import style from './style.module.scss'
 import Weather from '../Weather';
 import { useDispatch, useSelector } from 'react-redux';
 import { getForecast } from '../../apis'
 import AcUnitIcon from '@material-ui/icons/AcUnit';
 import Button from '@material-ui/core/Button';

const Forecast = () => {
    /* <------------------------------------ **** HOOKS START **** ------------------------------------ */
    const city  = useSelector(state => state.city_reducer)
    const isCelcius = useSelector(state=>state.unit_reducer)
    const dispatch = useDispatch()
    const [data, setData] = useState(null)
    const [loading , setLoading] = useState(true)
    useEffect(()=>{
        fetchForecastByCityData()
    },[])
    /* <------------------------------------ **** HOOKS END**** ------------------------------------ */
    /* <------------------------------------ **** FUNCTION START **** ------------------------------------ */
    const day = new Date().getDay()
    /************* Fetch next 7 days forecast by lat & lon *************/
    const fetchForecastByCityData=async()=>{
        const req = await getForecast(city.lat,city.lon)

        if(req.status === 200){
            
            let collection = req.data.daily
            collection.shift()
            collection = collection.map (e=>{
                return {
                    dew_point:e.dew_point,
                    temp:parseInt(e.temp.day),
                    icon:e.weather[0].icon
                }

            })
            setData(collection)
            setLoading(false)
        }
        
    }
    /************* return weekday string *************/
    const  getDateDay=(da)=>{
        let day_ = parseInt(da) % 7
        switch(day_){
            case 0: return 'SUN';
            case 1: return 'MON';
            case 2: return 'TUE';
            case 3: return 'WED';
            case 4: return 'THU';
            case 5: return 'FRI';
            case 6: return 'SAT'
            default: return 'SUN'
        }
    }
    /************* Update unit reducer *************/
    const changeUnit = ()=>{
        let update = !isCelcius
        dispatch({
            type:'CHANGE_UNITS',
            payload:update 
        })
    }
    /* <------------------------------------ **** FUNCTION END **** ------------------------------------ */
    return (<div data-testid="FORECAST" className={style.forecast}>

            <h2 className={style.header}>Forecast
                <Button onClick={changeUnit}><AcUnitIcon style={{color:'#3f51b5'}}/>{isCelcius?'change to Fahrenheit':'change to Celcius'}</Button></h2>
        <div className={style.weathers}>
        {loading ? (
          <div className={style.left}>
            <div className={style.loading}>Loading...</div>
          </div>
        ) :<>
        {data.map((e,index)=>
            <Weather
            day={getDateDay(day+index+1)}
            temperature={e.temp}
            weather={{ icon: `${e.icon}`, dew_point: `${e.dew_point}` }} 
            />
        )}
       </>}
        </div>
    </div>)
};

export default Forecast;