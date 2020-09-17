import React from 'react';
import classes from './Profile.module.css';
import Head from './Head'
import InfoprofileContainer from './InfoprofileContainer'

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <div className={classes.profileInner}>
                <Head />
                <InfoprofileContainer />
            </div>
        </div>
    )
}

export default Profile;