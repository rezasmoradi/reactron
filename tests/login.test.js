import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "../src/configureStore";
import LoginPage from "../src/containers/LoginPage";

beforeEach(() => {
    render(
        <Provider store={configureStore({})}>
            <LoginPage user={{ username: null }} />
        </Provider>
    );
})


test("load LoginPage", async () => {
    expect(screen.getByText('LoginPage')).toBeTruthy();
})

test("once called login button", async function () {

    const handleClick = jest.fn();
    
    const loginBtn = screen.getByTestId('login');
    loginBtn.onclick = handleClick;

    await fireEvent.click(loginBtn);

    await expect(handleClick).toHaveBeenCalledTimes(1);
});
