import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ContextProvider from "./src/context/context";
import AuthStackScreen from "./src/stacks/AuthStack";

const App = () => {
  return (
    <ContextProvider>
      <StatusBar style="dark" backgroundColor="#fff" />

      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
