import React from 'react';
import { disAddPost, disTextTemp, disSetUser } from './../../redux/profilePageReducer'
import Infoprofile from "./Infoprofile";
import { disDeletePost } from './../../redux/profilePageReducer';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class InfoprofileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11571;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUser(response.data)
                console.log(response);
                console.log(this.props.profilePage)
            })
    }
    render() {
        return (
            <Infoprofile profile={this.props.profilePage.profile} profilePage={this.props.profilePage} disTextTemp={this.props.disTextTemp} disAddPost={this.props.disAddPost} disDeletePost={this.props.disDeletePost} />
        )
    }
}

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
        setUser: (data) => {
            dispatch(disSetUser(data))
        }
    }

}

let UrlWithRouter = withRouter(InfoprofileAPI);
const InfoprofileContainer = connect(mapStateToProps, mapDispatchToProps)(UrlWithRouter);

export default InfoprofileContainer;