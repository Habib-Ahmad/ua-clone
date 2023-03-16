import AuthContextProvider from "../context/authContext";
import { useGlobalContext } from "../context/context";
import AuthStackScreen from "../stacks/AuthStack";
import MainStackScreen from "../stacks/MainStack";
import FullScreenLoader from "./FullScreenLoader";

const NavigationSelector = () => {
  // const {
  //   state: { isRefreshTokenPresent },
  // } = useGlobalContext();

  const isRefreshTokenPresent = true;

  if (isRefreshTokenPresent === null) {
    return <FullScreenLoader />;
  }

  return isRefreshTokenPresent ? (
    <AuthContextProvider>
      <MainStackScreen />
    </AuthContextProvider>
  ) : (
    <AuthStackScreen />
  );
};

export default NavigationSelector;
