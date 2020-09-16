import React from 'react';
import classes from './Input.module.css';
import { disSendMessage, disMessageTypeTemp } from './../../redux/dialogiesPagesReducer'

const Input = (props) => {
    let elementAddPost = React.createRef();
    let sendMessage = () => {
        props.dispatch(disSendMessage());
    }
    let tempTypeMessage = () => {
        let entervalue = elementAddPost.current.value;
        props.dispatch(
            disMessageTypeTemp(entervalue)
        );
    }
    return (
        <div className={classes.enter}>
            <div><textarea value={props.tempMess.tempMess} onChange={tempTypeMessage} className={classes.input} ref={elementAddPost}></textarea></div>
            <button onClick={sendMessage}>Send</button>
        </div >
    )
}

export default Input;