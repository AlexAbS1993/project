import React from 'react';
import classes from './Friends.module.css';
import { distempTextSearch } from './../../redux/friendsPageReducer'

const Friends = (props) => {
    let friendsOver = props.fr.friends.map((el) => { return (<div>{el.name}</div>) })
    let friendsSearch = (e) => {
        let val = e.target.value;
        // props.dispatch(disFriendsSearch(val));
    }
    let tempTextSearch = (e) => {
        let val = e.target.value;
        props.dispatch(distempTextSearch(val));
    }
    return (
        <div className={classes.friendwindow}>
            <div className={classes.inputdiv}><span> Поиск друга: </span> <input value={props.fr.tempTextSearch} onChange={friendsSearch, tempTextSearch} className={classes.input}></input></div>
            {friendsOver}
        </div>
    )
}

export default Friends;