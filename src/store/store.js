/**
 * file: Project Router File
 * date: 2021-06-05
 * author: Jubi
 * lastModify: Jubi 2021-06-05
 */
import { combineReducers, createStore } from 'redux';
import city_reducer from './cityModule/reducer';
import unit_reducer from './unitsModule/reducer'
const reducer = combineReducers({
    city_reducer,unit_reducer 
});

export default createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);