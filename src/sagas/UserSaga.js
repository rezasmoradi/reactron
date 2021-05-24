import { takeLatest, put } from 'redux-saga/effects';
import { LOGIN, LOGOUT } from "../constants/User";
import { loginFail, loginSuccess, logoutSuccess, logoutFail } from "../actions/UserActions";

export function* login({ username }) {
    try {
        yield put(loginSuccess(username));
    } catch (e) {
        console.log(e);
        yield put(loginFail(e));
    }
}

export function* logout() {
    try {
        yield put(logoutSuccess());
    } catch (e) {
        console.log(e);
        yield put(logoutFail(e));
    }
}

export default function* UserSaga() {
    yield takeLatest(LOGIN, login);
    yield takeLatest(LOGOUT, logout);
}