import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import settings from './settings/reducer';
import auth from './auth/reducer';
import account from './account/reducer';

const reducers = {
  settings,
  auth,
  account,
  // ..other reducers here
};

export default initialState => createStore(
  combineReducers(reducers),
  initialState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
