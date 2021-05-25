import React from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/main.css';

function NavBar() {
    return (
        <ul>
            <li>
                <NavLink replace to="/login">Login</NavLink>
            </li>
            <li>
                <NavLink replace to="/">Home</NavLink>
            </li>
        </ul>
    );
}

export default NavBar;