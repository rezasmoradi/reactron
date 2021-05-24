import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS } from "../constants/User";
import { produce } from 'immer';

export const initialState = {
    username: null,
    error: null,
    logout: false
};

const UserReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOGIN:
                draft.username = action.username;
                draft.logout = false;
                break;
            case LOGIN_SUCCESS:
                draft.username = state.username;
                draft.logout = false;
                break;
            case LOGIN_FAIL:
                draft.error = action.error;
                draft.logout = false;
                break;
            case LOGOUT:
                draft.username = null;
                draft.logout = false;
                break;
            case LOGOUT_SUCCESS:
                draft.logout = true;;
                break;
            case LOGOUT_FAIL:
                draft.error = action.error;
                draft.logout = false;
                break;
        }
    });

export default UserReducer;