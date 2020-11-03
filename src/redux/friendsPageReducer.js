import { usersAPI } from "../api/api";

let initialState = {
    friends: [],
    pageNumber: 1,
    haveBeenLoaded: false,
    isActiveButton: true,
}

export const friendReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_FRIEND: {
            return { ...state, friends: [...action.res] }
        }
        case CLICK_RIGHT: {
            let newState = { ...state };
            newState.pageNumber += 1;
            return newState;
        }
        case CLICK_LEFT: {
            if (state.pageNumber == 1) {
                return state
            }
            else {
                let newState = { ...state };
                newState.pageNumber -= 1;
                return newState;
            }
        }
        case SETUP_PAGE: {
            let newState = { ...state };
            newState.pageNumber = 1;
            action.number = 1;
            return newState;
        }
        case LOADING: {
            if (state.pageNumber == 1) {
                return state
            }
            else {
                let newState = { ...state };
                newState.haveBeenLoaded = action.value;
                return newState;
            }
        }
        case FOLLOW: {
            let newState = { ...state };
            newState.friends = [...state.friends]
            newState.friends.map((e) => {
                console.log(e.id, action.id)
                if (e.id == action.id) {
                    e.followed = true;
                }
            })
            return newState;
        }

        case UNFOLLOW: {
            let newState = { ...state };
            newState.friends = [...state.friends]
            newState.friends.map((e) => {
                console.log(e.id, action.id)
                if (e.id == action.id) {
                    e.followed = false;
                }
            })
            return newState;
        }
        case ISACTIVE: {
            return { ...state, isActiveButton: action.value }
        }
        default:
            return state;
    }
}

export const disShowFriends = (res) => {
    return {
        type: SHOW_FRIEND,
        res: res
    }
};
export const disSlideRight = () => {
    return {
        type: CLICK_RIGHT
    }
}
export const disSlideLeft = () => {
    return {
        type: CLICK_LEFT
    }
}
export const disSetupPage = (number) => {
    return {
        type: SETUP_PAGE,
        number: number
    }
}

export const disLoading = (value) => {
    return {
        type: LOADING,
        value: value
    }
}
export const disFollowed = (id) => {
    return {
        type: FOLLOW,
        id: id
    }
}
export const disUnfollowed = (id) => {
    return {
        type: UNFOLLOW,
        id: id
    }
}

export const disIsActive = (value) => {
    return (
        {
            type: ISACTIVE,
            value: value
        }
    )
}

let SHOW_FRIEND = { type: "SHOW_FRIEND" };
let CLICK_RIGHT = { type: "CLICK_RIGHT" };
let CLICK_LEFT = { type: "CLICK_LEFT" };
let SETUP_PAGE = { type: "SETUP_PAGE" }
let LOADING = { type: "LOADING" };
let FOLLOW = { type: "FOLLOW" };
let UNFOLLOW = { type: "UNFOLLOW" };
let ISACTIVE = { type: "ISACTIVE" };

export const showFriendsThunk = () => {
    return ((dispatch) => {
        // pageNumber = 1;
        dispatch(disLoading(true));
        usersAPI.getFriends().then(data => {
            console.log(data)
            dispatch(disLoading(false));
            dispatch(disShowFriends(data.items));
        })
    })
}

export const slideRight = (pageNumber) => {
    return (dispatch) => {
        dispatch(disSlideRight());
        dispatch(disIsActive(false));
        dispatch(disLoading(true));
        usersAPI.slide(pageNumber).then(data => {
            dispatch(disLoading(false));
            dispatch(disIsActive(true));
            dispatch(disShowFriends(data.items));
        })
    }
}
export const slideLeft = (pageNumber) => {
    return (dispatch) => {
        dispatch(disSlideLeft());
        dispatch(disLoading(true));
        usersAPI.slide(pageNumber).then(data => {
            dispatch(disLoading(false));
            dispatch(disShowFriends(data.items));
        })
    }
}