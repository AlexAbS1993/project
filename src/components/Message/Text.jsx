import React from 'react';
import classes from './Text.module.css';

const Text = (props) => {
    return (
        <div className={classes.text}><p> {props.massage} </p></div>
    )
}
export default Text;