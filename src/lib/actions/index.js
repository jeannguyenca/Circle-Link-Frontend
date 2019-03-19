import { SUBMIT_REG, STORE_TOKEN, LOGIN_MESS, REG_MESS, 
        LOAD_COUPON, ACTIVE_COUPON, DELETE_COUPON,
        CREATE_COLLAB, CREATE_COUPON } from '../reducers/constants/action-types';


export const submitReg = data => ({ type: SUBMIT_REG, payload: data });
export const storeToken = token => ({ type: STORE_TOKEN, payload: token });
export const loginMess = logMsg => ({ type: LOGIN_MESS, payload: logMsg });
export const regMess = regMsg => ({ type: REG_MESS, payload: regMsg });



export const createCoupon = createC => ({ type: CREATE_COUPON, payload: createC });
export const loadCoupon = coupon => ({ type: LOAD_COUPON, payload: coupon });
export const activeCoupon = activeC => ({ type: ACTIVE_COUPON, payload: activeC });
export const deleteCoupon = deleteC => ({ type: DELETE_COUPON, payload: deleteC });

export const createCollab = createCol => ({ type: CREATE_COLLAB, payload: createCol });