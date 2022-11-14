import { createContext, useContext, useMemo, useReducer } from "react";
import { defaultReducer, initialState } from "./reducer";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(defaultReducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;

export const useGlobalContext = () => useContext(Context);
