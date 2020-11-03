import { applyMiddleware, combineReducers, createStore } from 'redux';
import { dialigiesReducer } from './dialogiesPagesReducer';
import { friendReducer } from './friendsPageReducer';
import { profileReducer } from './profilePageReducer';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from './authReducer';
import { headerReducer } from './headerReducer';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        dialogiesPages: dialigiesReducer,
        friendsPage: friendReducer,
        auth: authReducer,
        headerPage: headerReducer,
        form: formReducer,
    }
);

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;