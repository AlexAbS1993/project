import React from 'react';
import classes from './Infoprofile.module.css';
import Post from './Post'
import ProDetail from './ProDetail';
import { StatusContainer } from './StatusContainer';
import { Field, reduxForm } from 'redux-form';

const Infoprofile = (props) => {
    let submitAct = (values) => {
        props.disAddPost(values.wallpost)
    }

    let postsReadyOver = props.profilePage.postsReady.map(
        (post) => { return <Post inner={post.inner} id={post.id} disDeletePost={props.disDeletePost} /> }
    )
    return (<div>
        <ProDetail profile={props.profile} isLargePhoto={props.isLargePhoto} enlargeEvent={props.enlargeEvent} reduceEvent={props.reduceEvent} />
        <div><StatusContainer status={props.status} getStatusThunk={props.getStatus} updateStatusThunk={props.updateStatus} /></div>
        <div className={classes.posts}>
            <div >
                <MyPostFormContainer onSubmit={submitAct} />
                <div className={classes.infoprofileDiv}>{postsReadyOver}</div>
            </div>
        </div>
    </div >
    )
}

const myPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.enter} >
            <Field component="textarea" name="wallpost" placeholder="Вводи пост" />
            <div><button>Отправить</button>
            </div></form>
    )
}

const MyPostFormContainer = reduxForm({ form: "sendWallPost" })(myPost);

export default Infoprofile;