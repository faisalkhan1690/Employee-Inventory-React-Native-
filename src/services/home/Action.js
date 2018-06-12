import { USER_NAME, USER_PHONE_NUMBER,USER_SHIFT,USER_CREATE_USER,LOADER } from './Constants';

export const nameState = (name) => {
    return{
      type: USER_NAME,
      name: name
  };
};

export const phoneNumberState = (phoneNumber) => {
  return{
    type: USER_PHONE_NUMBER,
    phoneNumber: phoneNumber
  };
};

export const shiftState = (shift) => {
  return{
    type: USER_SHIFT,
    shift: shift
  };
};

export const createUser = (name,phoneNumber,shift) => {

  
  dispatch({
    type: LOADER,
    isLoading: true
  })  
  const firebase = require("firebase");
  const {providerData} =firebase.auth();
  
  firebase.auth()
  .push('users/')
  .then((result)=>{
          console.warn(result);
          console.warn('Login Successfully')
          dispatch({
            type: LOADER,
            isLoading: false
          })

          dispatch({
            type: LOGIN_SUCCESS,
            userData: result,
            message:"Login Successfully"
          })      
         
  })

  return{
    type: USER_CREATE_USER,
    shift: shift
  };
};
