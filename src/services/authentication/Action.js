import { USER_EMAIL_ID, USER_PASSWORD, LOGIN_SUCCESS,LOGIN_FAIL } from './Constants';

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

export const loginUser = (username,password) => (dispatch: any) => {

  const firebase = require("firebase");
  firebase.auth()
  .signInWithEmailAndPassword(username,password)
  .then((result)=>{
          console.warn(result);
          console.warn('Login Successfully')
          dispatch({
            type: LOGIN_SUCCESS,
            userData: result,
            message:"Login Successfully"
          })      
  })
  .catch(()=>{
      firebase.auth()
      .createUserWithEmailAndPassword(username,password)
      .then((result)=>{
          console.warn('SignUp Successfully')
          dispatch({
            type: LOGIN_SUCCESS,
            userData: result,
            message: "SignUp Successfully"
          })         
      })
      .catch((error)=>{
        console.warn('Signup Failed')
        dispatch({
          type: LOGIN_FAIL,
          userData: null,
          message: error.message
        })  
      })
  });
};