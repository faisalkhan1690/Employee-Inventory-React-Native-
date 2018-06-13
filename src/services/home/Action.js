import { 
  USER_NAME,
  USER_PHONE_NUMBER, 
  USER_SHIFT, 
  USER_CREATE_USER, 
  LOADER_ADD,
  EMP_LIST,
  LOADER_LIST
} from '../Constants';

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


export const createUser = (name,phoneNumber,shift) => (dispatch: any) => {

  
  dispatch({
    type: LOADER_ADD,
    isLoading: true
  })  
  const firebase = require("firebase");
  const {currentUser} =firebase.auth();
  
  
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({name,phoneNumber,shift})
  .then((result)=>{
      dispatch({
        type: LOADER_ADD,
        isLoading: false
      })
      dispatch({
        type: USER_CREATE_USER,
        isSaveSuccess:true,
        message:"Record saved successfully"
      })       
  })
  .catch((error)=>{
    console.warn(error);
    console.warn('Record was not saved successfully')
    dispatch({
      type: LOADER_ADD,
      isLoading: false
    })
    dispatch({
      type: USER_CREATE_USER,
      isSaveSuccess:false,
      message:"Record was not saved successfully"
    })   
  })
};


export const fetchEmpList = () => (dispatch: any) => {
  dispatch({
    type: LOADER_LIST,
    isLoading: true
  })  
  const firebase = require("firebase");
  const {currentUser} =firebase.auth();
  
  
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .on('value',snapshot=>{
      empList=[];
      snapshot.forEach(childSnapshot=>{
        empList.push(childSnapshot.val())
      })

      dispatch({
        type: LOADER_LIST,
        isLoading: false
      })
      dispatch({
        type: EMP_LIST,
        empList:empList
      })  
  },(error)=>{
    console.warn(error);
    console.warn('Record was not saved successfully')
    dispatch({
      type: LOADER_LIST,
      isLoading: false
    })
    dispatch({
      type: EMP_LIST,
      empList:[]
    })   
  
  })
};
