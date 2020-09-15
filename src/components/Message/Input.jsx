import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    let elementAddPost = React.createRef();
    let sendMessage = () => {
        props.dispatch({ type: "SEND-MESSAGE" });
    }
    let tempTypeMessage = () => {
        let entervalue = elementAddPost.current.value;
        props.dispatch({
            type: "MESSAGE-TYPE-TEMP", value: entervalue
        });
    }
    return (
        <div className={classes.enter}>
            <div><textarea value={props.tempMess.tempMess} onChange={tempTypeMessage} className={classes.input} ref={elementAddPost}></textarea></div>
            <button onClick={sendMessage}>Send</button>
        </div >
    )
}

export default Input;