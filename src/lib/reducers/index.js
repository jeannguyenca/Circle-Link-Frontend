import { combineReducers } from 'redux';

import login from './login';
import register from './register';
import loadCoupon from './loadCoupon';


let rootReducer = combineReducers({
  login,
  register,
  loadCoupon
})

export default rootReducer;