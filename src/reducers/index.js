import dataReducer from './dataReducer'
import isLoadedReducer from './isLoadedReducer'
import logReducer from './logReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    data: dataReducer,
    isLoaded: isLoadedReducer,
    loginStatus: logReducer
})

export default allReducers;