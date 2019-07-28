import {combineReducers} from 'redux';
import dummy from './reducers/dummy'
import auth from './reducers/auth'


export  default  combineReducers({

    dummy,
    auth

})