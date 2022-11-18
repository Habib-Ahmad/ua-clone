import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./src/context/context";
import AuthStackScreen from "./src/stacks/AuthStack";
import { colors } from "./src/utils/colors";

const App = () => {
  return (
    <ContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor={colors.bg} />

      <NavigationContainer>
        <AuthStackScreen />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
