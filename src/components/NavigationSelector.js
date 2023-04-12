import { useGlobalContext } from "../context/context";
import AuthStackScreen from "../stacks/AuthStack";
import MainStackScreen from "../stacks/MainStack";
import FullScreenLoader from "./FullScreenLoader";

const NavigationSelector = () => {
  const {
    state: { isReturningUser },
  } = useGlobalContext();

  if (isReturningUser === null) {
    return <FullScreenLoader />;
  }

  return isReturningUser ? <MainStackScreen /> : <AuthStackScreen />;
};

export default NavigationSelector;
