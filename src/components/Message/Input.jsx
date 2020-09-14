import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let elementAddPost = React.createRef();
    let sendMessage = () => {
        let entervalue = elementAddPost.current.value;
        props.sendMessage(entervalue);
        elementAddPost.current.value = "";
    }
    return (
        <div className={classes.enter}>
            <div><textarea className={classes.input} ref={elementAddPost}></textarea></div>
            <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default Input;