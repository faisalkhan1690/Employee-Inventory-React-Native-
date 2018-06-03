import { combineReducers } from 'redux';
import AuthenticatioReducer from './authentication/Reducer'


export default combineReducers({
  authenticatioReducer:AuthenticatioReducer
});

