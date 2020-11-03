import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div><NavLink to={`/profile/${props.authme.id}`}> <img className={classes.image} src="https://sun9-45.userapi.com/c857720/v857720953/58167/oQlXGZMPbEE.jpg"></img></NavLink></div>
            <div><p className={classes.title}> <NavLink to="/login"> {props.authme.id} {props.authme.login} </NavLink> </p></div>
        </div >)

}

export default Header;