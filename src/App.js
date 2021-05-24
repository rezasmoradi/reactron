import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore, {history} from "./configureStore";
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import {ConnectedRouter} from 'connected-react-router';
import styles from './styles/main.css';

function App() {
    const store = configureStore({});
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <NavBar/>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                    </Switch>
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;