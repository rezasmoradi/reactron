import {createSelector} from 'reselect'
import {selectApp} from "./AppSelector";

export const makeSelectUser = () => createSelector(selectApp, subState => subState.user);
