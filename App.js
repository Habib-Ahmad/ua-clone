import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AxiosInterceptor } from "./src/api/axios";
import NavigationSelector from "./src/components/NavigationSelector";
import ContextProvider from "./src/context/context";
import { colors } from "./src/utils/colors";

const App = () => {
  return (
    <ContextProvider>
      <StatusBar style="dark" backgroundColor={colors.bg} />

      <NavigationContainer>
        <AxiosInterceptor>
          <NavigationSelector />
        </AxiosInterceptor>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;
