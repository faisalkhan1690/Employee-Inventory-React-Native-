import { USER_EMAIL_ID, USER_PASSWORD } from './Constants';

export const emailState = (emailID) => {
    return{
      type: USER_EMAIL_ID,
      emailData: emailID
  };
};

export const passwordState = (password) => {
  return{
    type: USER_PASSWORD,
    passwordData: password
  };
};