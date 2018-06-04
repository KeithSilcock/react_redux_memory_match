import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {BrowserRouter as Router} from 'react-router';

import App from './components/app';

ReactDOM.render(
    <Provider store={createStore(rootReducer)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
