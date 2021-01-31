import {
    DATA_RECEIVE_API,
    DATA_REQUEST_API,
    DATA_MODIFY,
    DATA_IS_LOADED
} from '../constants/actions'

export const requestApiData = () => {
    return {
        type: DATA_REQUEST_API
    }
}
export const receiveApiData = data => {
    return {
        type: DATA_RECEIVE_API,
        data
    }
}

export const modifyStoreData = newData => {
    return {
        type: DATA_MODIFY,
        newData
    }
}

export const updateIsLoaded = () => {
    return {
        type: DATA_IS_LOADED
    }
}