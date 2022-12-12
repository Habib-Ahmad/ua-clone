import { createStackNavigator } from "@react-navigation/stack";
import ConfirmSendCryptoScreen from "../screens/ConfirmSendCryptoScreen";
import SendCryptoScreen from "../screens/SendCryptoScreen";
import TopupScreen from "../screens/TopupScreen";
import BottomTabs from "./BottomTabs";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={BottomTabs} />
      <MainStack.Screen name="TopupScreen" component={TopupScreen} />
      <MainStack.Screen name="SendCryptoScreen" component={SendCryptoScreen} />
      <MainStack.Screen name="ConfirmSendCryptoScreen" component={ConfirmSendCryptoScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
