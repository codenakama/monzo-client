import uuidv4 from 'uuid';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const AUTH_TOKEN = 'monzo_authToken';
const MONZO_AUTH_BASE_URL = 'https://auth.monzo.com';
const MONZO_API_BASE_URL = 'https://api.monzo.com';

const getOAuthUrl = () => {
  const { clientId } = publicRuntimeConfig;
  const redirectUri = 'http://localhost:3000/monzo-auth';
  const stateCode = uuidv4();

  return `${MONZO_AUTH_BASE_URL}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&state=${stateCode}`;
};

const fetchWhoAmI = async (token) => {
  const url = `${MONZO_API_BASE_URL}/ping/whoami`;

  const headers = new Headers();

  headers.append('authorization', `Bearer ${token}`);

  const response = await fetch(url, {
    method: 'GET',

    headers,
  });

  if (!response.ok) {
    throw new Error(`Error, status ${response.status}`);
  }
  const result = await response.json();

  return result;
};

const fetchToken = async (code) => {
  const client_id = publicRuntimeConfig.clientId;
  const client_secret = publicRuntimeConfig.clientSecret;

  const url = `${MONZO_API_BASE_URL}/oauth2/token`;

  const formData = new FormData();
  formData.append('grant_type', 'authorization_code');
  formData.append('client_id', client_id);
  formData.append('client_id', client_id);

  formData.append('client_secret', client_secret);

  formData.append('redirect_uri', 'http://localhost:3000/monzo-auth');
  formData.append('code', code);

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`AuthService Error getToken, status ${response.status}`);
  }

  const result = await response.json();

  return result;
};

const setToken = (token) => {
  localStorage.setItem(AUTH_TOKEN, token);
};

const getToken = () => localStorage.getItem(AUTH_TOKEN);

const logout = () => localStorage.removeItem(AUTH_TOKEN);

export default {
  getOAuthUrl,
  getToken,
  fetchToken,
  setToken,
  logout,
  fetchWhoAmI,
};
