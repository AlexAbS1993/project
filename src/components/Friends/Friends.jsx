import React from 'react';
import { FriendsList } from './FriendsList';
import classes from './FriendsInner.module.css'

const Friends = (props) => {
    let friendsOver = props.friends
        .map((el) => {
            return (<FriendsList name={el.name} />)
        });
    let slideRight = () => {
        let pageNumber = props.pageNumber + 1;
        return (props.onButtonClickRight(pageNumber))
    };

    let slideLeft = () => {
        if (props.pageNumber == 1) {
            return (props.onButtonClickLeft())
        }
        else {
            let pageNumber = props.pageNumber - 1;
            return (props.onButtonClickLeft(pageNumber))
        }
    }
    return (<div>
        <span className={classes.numberOfPage}>Это самая {props.pageNumber}-я страничка</span><div className={classes.buttons}><button onClick={slideLeft}>Left</button><button onClick={slideRight}>Right</button></div>
        <div className={classes.div}>{friendsOver}</div>
    </div>
    )
}

export default Friends;