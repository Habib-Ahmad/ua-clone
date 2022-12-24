import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AxiosInterceptor } from "./src/api/axios";
import NavigationSelector from "./src/components/NavigationSelector";
import ContextProvider from "./src/context/context";
import { colors } from "./src/utils/colors";

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style="dark" backgroundColor={colors.bg} />

      <ContextProvider>
        <AxiosInterceptor>
          <NavigationSelector />
        </AxiosInterceptor>
      </ContextProvider>
    </NavigationContainer>
  );
};

export default App;
