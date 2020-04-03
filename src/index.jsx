import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './state/store/configureStore';
import * as serviceWorker from './serviceWorker';
import axios from "axios";

axios.defaults.baseURL = "https://urban-living.herokuapp.com/api/";

const store = configureStore();
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />,
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
