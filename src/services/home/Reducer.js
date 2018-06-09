import { USER_EMAIL_ID, USER_PASSWORD, LOGIN_SUCCESS,LOGIN_FAIL,LOADER } from './Constants';

const initialState = {
  emailId:"",
  password:"",
}

export default function EmpDataReducer(state=initialState, action) {
    switch (action.type) {
      case USER_EMAIL_ID:
        return {
          ...state,
          emailId: action.emailData
  
        }
      case USER_PASSWORD:
        return {
          ...state,
          password: action.passwordData
  
        }
      default:
        return state
    }
} 