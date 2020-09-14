import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.module.css';

const Sidebar = (props) => {
    return (
        <div className={classes.side}>
            <NavLink to="/profile">Home</NavLink>
            <NavLink to="/message">Message</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/gachi">GachiRemixes</NavLink>
            <NavLink to="/stop">StopWord</NavLink>
        </div>
    )
}
export default Sidebar;