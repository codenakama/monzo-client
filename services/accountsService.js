import getConfig from 'next/config';
import * as config from './config';
import authService from './authService';

const { publicRuntimeConfig } = getConfig();

// need to DRY
const getBalance = async (accountId) => {
  const url = `${config.BALANCE}?account_id=${accountId}`;

  const headers = new Headers();
  const token = authService.getToken();

  headers.append('authorization', `Bearer ${token}`);

  const response = await fetch(url, {
    method: 'GET',

    headers,
  });

  if (!response.ok) {
    throw new Error(`AccountsService Error, status ${response.status}`);
  }
  const result = await response.json();

  return result;
};

const getAccounts = async () => {
  const url = config.ACCOUNTS;

  const headers = new Headers();
  const token = authService.getToken();
  headers.append('authorization', `Bearer ${token}`);

  const response = await fetch(url, {
    method: 'GET',

    headers,
  });

  if (!response.ok) {
    throw new Error(`AccountsService Error, status ${response.status}`);
  }
  const result = await response.json();

  return result;
};

const getTransactions = async (accountId) => {
  const url = `${config.TRANSACTIONS}?expand[]=merchant&account_id=${accountId}`;
  const token = authService.getToken();
  const headers = new Headers();
  headers.append('authorization', `Bearer ${token}`);

  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    throw new Error(`AccountsService Error, status ${response.status}`);
  }
  const result = await response.json();

  return result;
};

export default {
  getAccounts,
  getBalance,
  getTransactions,
};
