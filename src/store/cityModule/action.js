/**
 * file: Project Router File
 * date: 2021-06-05
 * author: Jubi
 * lastModify: Jubi 2021-06-05
 */
/************* change city action *************/
import * as types from './type';

export const update_City = (city) => ({
  type: types.REFRESH_CITY ,
  city:city,
});
