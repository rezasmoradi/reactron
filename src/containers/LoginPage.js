import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {compose} from "redux";
import {login} from "../actions/UserActions";
import {push} from 'connected-react-router';
import {makeSelectUser} from '../selectors/UserSelector';
import {makeSelectApp} from '../selectors/AppSelector';
import {createStructuredSelector} from "reselect";

function LoginPage({onLogin, user, dispatch}) {
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (user && user.username) {
            dispatch(push('/'));
        }
    }, [user]);

    return (
        <div>
            <input id="usernameInput" autoFocus onChange={(e) => setUsername(e.target.value.trim())}/>
            <button id="login" type="button" onClick={() => onLogin(username)}>Submit</button>
        </div>
    );
}

LoginPage.propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    onLogin: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    app: makeSelectApp(),
    user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        onLogin: (username) => dispatch(login(username)),
    }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(LoginPage);