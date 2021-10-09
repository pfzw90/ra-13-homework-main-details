import { put, spawn, takeEvery,call } from 'redux-saga/effects';
import { DATA_REQUEST } from '../actions/actionTypes';
import { dataRequestSuccess, dataRequestFailure } from '../actions/actionCreators';
import { fetchData } from '../api';


// worker
function* handleRequestSaga(action) {
        try {
            const data = yield call(fetchData, action.payload.url);
            yield put(dataRequestSuccess(data));
        } catch (e) {
            yield put(dataRequestFailure(e.message));
        }   
}

// watcher
function* watchRequestSaga() {
        yield takeEvery(DATA_REQUEST, handleRequestSaga);
}

export default function* saga() {
    yield spawn(watchRequestSaga);
}