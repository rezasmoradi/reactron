import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { compose } from "redux";
import { login } from "../actions/UserActions";
import { makeSelectUser } from '../selectors/UserSelector';
import { makeSelectApp } from '../selectors/AppSelector';
import { createStructuredSelector } from "reselect";
import "../styles/main.css";
import { useHistory } from "react-router";

function LoginPage({ onLogin, user }) {
    const [username, setUsername] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (user && user.username) {
            history.push('/')
        }
    }, [user]);

    return (
        <div className="center">
            <p>LoginPage</p>
            <input placeholder="name" data-testid="usernameInput" autoFocus onChange={(e) => setUsername(e.target.value.trim())}
                onKeyPress={(e) => e.key === 'Enter' && onLogin(username)} />
            <button className="btn" data-testid="login" type="button" onClick={() => onLogin(username)}>Submit</button>
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