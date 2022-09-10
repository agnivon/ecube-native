import { put, takeEvery, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { actionTypes } from '../actions';

function httpFetch(url) {
    return axios.get(url)
        .then(response => response.data)
}

function* fetchMovies(action) {
    const category = action.payload.category;
    const actionBase = actionTypes.MOVIES;
    try {
        yield put({ type: actionBase.FETCH_PENDING, category: category });
        const data = yield call(httpFetch, action.payload.url);
        yield put({ type: actionBase.FETCH_SUCCESS, category: category, data: data });
    } catch (e) {
        yield put({ type: actionBase.FETCH_FAILURE, category: category, message: e.message });
    }
}

function* watchFetchMovies() {
    yield takeEvery([
        actionTypes.MOVIES.FETCH_REQUESTED,
    ], fetchMovies);
}


export default function* rootSaga() {
    yield all([
        watchFetchMovies()
    ]);
}