import actions from "./actions";

export const initialState = {
  isLoggedIn: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case actions.setLoggedIn: {
      return {
        ...state,
        isLoggedIn: true,
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
