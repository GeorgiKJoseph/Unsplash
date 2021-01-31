import {call, put, take, takeEvery, takeLatest} from 'redux-saga/effects'
import {DATA_REQUEST_API, DATA_MODIFY, LOGIN_REQUEST, LOGOUT_REQUEST} from '../constants/actions'
import {receiveApiData} from '../actions/dataActions'
import {fetchData} from '../api/unsplash'

function* sagaApiFetch(action){
    try{
        console.log('sagaApiFetch executing')
        const data = yield call(fetchData)
        yield put(receiveApiData(data))
    } catch (e){
        console.log(e)
    }
}

export default function* rootSaga() {
    console.log('Saga started')
    yield takeLatest(DATA_REQUEST_API, sagaApiFetch)
    
}