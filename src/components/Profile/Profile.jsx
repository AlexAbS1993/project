import React from 'react';
import classes from './Profile.module.css';
import Head from './Head'
import Infoprofile from './Infoprofile';



const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.profileInner}>
                <Head />
                <Infoprofile textTemp={props.textTemp} prII={props.prI.postsReady} txI={props.prI.tempPostText} addPost={props.addPost} />
            </div>
        </div>
    )
}

export default Profile;