import createHistory from 'history/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {} from 'react-router-dom';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import Routes from './routes/routes';
import * as reducers from './store/reducers';

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));
const history = createHistory();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={history} />
  </Provider>,
  document.getElementById('root')
);

export default store;
