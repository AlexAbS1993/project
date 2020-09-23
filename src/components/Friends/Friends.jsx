import React from 'react';
import { FriendsList } from './FriendsList';
import classes from './FriendsInner.module.css'

const Friends = (props) => {
    let friendsOver = props.friends
        .map((el) => {
            return (<FriendsList name={el.name} id={el.id} photo={el.photos} follow={props.follow} unfollow={props.unfollow} followed={el.followed} />)
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
        {props.haveBeenLoaded ? <img src="https://pa1.narvii.com/6917/b2385a091b6aa61f0240c6d6f2016a4722845e1br1-320-320_hq.gif" /> : <span className={classes.numberOfPage}>Это самая {props.pageNumber}-я страничка</span>}<div className={classes.buttons}>
            <button onClick={slideLeft}>Left</button>   {props.isActiveButton ? <button onClick={slideRight}>Right</button> : <button className={classes.buttondis} onClick={slideRight}>Right</button>} </div>
        <div className={classes.div}>{friendsOver}</div>
    </div>
    )
}

export default Friends;