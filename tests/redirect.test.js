import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../src/configureStore";
import LoginPage from "../src/containers/LoginPage";
import { createMemoryHistory } from "history";
import { Route, Router, Switch } from "react-router";
import HomePage from "../src/containers/HomePage";

test("Redirect to HomePage", async function () {
    const history = createMemoryHistory()
    history.push('/')
    render(
        <Provider store={configureStore({})}>
            <Router history={history}>
                <LoginPage />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </Router>
        </Provider>
    );

    const input = screen.getByPlaceholderText('name');
    fireEvent.change(input, { target: { value: 'mohammad' } });

    const button = screen.getByText(/Submit/);
    fireEvent.click(button);

    await waitFor(() => screen.getByText(/Hello Mohammad/i))

});