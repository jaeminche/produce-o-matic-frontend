import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';
import 'core-js';
import './polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { tempSetUser, check } from './modules/user';
import { createLogger } from 'redux-logger';
import { HelmetProvider } from 'react-helmet-async';
import { icons } from './admin/assets/icons';

/**
 * APP TITLE: PRODUCE-O-MATIC (FRONT-END)
 * DEVELOPMENT CYCLE: 2020.10.14 ~ 2021.05.03
 * DEVELOPER: JAE MIN CHOI
 * DEV'S EMAIL: JAEMINCHE@GMAIL.COM
 */

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();
  middlewares.push(logger);
}

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

function loadUser() {
  // console.log('로드유저');
  try {
    const user = sessionStorage.getItem('user');
    if (!user) return;
    // console.log('세션스토리지', user);
    store.dispatch(tempSetUser(user));
    store.dispatch(check());
  } catch (e) {
    console.log('sessionStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
loadUser();

React.icons = icons;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
