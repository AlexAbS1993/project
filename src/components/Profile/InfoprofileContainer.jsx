import React from 'react';
import { disAddPost, disTextTemp, getStatusThunk, updateStatusThunk, setUserThunk, disEnlarge, disReduce } from './../../redux/profilePageReducer'
import Infoprofile from "./Infoprofile";
import { disDeletePost } from './../../redux/profilePageReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class InfoprofileAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11571;
        }
        this.props.setUserThunk(userId);
        this.props.getStatusThunk(userId);
    }
    enlargeEvent() {
        this.props.enlargeEvent();
    }
    reduceEvent() {
        this.props.reduceEvent()
    }

    render() {
        return (
            <Infoprofile getStatus={this.props.getStatusThunk} updateStatus={this.props.updateStatusThunk} status={this.props.profilePage.status} isLargePhoto={this.props.profilePage.isLargePhoto} reduceEvent={this.props.reduceEvent} enlargeEvent={this.props.enlargeEvent} profile={this.props.profilePage.profile} profilePage={this.props.profilePage} disTextTemp={this.props.disTextTemp} disAddPost={this.props.disAddPost} disDeletePost={this.props.disDeletePost} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        auth: state.auth,
    }

}
let mapDispatchToProps = (dispatch) => {
    return {
        disTextTemp: (tempValue) => {
            dispatch(disTextTemp(tempValue))
        },
        disAddPost: (values) => {
            dispatch(disAddPost(values))
        },
        disDeletePost: (tar) => {
            dispatch(disDeletePost(tar))
        },
        setUserThunk: (id) => { dispatch(setUserThunk(id)) },
        enlargeEvent: () => { dispatch(disEnlarge()) },
        reduceEvent: () => { dispatch(disReduce()) },
        getStatusThunk: (id) => { dispatch(getStatusThunk(id)) },
        updateStatusThunk: (status) => { dispatch(updateStatusThunk(status)) }
    }

}

let UrlWithRouter = withRouter(InfoprofileAPI);
const InfoprofileContainer = connect(mapStateToProps, mapDispatchToProps)(UrlWithRouter);

export default InfoprofileContainer;