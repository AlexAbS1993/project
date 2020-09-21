let initialState = {
    profile: null,
    postsReady: [
        { inner: "What about playng Minecraft?", id: 14 },
        { inner: "I like football", id: 13 },
        { inner: "Whats wrong with me?", id: 12 },
        { inner: "Hello my brothers and sisters", id: 11 },
        { inner: "Whats wrong with me?", id: 10 },
        { inner: "Whats wrong with me?", id: 9 },
        { inner: "Whats wrong with me?", id: 8 },
        { inner: "Whats wrong with me?", id: 7 },
        { inner: "Whats wrong with me?", id: 6 },
        { inner: "Whats wrong with me?", id: 5 },
        { inner: "Whats wrong with me?", id: 4 },
        { inner: "Whats wrong with me?", id: 3 },
        { inner: "Hello my brothers and sisters", id: 2 },
        { inner: "Hello my brothers and sisters", id: 1 },
    ],
    tempPostText: "",
};
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            if (state.tempPostText.length < 1) {
                return state
            }
            let newPost = {
                inner: state.tempPostText,
                id: state.postsReady.length + 1,
            };
            let newState = {
                ...state,
                tempPostText: "",
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
        default:
            return state;
    }
}
export const disAddPost = () => { return { type: ADD_POST } };
export const disTextTemp = (tempValue) => { return { type: TEXT_TEMP, value: tempValue } };
export const disDeletePost = (value) => { return { type: DELETE_POST, id: value } };
export const disSetUser = (data) => { return { type: SET_USER, data: data } }
const ADD_POST = "ADD-POST";
const TEXT_TEMP = "TEXT-TEMP";
const DELETE_POST = "DELETE-POST";
const SET_USER = "SET_USER";