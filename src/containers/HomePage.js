import React from "react";
import PropTypes from 'prop-types';
import { createStructuredSelector } from "reselect";
import { makeSelectUser } from "../selectors/UserSelector";
import { connect } from "react-redux";
import { compose } from "redux";
import "../styles/main.css";

function HomePage() {

    return (
        <div>
            HomePage
        </div>
    );
}

HomePage.propTypes = {
    getUsers: PropTypes.func,
    user: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    user: makeSelectUser(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomePage);