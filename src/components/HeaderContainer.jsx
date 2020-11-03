import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { authReducerThunk } from "../redux/authReducer";
import Header from './Header';
import { setUserThunk } from './../redux/profilePageReducer';
import { headerReducerThunk } from './../redux/headerReducer';

class HeaderContainerOver extends React.Component {
    componentDidMount() {
        this.props.authReducerThunk();
    }
    render() {
        return (
            <>
                <Header authme={this.props.authme} profile={this.props.profilePage.profile} headerPage={this.props.header.currentProfile} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        authme: state.auth,
        profilePage: state.profilePage,
        header: state.headerPage
    })
}
let mapDispatchToProps = (dispatch) => {
    return ({
        authReducerThunk: () => { return (dispatch(authReducerThunk())) },
        setUserThunk: (id) => { return (dispatch(setUserThunk(id))) },
        headerReducerThunk: (id) => { return (dispatch(headerReducerThunk(id))) }
    })
}

const HeaderContainerAPI = withRouter(HeaderContainerOver)
export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderContainerAPI)