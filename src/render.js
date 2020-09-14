import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { addPost } from './redux/state'

let reRenderAll = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default reRenderAll;