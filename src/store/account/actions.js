import * as types from "./actionTypes";
import accountsService from "../../services/accountsService";

export function loadAccount() {
  return async (dispatch, getState) => {
    try {
      console.log("hello");
      const data = await accountsService.getAccounts();

      dispatch({ type: types.ACCOUNTS_LOADED, data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function loadBalance() {
  return async (dispatch, getState) => {
    try {
      const data = await accountsService.getBalance();

      dispatch({ type: types.BALANCE_DATA_FETCHED, data });
    } catch (error) {
      console.error(error);
    }
  };
}

export function loadTransactions() {
  return async (dispatch, getState) => {
    try {
      const data = await accountsService.getTransactions();
      console.log(data);
      dispatch({ type: types.TRANSACTIONS_LOADED, data });
    } catch (error) {
      console.error(error);
    }
  };
}
