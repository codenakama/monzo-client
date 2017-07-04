import * as config from "./config";

//need to DRY
class AccountsService {
  async getBalance() {
    const url =
      config.BALANCE + `?account_id=${process.env.REACT_APP_ACCOUNT_ID}`;

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
      throw new Error(`AccountsService Error, status ${response.status}`);
    }
    const result = await response.json();

    return result;
  }

  async getAccounts() {
    const url = config.ACCOUNTS;

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
      throw new Error(`AccountsService Error, status ${response.status}`);
    }
    const result = await response.json();

    return result;
  }

  async getTransactions() {
    const url = config.TRANSACTIONS;

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
      throw new Error(`AccountsService Error, status ${response.status}`);
    }
    const result = await response.json();

    return result;
  }
}

export default new AccountsService();
