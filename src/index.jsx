import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import 'normalize.css';
import App from './App';
import rootReducer from './redux/rootReducer';
import watchSaga from './redux/sagas';
import history from './utils/history';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware, thunk)));

sagaMiddleware.run(watchSaga);

const application = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
