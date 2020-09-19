let initialState = {
    friends: [
        {
            "name": "AlexAbS",
            "id": 11571,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
    ],
    pageSize: 10,
    pageNumber: 1,
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
            return newState;
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
export const disSetupPage = () => {
    return {
        type: SETUP_PAGE
    }
}

let SHOW_FRIEND = { type: "SHOW_FRIEND" };
let CLICK_RIGHT = { type: "CLICK_RIGHT" };
let CLICK_LEFT = { type: "CLICK_LEFT" };
let SETUP_PAGE = { type: "SETUP_PAGE" }