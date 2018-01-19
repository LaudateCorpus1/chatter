import { delay } from 'redux-saga';
import { put, takeEvery, all } from 'redux-saga/effects';
import * as authActions from './auth/auth.actions';

function* incrementAsync() {
    console.log('signUp request saga');
    yield delay(1000);
    yield put({ type: 'INCREMENT' });
}


function* watchIncrementAsync() {
    yield takeEvery(authActions.SIGN_UP_REQUEST, incrementAsync);
}


export default function* rootSaga() {
    yield all([
        watchIncrementAsync()
    ]);
};
