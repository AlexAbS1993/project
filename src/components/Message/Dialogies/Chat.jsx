import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Chat.module.css';

const Chat = (props) => {
    return (
        <div className={classes.chat}><NavLink className={classes.nav} to={"/message/" + props.id}><h3>{props.name}</h3></NavLink></div>
    )
}
export default Chat;