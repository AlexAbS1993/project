let initialState = {
    messages: [
        { name: "Hello" },
    ],
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
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                name: action.values,
            }
            let newState = {
                ...state,
                messages: [...state.messages, newMessage]
            };
            return newState;
        }
        default: return state;
    }
}


export const disSendMessage = (values) => { return { type: SEND_MESSAGE, values: values } };
const SEND_MESSAGE = "SEND-MESSAGE";