import { combineReducers } from 'redux'
import shoesReducer from './shoesReducer';
import shopReducer from './shopReducer';
import userReducer from './userReducer';

const mainReducer = combineReducers({
    shoesReducer,
    shopReducer,
    userReducer
})

export default mainReducer