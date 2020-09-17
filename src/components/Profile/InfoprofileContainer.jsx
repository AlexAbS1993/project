import React from 'react';
import { disAddPost, disTextTemp } from './../../redux/profilePageReducer'
import Infoprofile from "./Infoprofile";
import { disDeletePost } from './../../redux/profilePageReducer';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        disTextTemp: (tempValue) => {
            dispatch(disTextTemp(tempValue))
        },
        disAddPost: () => {
            dispatch(disAddPost())
        },
        disDeletePost: (tar) => {
            dispatch(disDeletePost(tar))
        },
    }

}

const InfoprofileContainer = connect(mapStateToProps, mapDispatchToProps)(Infoprofile);


export default InfoprofileContainer;