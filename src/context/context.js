import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import store from "../utils/store";
import actions from "./actions";
import { defaultReducer, initialState } from "./reducer";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultReducer, initialState);

  useEffect(() => {
    const getToken = async () => {
      const token = await store.getRefreshToken();
      if (!token) {
        dispatch({
          type: actions.setIsRefreshTokenPresent,
          payload: false,
        });
      } else {
        dispatch({
          type: actions.setIsRefreshTokenPresent,
          payload: true,
        });
      }
    };

    getToken();
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

export const useGlobalContext = () => useContext(Context);
