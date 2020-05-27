import { combineReducers } from "redux";
import todo from './todo';
import errors from './errors';

export default combineReducers({
    todo,
    errors
});