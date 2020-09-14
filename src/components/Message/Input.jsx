import React from 'react';
import classes from './Input.module.css';

const Input = () => {
    return (
        <div className={classes.enter}>
            <div><textarea className={classes.input}></textarea></div>
            <button>Send</button>
        </div>
    )
}

export default Input;