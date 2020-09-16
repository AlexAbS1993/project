export const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            inner: state.tempPostText,
        };
        state.postsReady.unshift(newPost);
        state.tempPostText = "";
    }
    else if (action.type === TEXT_TEMP) {
        let newCondition = action.value;
        state.tempPostText = newCondition;
    }

    return state;
}
export const disAddPost = () => { return { type: ADD_POST } };
export const disTextTemp = (tempValue) => { return { type: TEXT_TEMP, value: tempValue } };

const ADD_POST = "ADD-POST";
const TEXT_TEMP = "TEXT-TEMP";