import React from 'react';
import classes from './Post.module.css'
import { disDeletePost } from './../../redux/profilePageReducer'
const Post = (props) => {
    let deletePost = (e) => {
        props.dispatch(disDeletePost(e.target.parentElement.id));
    }
    return (
        <div className={classes.thispost} id={props.id}><div className={classes.divimg}><img className={classes.image} src={"https://cs13.pikabu.ru/avatars/3042/x3042375-1127675432.png"} /></div> <span>{props.inner}</span><button className={classes.but} onClick={deletePost}>X</button> </div>
    )
}
export default Post;