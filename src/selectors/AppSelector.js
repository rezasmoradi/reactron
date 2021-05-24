import {createSelector} from "reselect";

export const selectApp = (state) => state;

export const makeSelectApp = () => createSelector(selectApp, appState => appState);