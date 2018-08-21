import { browserHistory } from "react-router";
import uuidv4 from "uuid";
import * as config from "./config";

const AUTH_TOKEN = "monzo_authToken";

class AuthService {

  getOAuthUrl(){

    const client_id = process.env.REACT_APP_CLIENT_ID;
    const redirect_uri = 'http://localhost:3000';
    const state_code = uuidv4();

    return `https://auth.monzo.com/?
    client_id=${client_id}&
    redirect_uri=${redirect_uri}&
    response_type=code&
    state=${state_code}`
  }

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
