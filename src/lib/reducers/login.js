import { STORE_TOKEN, LOGIN_MESS } from './constants/action-types';


const initialStateNav = {
  token: '',
  loginMsg: ''
};

const login = (state = initialStateNav, action) => {
  switch (action.type) {
    case STORE_TOKEN:
      return {...state, token: action.payload.token }
    break;
    case LOGIN_MESS:
      return { ...state, loginMsg: action.payload };
    break;
    default:
      return state;
      break;
  }
}
export default login