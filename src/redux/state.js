let state = {
    profilePage: {
        postsReady: [
            { inner: "What about playng Minecraft?", id: 1 },
            { inner: "I like football", id: 2 },
            { inner: "Whats wrong with me?", id: 3 },
            { inner: "Hello my brothers and sisters", id: 4 },
            { inner: "Whats wrong with me?", id: 5 },
            { inner: "Whats wrong with me?", id: 6 },
            { inner: "Whats wrong with me?", id: 7 },
            { inner: "Whats wrong with me?", id: 8 },
            { inner: "Whats wrong with me?", id: 9 },
            { inner: "Whats wrong with me?", id: 10 },
            { inner: "Whats wrong with me?", id: 11 },
            { inner: "Whats wrong with me?", id: 12 },
            { inner: "Hello my brothers and sisters", id: 13 },
            { inner: "Hello my brothers and sisters", id: 14 },
        ],
        tempPostText: "",
    },
    dialogiesPages: {
        messages: [
            { name: "Hello" },
            { name: "How are you?" },
            { name: "Boy next" },
            { name: "dungeon master" }
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
    },
}
window.state = state;

export const sendMessage = (message) => {
    let newMessage = {
        name: message,
    }
    state.dialogiesPages.messages.push(newMessage);
    reRenderAll()
}

export const addPost = (message) => {
    let newPost = {
        inner: message,
        id: state.profilePage.postsReady.length + 1,
    };
    state.profilePage.postsReady.unshift(newPost);
    reRenderAll()
};

export const textTemp = (value) => {
    let newCondition = value;
    state.profilePage.tempPostText = newCondition;
    reRenderAll()
}

let reRenderAll = () => { }

export const subscribe = (observer) => {
    reRenderAll = observer;
}

export default state;