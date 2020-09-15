import React from 'react';
import classes from './Profile.module.css';
import Head from './Head'
import Infoprofile from './Infoprofile';



const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.profileInner}>
                <Head />
                <Infoprofile dispatch={props.dispatch} prII={props.prI.postsReady} txI={props.prI.tempPostText} />
            </div>
        </div>
    )
}

export default Profile;