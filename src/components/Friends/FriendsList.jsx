import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Friends.module.css';
import * as axios from 'axios';

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
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "1b77b1ed-89d2-4953-bbf1-c020f9f54fe5"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    unfollow(props.id)
                                }
                            })
                    }
                }

                >Отписаться</button> : <button onClick={
                    () => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                "API-KEY": "1b77b1ed-89d2-4953-bbf1-c020f9f54fe5"
                            }
                        })
                            .then(response => {
                                if (response.data.resultCode == 0) {
                                    follow(props.id)
                                }
                            })
                    }}
                >Подписаться</button>}
            </div>
        </div >
    )
}