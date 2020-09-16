export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                inner: state.tempPostText,
                id: state.postsReady.length + 1,
            };
            state.postsReady.unshift(newPost);
            state.tempPostText = "";
            return state;
        case TEXT_TEMP:
            let newCondition = action.value;
            state.tempPostText = newCondition;
            return state;
        case DELETE_POST:
            state.postsReady.forEach((element) => {
                if (action.id == element.id) {
                    let a = element.id;
                    state.postsReady.splice(Number(state.postsReady.length - element.id), 1);
                    state.postsReady.forEach((e) => {
                        if (e.id > a) {
                            e.id = e.id - 1;
                        }
                    })
                }
            })

            return state;
        default:
            return state;
    }
}
export const disAddPost = () => { return { type: ADD_POST } };
export const disTextTemp = (tempValue) => { return { type: TEXT_TEMP, value: tempValue } };
export const disDeletePost = (value) => { return { type: DELETE_POST, id: value } };

const ADD_POST = "ADD-POST";
const TEXT_TEMP = "TEXT-TEMP";
const DELETE_POST = "DELETE-POST";