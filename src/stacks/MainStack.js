import { createStackNavigator } from "@react-navigation/stack";
import TopupScreen from "../screens/TopupScreen";
import BottomTabs from "./BottomTabs";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={BottomTabs} />
      <MainStack.Screen name="TopupScreen" component={TopupScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
