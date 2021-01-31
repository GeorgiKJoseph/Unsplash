import {DATA_IS_LOADED} from '../constants/actions'

const isLoadedReducer = (state = false, action) => {
    switch(action.type){
        case DATA_IS_LOADED:
            return state = true
        default:
            return state
    }
}

export default isLoadedReducer;