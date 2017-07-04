import _ from "lodash";
import { browserHistory } from "react-router";
import * as config from "./config";

const AUTH_TOKEN = "monzo_authToken";

class AuthService {
  async login(email, password) {
    const url = config.WHOAMI;

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
    return result;
  }

  setToken(token) {
    localStorage.setItem(AUTH_TOKEN, token);
  }

  getToken() {
    return localStorage.getItem(AUTH_TOKEN);
  }

  logout() {
    localStorage.removeItem(AUTH_TOKEN);
    browserHistory.replace("/");
  }
}

export default new AuthService();
