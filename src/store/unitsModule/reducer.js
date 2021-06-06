/**
 * file: Project Router File
 * date: 2021-06-05
 * author: Jubi
 * lastModify: Jubi 2021-06-05
 */
/************* unit_reducer *************/
 import * as actionType from  './type'

 const initial_unit= true
 
 const unit_reducer = (state = initial_unit, action)=>{
     console.log(action)
     switch(action.type){
         case actionType.CHANGE_UNITS:
             return action.payload;
         default:
             return state
     }
 }
 export default unit_reducer;