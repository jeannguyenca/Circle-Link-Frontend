import { SUBMIT_REG } from './constants/action-types';

const initialStateReg = {
  name: '',
  address: '',
  email: '',
  password: '',
  avatarURL: '',
  password2: ''
}

const register = (state = initialStateReg, action ) => {
  switch (action.type) {
    case SUBMIT_REG:
      return { ...state, password2: action.payload.password2 }
    break;

    default:
      return state;
    break;
  }
}


export default register