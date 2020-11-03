import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';
import * as axios from 'axios';
import { usersAPI } from '../../api/api';

export const FriendsList = (props) => {
    let follow = (id) => {
        console.log(id);
        props.follow(id)
    }
    let unfollow = (id) => {
        console.log(id);
        props.unfollow(id)
    }

    return (
        <div className={classes.friendwindow}>
            <NavLink to={"/profile/" + props.id}><div className={classes.profileimg}><img src={props.photo.large ? props.photo.large : "https://sun9-45.userapi.com/c857720/v857720953/58167/oQlXGZMPbEE.jpg"} /> </div>
            </NavLink>
            <div className={classes.profileinfo}>  <NavLink to={"/profile/" + props.id}><h3>{props.name}</h3></NavLink>
                <p>Идентификатор пользователя: {props.id}</p>
                <p>{props.followed ? "Вы подписаны на этого пользователя" : "Вы не подписаны на этого пользователя"}</p></div>
            <div className={classes.but}>
                {props.followed ? <button onClick={
                    () => {
                        usersAPI.unFollowUser(props.id).then(data => {
                            if (data.resultCode == 0) {
                                unfollow(props.id)
                            }
                        })
                    }
                }
                >Отписаться</button> : <button onClick={
                    () => usersAPI.followUser(props.id).then(data => {
                        if (data.resultCode == 0) {
                            follow(props.id)
                        }
                    })
                }
                >Подписаться</button>}
            </div>
        </div >
    )
}