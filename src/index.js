import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>, rootElement,
);
