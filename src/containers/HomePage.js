import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { createStructuredSelector } from "reselect";
import { makeSelectUser } from "../selectors/UserSelector";
import { connect } from "react-redux";
import { compose } from "redux";
import { push } from "connected-react-router";
import { logout } from "../actions/UserActions";
import "../styles/main.css";

function HomePage({ dispatch, user, logout }) {

    useEffect(() => {
        if (user.logout) dispatch(push('/login'));
    }, [user])

    return (
        <div className="center">
            <p>HomePage</p>
            <span>{user && user.username ? `Hello ${user.username.charAt(0).toUpperCase() + user.username.substr(1)}` : ""}</span>
            <button className="btn" onClick={() => logout()}>Logout</button>
        </div>
    );
}

HomePage.propTypes = {
    dispatch: PropTypes.func,
    user: PropTypes.object,
    logout: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        logout: () => dispatch(logout())
    }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);