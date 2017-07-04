import * as types from "./actionTypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  balanceData: {},
  accountsData: {}
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
    default:
      return state;
  }
}

// selectors

export function getBalanceData(state) {
  return state.account.balanceData;
}

export function getAccounts(state) {
  console.log(state.account.accountsData.accounts);
  return state.account.accountsData.accounts;
}
