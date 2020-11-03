import { usersAPI } from './../api/api';

const initalState = {
    currentProfile: null,
}

export const headerReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_CUR_PR: {
            return {
                ...state,
                currentProfile: action.data,
            }
        }
        default:
            return state;
    }
}

export const headerReducerThunk = (id) => {
    return ((dispatch) => {
        usersAPI.currentPage(id).then(data => { dispatch(disHeaderReducer(data)) })
    })
}

const SET_CUR_PR = "SET_CUR_PR";

const disHeaderReducer = (data) => { return { type: SET_CUR_PR, data } };