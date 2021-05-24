import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../constants/User";
import { produce } from 'immer';

export const initialState = {
    username: null
};

const UserReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOGIN:
                draft.username = action.username;
                break;
            case LOGIN_SUCCESS:
                draft.username = state.username;
                break;
            case LOGIN_FAIL:
                draft.username = action.error;
                break;
            case LOGOUT:
                draft.username = null;
                break;
        }
    });

export default UserReducer;