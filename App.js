import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./src/context/context";
import AuthStackScreen from "./src/stacks/AuthStack";
import MainStackScreen from "./src/stacks/MainStack";
import { colors } from "./src/utils/colors";

const App = () => {
  const loggedIn = true;

  return (
    <ContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />

      <NavigationContainer>
        {!loggedIn ? <AuthStackScreen /> : <MainStackScreen />}
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
