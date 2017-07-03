import _ from "lodash";
import { browserHistory } from "react-router";

const AUTH_TOKEN = "monzo_authToken";
const TOKEN_EXPIRE = "monzo_tokenExpireIn";

class AuthService {
  async login(email, password) {
    const redirect = "http://localhost:3000";
    const stateToken = btoa(Math.random());
    const url = `https://api.monzo.com/ping/whoami`;

    var headers = new Headers();
    headers.append(
      "Bearer",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5TTU4ZU1JOTlHVmRocVFVZ0QiLCJleHAiOjE0OTkxNDc2ODUsImlhdCI6MTQ5OTEyNjA4NSwianRpIjoidG9rXzAwMDA5TTVDaU1MdkdQMk1zME03aWoiLCJ1aSI6InVzZXJfMDAwMDlEaHIzcTQ2d3owdXl0VUhKWiIsInYiOiIyIn0.BUb4Urbk5g6H9YZ0QcAdqzbz8dUAgCmT0n2XqggnXvEeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjaSI6Im9hdXRoY2xpZW50XzAwMDA5TTU4ZU1JOTlHVmRocVFVZ0QiLCJleHAiOjE0OTkxNDc2ODUsImlhdCI6MTQ5OTEyNjA4NSwianRpIjoidG9rXzAwMDA5TTVDaU1MdkdQMk1zME03aWoiLCJ1aSI6InVzZXJfMDAwMDlEaHIzcTQ2d3owdXl0VUhKWiIsInYiOiIyIn0.BUb4Urbk5g6H9YZ0QcAdqzbz8dUAgCmT0n2XqggnXvE"
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
