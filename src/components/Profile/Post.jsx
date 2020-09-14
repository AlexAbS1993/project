import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.thispost}><img className={classes.image} src={"https://cs13.pikabu.ru/avatars/3042/x3042375-1127675432.png"} /> <span>{props.inner}</span> </div>
    )
}
export default Post;