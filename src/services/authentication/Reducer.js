import { USER_EMAIL_ID, USER_PASSWORD, LOGIN_SUCCESS,LOGIN_FAIL,LOADER } from './Constants';

const initialState = {
  emailId:"",
  password:"",
  userData:"",
  errorMessage:""
}

export default function AuthenticatioReducer(state=initialState, action) {
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
        case LOGIN_SUCCESS:
        return {
          ...state,
          userData: action.userData,
          errorMessage: action.message
  
        }
        case LOGIN_FAIL:
        return {
          ...state,
          userData: action.userData,
          errorMessage: action.message
        }

        case LOADER:
        return {
          ...state,
          isLoading: action.isLoading,
        }
      default:
        return state
    }
} 