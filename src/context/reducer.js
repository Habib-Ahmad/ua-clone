import actions from "./actions";

export const initialState = {
  isLoggedIn: false,
  accessToken: "",
  accessExpiry: "",
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

    case actions.setLoggedIn: {
      return {
        ...state,
        isLoggedIn: true,
      };
    }

    case actions.login: {
      const { accessToken, accessExpiry } = action.payload;
      return {
        ...state,
        isLoggedIn: true,
        accessToken: accessToken,
        accessExpiry: accessExpiry,
      };
    }

    case actions.logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};
