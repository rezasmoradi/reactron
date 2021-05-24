import {createStore, applyMiddleware, compose} from 'redux'
import {routerMiddleware} from 'connected-react-router'
import RootReducer from './reducers/RootReducer';
import {createHashHistory} from "history";
import createSagaMiddleware from 'redux-saga';
import RootSaga from "./sagas/RootSaga";

const sagaMiddleware = createSagaMiddleware();
export const history = createHashHistory();

function configureStore(initialState) {
    const store = createStore(
        RootReducer(history),
        initialState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware,
            ),
        ),
    );

    sagaMiddleware.run(RootSaga);

    return store;
}

export default configureStore;