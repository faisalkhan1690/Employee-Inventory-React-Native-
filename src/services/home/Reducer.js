import { 
  USER_NAME,
  USER_PHONE_NUMBER, 
  USER_SHIFT, 
  USER_CREATE_USER, 
  LOADER_ADD,
  EMP_LIST,
  LOADER_LIST
} from '../Constants';

const initialState = {
  name:'',
  phoneNumber:'',
  shift:'',
  message: '',
  isSaveSuccess:'',
  isLoading:false,
  empList:[]
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
      case USER_CREATE_USER:
        return {
          ...state,
          message: action.message,
          isSaveSuccess:action.isSaveSuccess
  
        }
      case LOADER_ADD:
        return {
          ...state,
          isLoading: action.isLoading
        }
      case LOADER_LIST:
        return {
          ...state,
          isLoading: action.isLoading
        }

        case EMP_LIST:
        return {
          ...state,
          empList: action.empList
        }
        
      default:
        return state
    }
} 