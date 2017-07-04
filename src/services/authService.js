import _ from "lodash";
import { browserHistory } from "react-router";

const AUTH_TOKEN = "monzo_authToken";
const TOKEN_EXPIRE = "monzo_tokenExpireIn";

class AuthService {
  async login(email, password) {
    const redirect = "http://localhost:3000";
    const stateToken = btoa(Math.random());
    const url = `https://api.monzo.com/ping/whoami`;

    console.log(process.env.REACT_APP_TEST_TOKEN);
    var headers = new Headers();
    headers.append(
      "authorization",
      `Bearer ${process.env.REACT_APP_TEST_TOKEN}`
    );

    const response = await fetch(url, {
      method: "GET",

      headers: headers
    });

    if (!response.ok) {
      throw new Error(`Authentication Error, status ${response.status}`);
    }
    const result = await response.json();

    console.log(result);
  }

  setToken(token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(AUTH_TOKEN);
  }

  setTokenExpire(min) {
    localStorage.setItem(TOKEN_EXPIRE, min);
  }

  getTokenExpire() {
    return localStorage.getItem(TOKEN_EXPIRE);
  }

  logout() {
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(TOKEN_EXPIRE);
    browserHistory.replace("/");
  }
}

export default new AuthService();
