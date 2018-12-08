import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { init } from './config/initFirebase';


import { Provider } from "react-redux";
// import reduxThunk from "redux-thunk";

import store from './store'

// init();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
