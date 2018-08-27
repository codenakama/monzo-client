import authService from '../../services/authService';
import * as types from './actionTypes';

export function loginCompleted(payload) {
  return { type: types.LOGIN_COMPLETED, payload };
}

export function fetchToken(code) {
  return async dispatch => {
    try {
      const result = await authService.fetchToken(code);
      const { user_id, access_token } = result;

      authService.setToken(access_token);

      return dispatch(loginCompleted({ userId: user_id, token: access_token }));
    } catch (error) {
      return dispatch({ type: types.FAILED_FETCHING_TOKEN });
    }
  };
}

export function logout() {
  authService.clearToken();
  return { type: types.LOGOUT };
}
