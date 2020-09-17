import { combineReducers, createStore } from 'redux';
import { dialigiesReducer } from './dialogiesPagesReducer';
import { friendReducer } from './friendsPageReducer';
import { profileReducer } from './profilePageReducer';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogiesPages: dialigiesReducer,
        friendsPage: friendReducer,
    }
);

let store = createStore(reducers);

export default store;