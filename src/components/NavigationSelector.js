import { useEffect } from "react";
import actions from "../context/actions";
import { useGlobalContext } from "../context/context";
import AuthStackScreen from "../stacks/AuthStack";
import MainStackScreen from "../stacks/MainStack";
import store from "../utils/store";

const NavigationSelector = () => {
  const {
    state: { isLoggedIn },
    dispatch,
  } = useGlobalContext();

  useEffect(() => {
    const getToken = async () => {
      const token = await store.getRefreshToken();
      if (!token) return;
      dispatch({ type: actions.setLoggedIn });
    };

    getToken();
  }, [dispatch]);

  return isLoggedIn ? <MainStackScreen /> : <AuthStackScreen />;
};

export default NavigationSelector;
