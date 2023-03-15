const actions = {
  setAccessToken: "SET_ACCESS_TOKEN",
  setIsRefreshTokenPresent: "SET_IS_REFRESH_TOKEN_PRESENT",
  setLoading: "SET_LOADING",
  registeringUser: {
    set: "SET_REGISTERING_USER",
    clear: "CLEAR_REGISTERING_USER",
  },
  logout: "LOGOUT",
  login: "LOGIN",
  setLoggedIn: "SET_LOGGED_IN",
  setFiatWorth: "SET_FIAT_WORTH",
  setFiatWallets: "SET_FIAT_WALLETS",
};

export default actions;
