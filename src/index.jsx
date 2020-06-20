import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

const application = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(application, document.getElementById('root'));
