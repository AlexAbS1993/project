import { usersAPI } from "../api/api"

const initialState = {
    id: null,
    login: null,
    email: null,
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_AUTH: {
            return ({
                ...state,
                ...action.data
            })
        }
        default:
            return state;
    }
}

export const disAuthReducer = (data) => { return { type: IS_AUTH, data: data } }

const IS_AUTH = "IS_AUTH";

export const authReducerThunk = () => {
    return ((dispatch) => {
        usersAPI.isAuthMe().then((response) => {
            console.log(response)
            dispatch(disAuthReducer(response.data.data))
        }
        )
    })
}