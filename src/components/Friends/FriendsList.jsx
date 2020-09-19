import React from 'react';
import classes from './Friends.module.css';

export const FriendsList = (props) => {
    return (
        <div className={classes.friendwindow}>
            <div className={classes.profileimg}><img src="https://sun9-45.userapi.com/c857720/v857720953/58167/oQlXGZMPbEE.jpg" /> </div> <div className={classes.profileinfo}><h3>{props.name}</h3></div>
        </div>
    )
}