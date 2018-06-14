import { 
  USER_NAME,
  USER_PHONE_NUMBER, 
  USER_SHIFT, 
  USER_CREATE_USER, 
  LOADER_ADD,
  EMP_LIST,
  LOADER_LIST,
  USER_UPDATE_USER,
  USER_DELETE_USER
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
        isSaveSuccess:true
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
      isSaveSuccess:false
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
    
        var emp={};
        console.warn("name",childSnapshot.val().name)
        emp.name=childSnapshot.val().name;
        emp.phoneNumber=childSnapshot.val().phoneNumber;
        emp.shift=childSnapshot.val().shift;
        emp.uid=childSnapshot.key;
        empList.push(emp)
          
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


export const updateUser = (name,phoneNumber,shift,empId) => (dispatch: any) => {

  
  dispatch({
    type: LOADER_ADD,
    isLoading: true
  })  
  const firebase = require("firebase");
  const {currentUser} =firebase.auth();
  
  
  firebase.database().ref(`/users/${currentUser.uid}/employees/${empId}`)
  .set({name,phoneNumber,shift})
  .then((result)=>{
      dispatch({
        type: LOADER_ADD,
        isLoading: false
      })
      dispatch({
        type: USER_UPDATE_USER,
        isUpdateSuccess:true,
      })       
  })
  .catch((error)=>{
    console.warn(error);
    console.warn('Record was not updated successfully')
    dispatch({
      type: LOADER_ADD,
      isLoading: false
    })
    dispatch({
      type: USER_UPDATE_USER,
      isUpdateSuccess:false
    })   
  })
};


export const deleteUser = (empId) => (dispatch: any) => {

  
  dispatch({
    type: LOADER_ADD,
    isLoading: true
  })  
  const firebase = require("firebase");
  const {currentUser} =firebase.auth();
  
  
  firebase.database().ref(`/users/${currentUser.uid}/employees/${empId}`)
  .remove()
  .then((result)=>{
      dispatch({
        type: LOADER_ADD,
        isLoading: false
      })
      dispatch({
        type: USER_DELETE_USER,
        isDeleteSuccess:true
      })       
  })
  .catch((error)=>{
    console.warn(error);
    console.warn('Record was not deleted successfully')
    dispatch({
      type: LOADER_ADD,
      isLoading: false
    })
    dispatch({
      type: USER_DELETE_USER,
      isDeleteSuccess:false
    })   
  })
};