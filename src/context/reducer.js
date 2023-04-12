import actions from "./actions";

export const initialState = {
  accessToken: "",
  accessExpiry: "",
  isLoggedIn: false,
  isReturningUser: null,
  loading: false,
  registeringUser: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    deviceToken: "",
    reasons: [],
    dateOfBirth: "",
    referralCode: "",
    address: "",
    appId: "",
  },
  topup: {
    amount: "",
  },
  balance: {
    fiat: {
      worth: "",
      symbol: "",
      wallets: [],
    },
  },
};

export const defaultReducer = (state, action) => {
  switch (action.type) {
    case actions.setIsReturningUser: {
      return {
        ...state,
        isReturningUser: action.payload,
      };
    }

    case actions.setLoggedIn: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }

    case actions.setAccessToken: {
      return {
        ...state,
        accessToken: action.payload.token,
        accessExpiry: action.payload.expiry,
      };
    }

    case actions.setLoading: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case actions.registeringUser.set: {
      return {
        ...state,
        registeringUser: {
          ...state.registeringUser,
          ...action.payload,
        },
      };
    }

    case actions.registeringUser.clear: {
      return {
        ...state,
        registeringUser: {},
      };
    }

    case actions.login: {
      const { accessToken, accessExpiry } = action.payload;
      return {
        ...state,
        accessToken: accessToken,
        accessExpiry: accessExpiry,
        isReturningUser: true,
      };
    }

    case actions.logout: {
      return {
        ...initialState,
        isReturningUser: false,
      };
    }

    case actions.setFiatWorth: {
      return {
        ...state,
        balance: {
          ...state.balance,
          fiat: {
            ...state.balance.fiat,
            worth: action.payload.worth,
            symbol: action.payload.currency.symbol,
          },
        },
      };
    }

    case actions.setFiatWallets: {
      return {
        ...state,
        balance: {
          ...state.balance,
          fiat: {
            ...state.balance.fiat,
            wallets: action.payload,
          },
        },
      };
    }

    case actions.topup.setAmount: {
      return {
        ...state,
        topup: {
          ...state.topup,
          amount: action.payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};
