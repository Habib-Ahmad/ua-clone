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
    setAmount: "SET_TOPUP_AMOUNT",
    setPaymentCurrencyId: "SET_PAYMENT_CURRENCY_ID",
  },
  withdrawal: {
    setAmount: "SET_WITHDRAWAL_AMOUNT",
  },
  setBanks: "SET_BANKS",
  setActiveTrades: "SET_ACTIVE_TRADES",
  setRealTimeData: "SET_REAL_TIME_DATA",
  setActiveWallet: "SET_ACTIVE_WALLET",
};

export default actions;
