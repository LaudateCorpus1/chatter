import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as firebase from 'firebase';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import chat from './chat/state/state';
import rootSaga from './state/sagas';

const config = {
    apiKey: "AIzaSyBJFfQauU1wUpQpVlqPwQvcs6D-I32MClY",
    authDomain: "chatter-tale.firebaseapp.com",
    databaseURL: "https://chatter-tale.firebaseio.com",
    projectId: "chatter-tale",
    storageBucket: "chatter-tale.appspot.com",
    messagingSenderId: "516223408855"
};
firebase.initializeApp(config);

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    chat,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
