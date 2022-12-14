import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ContextProvider from "./src/context/context";
import AuthStackScreen from "./src/stacks/AuthStack";
import MainStackScreen from "./src/stacks/MainStack";
import { colors } from "./src/utils/colors";

const App = () => {
  const loggedIn = true;

  return (
    <ContextProvider>
      <StatusBar style="dark" backgroundColor={colors.bg} />

      <NavigationContainer>
        {!loggedIn ? <AuthStackScreen /> : <MainStackScreen />}
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
