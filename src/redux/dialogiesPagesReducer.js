export const dialigiesReducer = (state, action) => {
    if (action.type === SEND_MESSAGE) {
        let newMessage = {
            name: state.tempMess,
        }
        state.messages.push(newMessage);
        state.tempMess = "";

    }
    else if (action.type === MESSAGE_TYPE_TEMP) {
        let newCondition = action.value;
        state.tempMess = newCondition;

    }


    return state;
}
export const disSendMessage = () => { return { type: SEND_MESSAGE } };
export const disMessageTypeTemp = (entervalue) => { return { type: MESSAGE_TYPE_TEMP, value: entervalue } };
const SEND_MESSAGE = "SEND-MESSAGE";
const MESSAGE_TYPE_TEMP = "MESSAGE-TYPE-TEMP";