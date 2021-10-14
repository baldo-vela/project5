import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './stylesheets/index.css';
//Redux
import store from './redux/store'
import { Provider } from 'react-redux';

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    );
}
store.subscribe(render);
render();