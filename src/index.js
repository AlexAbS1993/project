import './index.css';
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, textTemp, sendMessage } from './redux/state'


let reRenderAll = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} textTemp={textTemp} sendMessage={sendMessage} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
reRenderAll()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

subscribe(reRenderAll);