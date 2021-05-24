import {spawn} from "redux-saga/effects";
import UserSaga from "../sagas/UserSaga";

export default function* RootSaga() {
    yield spawn(UserSaga);
}