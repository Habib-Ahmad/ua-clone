import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { RootSiblingParent } from "react-native-root-siblings";
import { AxiosInterceptor } from "./src/api/axios";
import NavigationSelector from "./src/components/NavigationSelector";
import SignalConnection from "./src/components/SignalConnection";
import ContextProvider from "./src/context/context";
import { colors } from "./src/utils";

const App = () => {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <StatusBar style="dark" backgroundColor={colors.bg} />

        <ContextProvider>
          <AxiosInterceptor>
            <SignalConnection />
            <NavigationSelector />
          </AxiosInterceptor>
        </ContextProvider>
      </NavigationContainer>
    </RootSiblingParent>
  );
};

export default App;
