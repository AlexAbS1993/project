import { usersAPI } from "../api/api";

let initialState = {
    profile: null,
    postsReady: [
        { inner: "What about playng Minecraft?", id: 5 },
        { inner: "I like football", id: 4 },
        { inner: "Hello my brothers and sisters", id: 3 },
        { inner: "Whats wrong with me?", id: 2 },
        { inner: "Hello my brothers and sisters", id: 1 },
    ],
    isLargePhoto: false,
    status: "",
};
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (action.values.length < 1) {
                return state
            }
            let newPost = {
                inner: action.values,
                id: state.postsReady.length + 1,
            };
            let newState = {
                ...state,
                postsReady: [newPost, ...state.postsReady]
            };
            // newState.postsReady = [...state.postsReady];
            // newState.postsReady.unshift(newPost);
            //newState.tempPostText = "";
            return newState;
        }
        case TEXT_TEMP: {
            let newCondition = action.value;
            let newState = { ...state };
            newState.tempPostText = newCondition;
            return newState;
        }
        case DELETE_POST: {
            let newState = { ...state };
            newState.postsReady = [...state.postsReady];
            state.postsReady.forEach((element) => {
                if (action.id == element.id) {
                    let a = element.id;
                    newState.postsReady.splice(Number(newState.postsReady.length - element.id), 1);
                    newState.postsReady.forEach((e) => {
                        if (e.id > a) {
                            e.id = e.id - 1;
                        }
                    })
                }
            })

            return newState;
        }
        case SET_USER: {
            let newState = { ...state, profile: action.data };
            return newState;
        }
        case ENLARGE: {
            let newState = { ...state };
            newState.isLargePhoto = true;
            return newState;
        }
        case REDUCE: {
            let newState = { ...state };
            newState.isLargePhoto = false;
            return newState;
        }
        case GET_STATUS: {
            return {
                ...state,
                status: action.data
            }
        }
        default:
            return state;
    }
}
export const disAddPost = (values) => { return { type: ADD_POST, values: values } };
export const disTextTemp = (tempValue) => { return { type: TEXT_TEMP, value: tempValue } };
export const disDeletePost = (value) => { return { type: DELETE_POST, id: value } };
export const disSetUser = (data) => { return { type: SET_USER, data: data } };
export const disEnlarge = () => { return { type: ENLARGE } };
export const disReduce = () => { return { type: REDUCE } };
export const disGetStatus = (data) => { return { type: GET_STATUS, data } }


const ADD_POST = "ADD-POST";
const TEXT_TEMP = "TEXT-TEMP";
const DELETE_POST = "DELETE-POST";
const SET_USER = "SET_USER";
const ENLARGE = "ENLARGE";
const REDUCE = "REDUCE";
const GET_STATUS = "GET_STATUS";

export const setUserThunk = (id) => {
    return ((dispatch) => {
        usersAPI.setUser(id).then(data => { dispatch(disSetUser(data)) })
    })
}

export const getStatusThunk = (id) => {
    return ((dispatch) => {
        usersAPI.statusGet(id).then(response => {
            dispatch(disGetStatus(response.data))
        })
    })
}
export const updateStatusThunk = (status) => {
    return ((dispatch) => {
        usersAPI.statusSet(status).then(response => {
            if (response.data.resultCode == 0) { dispatch(disGetStatus(status)) }
        })
    })
}