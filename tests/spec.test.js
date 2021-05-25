import "@testing-library/jest-dom/extend-expect";
import {cleanup } from "@testing-library/react";

const Application = require("spectron").Application;
const electronPath = require("electron");
const path = require("path");

let app;

afterEach(cleanup)

beforeAll(() => {
    app = new Application({
        path: electronPath,

        args: [path.join(__dirname, "../")]
    });

    return app.start();
}, 15000);

afterAll(function () {
    if (app && app.isRunning()) {
        return app.stop();
    }
});

test("Displays App window", async function () {
    let windowCount = await app.client.getWindowCount();

    expect(windowCount).toBe(1);
});

jest.setTimeout(10000);
