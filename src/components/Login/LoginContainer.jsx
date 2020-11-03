import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classes from './Login.module.css';


const Login = (props) => {
    let handsome = () => {
        let a = Math.random();
        if (a > 0.5) {
            return true
        }
        else return false
    }
    let enter = (values) => {
        alert(`${values.password}, ${values.login}`)
    }
    return (
        <div className={classes.login}>
            {props.auth.login ? <h2> Вы авторизованы </h2> : <h1> Вы не авторизованы</h1>}
            { props.auth.login ? <> <p> Ваш логин: {props.auth.login} </p>
                <p> Ваш идентификатор: {props.auth.id}</p>
                <p> Ваш е-майл: {props.auth.email} </p>
                <p> Вы красавчик: {handsome() ? "да" : "нет"}</p> </> :
                <div className={classes.loginisation}>
                    <LoginForm onSubmit={enter} />
                </div>
            }
        </div>
    )
}

const LoginFormEnd = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name="login" component="input" placeholder="Введите логин"></Field></div>
            <div><Field name="password" component="input" placeholder="Введите пароль" type="password"></Field></div>
            <div><button> Войти в систему </button></div>
        </form>
    )
}

const LoginForm = reduxForm({ form: "loginIn" })(LoginFormEnd);


let mapStateToProps = (state) => {
    return (
        {
            auth: state.auth,
        }
    )
}


export const LoginContainer = connect(mapStateToProps)(Login);


