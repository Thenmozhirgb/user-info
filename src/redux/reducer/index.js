import {combineReducers} from "redux";
import createUser from './userReducer';

const rootReducer = combineReducers({
    userReducer : createUser
});

export default rootReducer;