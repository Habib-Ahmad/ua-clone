import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import store from "../utils/store";
import { initialState, reducer } from "./authReducer";
import { useGlobalContext } from "./context";

const Context = createContext();

const AuthContextProvider = ({ children }) => {
  const {
    state: { isLoggedIn },
  } = useGlobalContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  const navigation = useNavigation();
  const currentRoute = useNavigationState(
    (state) => state?.routes[state?.routes?.length - 1]
  )?.name;
  const prevRoute = useNavigationState((state) => state?.routes[state?.routes?.length - 2])?.name;
  const allowedRoutes = useMemo(
    () => ["ForgotPINScreen", "OTPScreen", "CreatePINScreen", "ConfirmPINScreen"],
    []
  );

  useEffect(() => {
    const getToken = async () => {
      const token = await store.getRefreshToken();
      if (!token || prevRoute === "SigninScreen" || allowedRoutes.includes(currentRoute)) return;

      if (!state.isLoggedIn && !isLoggedIn) {
        navigation.navigate("WelcomeBackScreen");
      }
    };

    getToken();
  }, [allowedRoutes, currentRoute, isLoggedIn, navigation, prevRoute, state.isLoggedIn]);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(Context);
