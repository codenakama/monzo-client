import Immutable from 'seamless-immutable';
import * as types from './actionTypes';

const initialState = Immutable({
  balanceData: {},
  accountsData: {},
  transactions: [],
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BALANCE_DATA_FETCHED: {
      return Immutable.merge(state, {
        balanceData: action.data,
      });
    }

    case types.ACCOUNTS_LOADED: {
      const activeAccounts = action.data.accounts.filter(a => !a.closed);

      return Immutable.merge(state, {
        account: activeAccounts[0],
      });
    }

    case types.TRANSACTIONS_LOADED: {
      return Immutable.merge(state, {
        transactions: action.data.transactions,
      });
    }

    default:
      return state;
  }
}

// selectors

export function getBalanceData(state) {
  return state.account.balanceData;
}

export function getAccount(state) {
  return state.account.account;
}

export function getTransactions(state) {
  return state.account.transactions;
}
