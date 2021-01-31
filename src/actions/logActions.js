import {LOGIN_REQUEST, LOGOUT_REQUEST} from '../constants/actions'

export const requestLogin = (user_obj) => {
    return {
        type: LOGIN_REQUEST,
        user_obj
    }
}
export const requestLogout = () => {
    return {
        type: LOGOUT_REQUEST
    }
}