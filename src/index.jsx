import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import { setLocale, loadTranslations, syncTranslationWithStore } from 'react-redux-i18n';
import translations from './110n/translations';
import 'normalize.css';
import App from './App';
import rootReducer from './redux/rootReducer';
import watchSaga from './redux/sagas';
import history from './utils/history';
import { DEFAULT_LANGUAGE } from './config';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)));
syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale(DEFAULT_LANGUAGE));

sagaMiddleware.run(watchSaga);

const application = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
