import { dialigiesReducer } from './dialogiesPagesReducer';
import { profileReducer } from './profilePageReducer';
import { friendReducer } from './friendsPageReducer'

let store = {
    _state: {
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
        },
        friendsPage: {
            friends: [
                { name: "Первый" },
                { name: "Второй" },
                { name: "Третий" },
                { name: "Четвертый" },
                { name: "Пятый" },
                { name: "Шестой" }
            ],
            tempTextSearch: "",
        }
    },
    getState() {
        return this._state
    },
    _call() { },
    subscribe(observer) {
        this._call = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogiesPages = dialigiesReducer(this._state.dialogiesPages, action);
        this._state.friendsPage = friendReducer(this._state.friendsPage, action);
        this._call(this._state)
    }
}




window.state = store.getState();
export default store;