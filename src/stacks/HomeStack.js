import { createStackNavigator } from "@react-navigation/stack";
import BuyScreen from "../screens/BuyScreen";
import HomeScreen from "../screens/HomeScreen";
import ManageBanksScreen from "../screens/ManageBanksScreen";
import NotificationScreen from "../screens/NotificationScreen";
import QuickShareScreen from "../screens/QuickShareScreen";
import ReceiveScreen from "../screens/ReceiveScreen";
import ReviewSummaryScreen from "../screens/ReviewSummaryScreen";
import SuccessfulScreen from "../screens/SuccessfulScreen";
import SwapDetailsScreen from "../screens/SwapDetailsScreen";
import SwapScreen from "../screens/SwapScreen";
import TopupScreen from "../screens/TopupScreen";
import WithdrawScreen from "../screens/WithdrawScreen";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="NotificationScreen" component={NotificationScreen} />
      <HomeStack.Screen name="WithdrawScreen" component={WithdrawScreen} />
      <HomeStack.Screen name="ReviewSummaryScreen" component={ReviewSummaryScreen} />
      <HomeStack.Screen name="SuccessfulScreen" component={SuccessfulScreen} />
      <HomeStack.Screen name="TopupScreen" component={TopupScreen} />
      <HomeStack.Screen name="QuickShareScreen" component={QuickShareScreen} />
      <HomeStack.Screen name="ManageBanksScreen" component={ManageBanksScreen} />
      <HomeStack.Screen name="ReceiveScreen" component={ReceiveScreen} />
      <HomeStack.Screen name="BuyScreen" component={BuyScreen} />
      <HomeStack.Screen name="SwapScreen" component={SwapScreen} />
      <HomeStack.Screen name="SwapDetailsScreen" component={SwapDetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
