export const friendReducer = (state, action) => {
    switch (action.type) {
        case FRIEND_TYPE_TEMP:
            let newCondition = action.value;
            state.tempTextSearch = newCondition;
            return state;
        default:
            return state;
    }
}

export const distempTextSearch = (val) => { return ({ type: FRIEND_TYPE_TEMP, value: val }) };
const FRIEND_TYPE_TEMP = "FRIEND-TYPE-TEMP";