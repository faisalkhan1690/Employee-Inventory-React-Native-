import { combineReducers } from 'redux';
import AuthenticatioReducer from './authentication/Reducer'
import EmpDataReducer from './home/Reducer'


export default combineReducers({
  authenticatioReducer:AuthenticatioReducer,
  empDataReducer:EmpDataReducer
});

