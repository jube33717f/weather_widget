/**
 * file: Project Router File
 * date: 2021-06-05
 * author: Jubi
 * lastModify: Jubi 2021-06-05
 */
/************* change unit action *************/
 import * as types from './type';

 export const update_Units = (update) => ({
   type: types.CHANGE_UNITS ,
   payload:update
   
 });
 