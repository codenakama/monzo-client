const api = "https://api.monzo.com";

export const WHOAMI = api + "/ping/whoami";
export const ACCOUNTS = api + "/accounts";
export const BALANCE = api + "/balance";
export const TRANSACTIONS =
  api +
  `/transactions?expand[]=merchant&account_id=${process.env
    .REACT_APP_ACCOUNT_ID}`;
