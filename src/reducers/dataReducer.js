import {DATA_RECEIVE_API, DATA_MODIFY} from '../constants/actions'

const dataReducer = (state = [], action) => {
    switch(action.type){
        case DATA_RECEIVE_API:
            return state = action.data
        case DATA_MODIFY:
            return state = action.newData
        default:
            return state
    }
}

export default dataReducer;