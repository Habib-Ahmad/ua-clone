const actions = {
  setAccessToken: "SET_ACCESS_TOKEN",
  setIsReturningUser: "SET_IS_RETURNING_USER",
  setLoading: "SET_LOADING",
  registeringUser: {
    set: "SET_REGISTERING_USER",
    clear: "CLEAR_REGISTERING_USER",
  },
  setUser: "SET_USER",
  logout: "LOGOUT",
  login: "LOGIN",
  setLoggedIn: "SET_LOGGED_IN",
  setFiatWorth: "SET_FIAT_WORTH",
  setFiatWallets: "SET_FIAT_WALLETS",
  topup: {
    setAmount: "SET_AMOUNT",
  },
  setActiveTrades: "SET_ACTIVE_TRADES",
};

export default actions;
