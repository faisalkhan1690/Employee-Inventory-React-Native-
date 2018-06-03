import { libraryState } from './Action';
import { USER_EMAIL_ID, USER_PASSWORD, LOGIN } from './Constants';


const initialState = {
  emailId:"",
  password:""
}

export default function AuthenticatioReducer(state=initialState, action) {
    switch (action.type) {
      case USER_EMAIL_ID:
        return {
          ...state,
          emailId: action.emailData,
  
        }
      default:
        return state
    }
} 