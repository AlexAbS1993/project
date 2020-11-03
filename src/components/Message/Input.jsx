import React from 'react';
import classes from './Input.module.css';
import { Field, reduxForm } from 'redux-form';

const Input = (props) => {
    let actionSend = (values) => {
        props.disSendMessage(values.message)
    }
    return (
        <div className={classes.enter}>
            <InputFormContainer onSubmit={actionSend} />
        </div >
    )
}

const InputForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field component="textarea" placeholder="Введите сообщение" name="message" className={classes.input} />
            <button>Send</button>
        </form>
    )
}

const InputFormContainer = reduxForm({ form: "messages" })(InputForm);

export default Input;