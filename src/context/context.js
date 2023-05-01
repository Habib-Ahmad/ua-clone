import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import urls from "../api/urls";
import store from "../utils/store";
import actions from "./actions";
import { defaultReducer, initialState } from "./reducer";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultReducer, initialState);
  const navigation = useNavigation();

  useEffect(() => {
    const getToken = async () => {
      const token = await store.getRefreshToken();

      if (!token) {
        dispatch({
          type: actions.setIsReturningUser,
          payload: false,
        });
        return;
      }

      try {
        const response = await axios.post(
          `https://api-ultra.herokuapp.com${urls.auth.refreshToken}`,
          { refreshToken: token }
        );
        dispatch({
          type: actions.setAccessToken,
          payload: {
            token: response.data.tokens.accessToken,
            expiry: response.data.tokens.tokenExpiry,
          },
        });
        dispatch({
          type: actions.setIsReturningUser,
          payload: true,
        });
      } catch (error) {
        Promise.reject(error.response);
        await store.removeRefreshToken();
        await store.removeRefreshExpiry();
        dispatch({
          type: actions.setIsReturningUser,
          payload: false,
        });
      }
    };

    getToken();
  }, [contextValue, navigation]);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

export const useGlobalContext = () => useContext(Context);
