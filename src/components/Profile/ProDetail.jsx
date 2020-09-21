import React from "react";
import classes from "./ProDetail.module.css"

const ProDetail = (props) => {
    if (props.profile == null) {
        return (
            <div><img src="https://pa1.narvii.com/6917/b2385a091b6aa61f0240c6d6f2016a4722845e1br1-320-320_hq.gif" /></div>
        )
    }
    else {
        return (
            <div className={classes.profile}>
                <div className={classes.profilephotodiv}>
                    <img className={classes.profilephoto} src={props.profile.photos.large ? props.profile.photos.large : "https://sun9-45.userapi.com/c857720/v857720953/58167/oQlXGZMPbEE.jpg"} />
                </div>
                <div className={classes.info}><p className={classes.pII}>Пользователь</p> <h2 className={classes.hI}>{props.profile.fullName}</h2>
                    <p className={classes.pI}>Идентификатор пользователя: {props.profile.userId}</p>
                </div>
            </div>
        )
    }
}

export default ProDetail;