import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/storeRedux';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

let reRenderAll = (a) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
reRenderAll();

store.subscribe(() => {
    let state = store.getState();
    reRenderAll(state)
});

serviceWorker.unregister();