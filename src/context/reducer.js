import actions from "./actions";

export const initialState = {
  accessToken: "",
  accessExpiry: "",
  isRefreshTokenPresent: null,
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
};

export const defaultReducer = (state, action) => {
  switch (action.type) {
    case actions.setAccessToken: {
      return {
        ...state,
        accessToken: action.payload.token,
        accessExpiry: action.payload.expiry,
      };
    }

    case actions.setIsRefreshTokenPresent: {
      return {
        ...state,
        isRefreshTokenPresent: action.payload,
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
        isRefreshTokenPresent: true,
        isLoggedIn: true,
      };
    }

    case actions.logout: {
      return {
        ...initialState,
        isRefreshTokenPresent: false,
      };
    }

    default: {
      return state;
    }
  }
};
