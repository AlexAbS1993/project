import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';

export const FriendsList = (props) => {
    return (
        <div className={classes.friendwindow}>
            <NavLink to={"/profile/" + props.id}><div className={classes.profileimg}><img src={props.photo.large ? props.photo.large : "https://sun9-45.userapi.com/c857720/v857720953/58167/oQlXGZMPbEE.jpg"} /> </div>
            </NavLink>
            <div className={classes.profileinfo}>  <NavLink to={"/profile/" + props.id}><h3>{props.name}</h3></NavLink>
                <p>Идентификатор пользователя: {props.id}</p>
                <p>{props.followed ? "Вы подписаны на этого пользователя" : "Вы не подписаны на этого пользователя"}</p></div>
            <div className={classes.but}><button>Подписаться</button></div>
        </div >
    )
}