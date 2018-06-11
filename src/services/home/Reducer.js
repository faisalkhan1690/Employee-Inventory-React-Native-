import { USER_NAME, USER_PHONE_NUMBER,USER_SHIFT } from './Constants';

const initialState = {
  name:'',
  phoneNumber:'',
  shift:''
}

export default function EmpDataReducer(state=initialState, action) {
    switch (action.type) {
      case USER_NAME:
        return {
          ...state,
          name: action.name
  
        }
      case USER_PHONE_NUMBER:
        return {
          ...state,
          phoneNumber: action.phoneNumber
  
        }
      case USER_SHIFT:
        return {
          ...state,
          shift: action.shift
  
        }
      default:
        return state
    }
} 