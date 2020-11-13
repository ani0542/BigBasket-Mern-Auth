import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
// import selectedMovieReducer from './selectedMovieReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
  item:itemReducer,
  auth:authReducer,
  error:errorReducer
});