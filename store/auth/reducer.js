import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  isAuthenticated: false,
  isFetchingToken: false,
  error: '',
  userId: '',
  token: ''
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.FETCHING_TOKEN: {
      return Immutable.merge(state, {
        isFetchingToken: true
      });
    }

    case types.LOGIN_COMPLETED: {
      return Immutable.merge(state, {
        isAuthenticated: true,
        isFetchingToken: false,
        userId: action.payload.userId,
        token: action.payload.token
      });
    }

    case types.FAILED_FETCHING_TOKEN: {
      return Immutable.merge(state, {
        isAuthenticated: false,
        isFetchingToken: false,
        error: 'Login failed'
      });
    }

    case types.LOGOUT: {
      return Immutable.merge(state, {
        isAuthenticated: false
      });
    }

    default:
      return state;
  }
}
