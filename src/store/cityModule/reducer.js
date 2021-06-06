/**
 * file: Project Router File
 * date: 2021-06-05
 * author: Jubi
 * lastModify: Jubi 2021-06-05
 */
/************* city_reducer *************/
import * as actionType from  './type'

const initial_city={
    city:'Sydney',
    lat:'-33.8679',
    lon:'151.2073'
}
const city_reducer = (state = initial_city , action)=>{
    switch(action.type){
        case actionType.REFRESH_CITY:
            return action.city;
        default:
            return state
    }
}
export default city_reducer;