import React from "react";
import {NavLink} from "react-router-dom";
import styles from '../styles/main.css';

function NavBar() {
    return (
        <ul>
            <li>
                <NavLink className="link" replace to="/">Home</NavLink>
            </li>
            <li>
                <NavLink className="link" replace to="/login">Login</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;