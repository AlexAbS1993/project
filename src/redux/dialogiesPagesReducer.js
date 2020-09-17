let initialState = {
    messages: [
        { name: "Hello" },
    ],
    tempMess: "",
    chats: [
        { name: "Рекс", id: 1 },
        { name: "Соцопрос", id: 2 },
        { name: "Дрель Соседа", id: 3 },
        { name: "Спамеры", id: 4 },
        { name: "Акции КFC", id: 5 },
        { name: "Дальний родственник", id: 6 },
        { name: "Стас Костюшкин", id: 7 },
        { name: "Мой ФСБшник", id: 8 }
    ],
}

export const dialigiesReducer = (state = initialState, action) => {
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