import {LOGIN_REQUEST, LOGOUT_REQUEST} from '../constants/actions'

const logReducer = (state = {isLoggedIn: false}, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return state = {
                isLoggedIn: true,
                userObj: action.user_obj
            }
        case LOGOUT_REQUEST:
            return state = {
                isLoggedIn: false,
                userObj: action.user_obj
            }
        default:
            return state
    }
}

export default logReducer;