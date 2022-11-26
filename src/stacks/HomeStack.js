import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import NotificationScreen from "../screens/NotificationScreen";
import WithdrawScreen from "../screens/WithdrawScreen";
import ReviewSummaryScreen from "../screens/ReviewSummaryScreen";
import SuccessfulScreen from "../screens/SuccessfulScreen";
import Topup from "../screens/Topup";
import QuickShare from "../screens/QuickShare";
import ManageBanks from "../screens/ManageBanks";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="NotificationScreen" component={NotificationScreen} />
      <HomeStack.Screen name="WithdrawScreen" component={WithdrawScreen} />
      <HomeStack.Screen name="ReviewSummaryScreen" component={ReviewSummaryScreen} />
      <HomeStack.Screen name="SuccessfulScreen" component={SuccessfulScreen} />
      <HomeStack.Screen name="Topup" component={Topup} />
      <HomeStack.Screen name="QuickShare" component={QuickShare} />
      <HomeStack.Screen name="ManageBanks" component={ManageBanks} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
