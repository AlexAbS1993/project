import React from 'react';
import { connect } from 'react-redux';
import Friends from './Friends';
import * as axios from 'axios';
import { disFollowed, disIsActive, disShowFriends, disUnfollowed } from './../../redux/friendsPageReducer'
import { disSlideLeft, disSlideRight, disSetupPage, disLoading } from './../../redux/friendsPageReducer';
import { getFriends, slide } from '../../api/api';


class FriendsAPI extends React.Component {
    componentDidMount() {
        this.props.friendsPage.pageNumber = 1;
        this.props.loading(true);
        getFriends().then(response => {
            this.props.loading(false);
            this.props.showFriends(response.data.items);
        })
    }
    onButtonClickRight = (pageNumber) => {
        this.props.slideRight();
        this.props.isactive(false);
        this.props.loading(true);
        slide(pageNumber).then(response => {
            this.props.loading(false);
            this.props.isactive(true);
            this.props.showFriends(response.data.items)
        })
    }
    onButtonClickLeft = (pageNumber = 1) => {
        this.props.slideLeft();
        this.props.loading(true);
        slide(pageNumber).then(response => {
            this.props.loading(false);
            this.props.showFriends(response.data.items)
        })
    }
    render() {
        return (<div>
            {this.props.friendsPage.haveBeenLoaded ? <img src="https://serptop.ru/images/page/blog/primery-landing-page-s-original-nymi-resheniyami-i-stil-nym-dizajnom/20.gif" /> : null}
            <Friends friends={this.props.friendsPage.friends}
                pageSize={this.props.friendsPage.pageSize} pageNumber={this.props.friendsPage.pageNumber}
                slideLeft={this.props.slideLeft} slideRight={this.props.slideRight} onButtonClickRight={this.onButtonClickRight}
                onButtonClickLeft={this.onButtonClickLeft} haveBeenLoaded={this.props.friendsPage.haveBeenLoaded}
                unfollow={this.props.unfollow} followed={this.props.friendsPage.followed}
                isActiveButton={this.props.friendsPage.isActiveButton} follow={this.props.follow}
            />
        </div>
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
            setupPage: () => { dispatch(disSetupPage()) },
            loading: (value) => { dispatch(disLoading(value)) },
            follow: (id) => { dispatch(disFollowed(id)) },
            unfollow: (id) => { dispatch(disUnfollowed(id)) },
            isactive: (value) => { dispatch(disIsActive(value)) }
        }
    )
}

export const FriendsContainer = connect(mapStateToProps, mapStateToDispatch)(FriendsAPI);