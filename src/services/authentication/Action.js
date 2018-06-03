import { USER_EMAIL_ID, USER_PASSWORD, LOGIN } from './Constants';

export const emailState = (emailID) => (dispatch: any) => {
    dispatch({
      type: USER_EMAIL_ID,
      emailData: emailID
    })
}