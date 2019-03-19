import { LOAD_COUPON, ACTIVE_COUPON, DELETE_COUPON } from './constants/action-types';

const initialStateCP = {
  coupon: [],
  activeC: '1'
}

const loadCoupon = (state = initialStateCP, action) => {
  switch (action.type) {
    case LOAD_COUPON:
      return { ...state, coupon: action.payload };
      break;
  
    case ACTIVE_COUPON: 
      return {...state, activeC: action.payload};
      break;

    default:
      return state;
      break;
  }
}

export default loadCoupon