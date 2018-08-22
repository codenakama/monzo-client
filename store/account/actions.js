import * as types from './actionTypes';
import accountsService from '../../services/accountsService';

export function loadAccount() {
  return async (dispatch) => {
    try {
      const data = await accountsService.getAccounts();

      dispatch({ type: types.ACCOUNTS_LOADED, data });
      dispatch(loadBalance());
      dispatch(loadTransactions());
    } catch (error) {
      console.error(error);
    }
  };
}

export function loadBalance() {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const { id } = state.account.account;

      const data = await accountsService.getBalance(id);

      dispatch({ type: types.BALANCE_DATA_FETCHED, data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function loadTransactions() {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const { id } = state.account.account;

      const data = await accountsService.getTransactions(id);
      dispatch({ type: types.TRANSACTIONS_LOADED, data });
    } catch (error) {
      console.error(error);
    }
  };
}
