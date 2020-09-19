import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import * as axios from 'axios';
import { disShowFriends } from './../../redux/friendsPageReducer'
import { FriendsList } from './FriendsList';
import { disSlideLeft, disSlideRight, disSetupPage } from './../../redux/friendsPageReducer';

class FriendsAPI extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=1&count=5`)
            .then(response => {
                this.props.showFriends(response.data.items);
            })
    }
    onButtonClickRight = (pageNumber) => {
        this.props.slideRight();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`)
            .then(response => {
                this.props.showFriends(response.data.items)
            })
    }
    onButtonClickLeft = (pageNumber = 1) => {
        this.props.slideLeft();
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`)
            .then(response => {
                this.props.showFriends(response.data.items)
            })
    }
    render() {
        return (
            <Friends friends={this.props.friendsPage.friends}
                pageSize={this.props.friendsPage.pageSize} pageNumber={this.props.friendsPage.pageNumber}
                slideLeft={this.props.slideLeft} slideRight={this.props.slideRight} onButtonClickRight={this.onButtonClickRight}
                onButtonClickLeft={this.onButtonClickLeft} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage,
    }
}

let mapStateToDispatch = (dispatch) => {
    return (
        {
            showFriends: (res) => { dispatch(disShowFriends(res)) },
            slideLeft: () => { dispatch(disSlideLeft()) },
            slideRight: () => { dispatch(disSlideRight()) },
            setupPage: () => { dispatch(disSetupPage) },
        }
    )
}

export const FriendsContainer = connect(mapStateToProps, mapStateToDispatch)(FriendsAPI);