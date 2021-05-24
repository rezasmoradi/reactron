import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS } from "../constants/User";

export function login(username) {
    return {
        type: LOGIN,
        username,
    }
}

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        data,
    }
}

export function loginFail(err) {
    return {
        type: LOGIN_FAIL,
        err,
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}
export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS
    }
}

export function logoutFail(err) {
    return {
        type: LOGOUT_FAIL,
        err
    }
}
