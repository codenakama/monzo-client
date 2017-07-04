import * as types from "./actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  balanceData: {},
  accountsData: {},
  transactions: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BALANCE_DATA_FETCHED:
      return state.merge({
        balanceData: action.data
      });

    case types.ACCOUNTS_LOADED:
      return state.merge({
        accountsData: action.data
      });

    case types.TRANSACTIONS_LOADED:
      return state.merge({
        transactions: action.data.transactions
      });
    default:
      return state;
  }
}

// selectors

export function getBalanceData(state) {
  return state.account.balanceData;
}

export function getAccounts(state) {
  return state.account.accountsData.accounts;
}

export function getTransactions(state) {
  console.log(state.account.transactions);
  return state.account.transactions;
}
