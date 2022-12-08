import { createStackNavigator } from "@react-navigation/stack";
import BuyScreen from "../screens/BuyScreen";
import ColorSettingScreen from "../screens/ColorSettingScreen";
import ContactScreen from "../screens/ContactScreen";
import EnterPinScreen from "../screens/EnterPinScreen";
import KYCVerificationScreen from "../screens/KYCVerificationScreen";
import ManageBanksScreen from "../screens/ManageBanksScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PersonalInfoScreen from "../screens/PersonalInfoScreen";
import PolicyScreen from "../screens/PolicyScreen";
import QuickShareScreen from "../screens/QuickShareScreen";
import ReceiveScreen from "../screens/ReceiveScreen";
import ReviewSummaryScreen from "../screens/ReviewSummaryScreen";
import SuccessfulScreen from "../screens/SuccessfulScreen";
import SwapDetailsScreen from "../screens/SwapDetailsScreen";
import SwapScreen from "../screens/SwapScreen";
import TopupScreen from "../screens/TopupScreen";
import TransferDetailsScreen from "../screens/TransferDetailsScreen";
import TransferScreen from "../screens/TransferScreen";
import WithdrawScreen from "../screens/WithdrawScreen";
import BottomTabs from "./BottomTabs";
import ContactTabs from "./ContactTabs";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={BottomTabs} />
      <MainStack.Screen name="TopupScreen" component={TopupScreen} />
      <MainStack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
      <MainStack.Screen name="ContactScreen" component={ContactScreen} />
      <MainStack.Screen name="NotificationScreen" component={NotificationScreen} />
      <MainStack.Screen name="BuyScreen" component={BuyScreen} />
      <MainStack.Screen name="ColorSettingScreen" component={ColorSettingScreen} />
      <MainStack.Screen name="KYCVerificationScreen" component={KYCVerificationScreen} />
      <MainStack.Screen name="ManageBanksScreen" component={ManageBanksScreen} />
      <MainStack.Screen name="PolicyScreen" component={PolicyScreen} />
      <MainStack.Screen name="QuickShareScreen" component={QuickShareScreen} />
      <MainStack.Screen name="ReceiveScreen" component={ReceiveScreen} />
      <MainStack.Screen name="ReviewSummaryScreen" component={ReviewSummaryScreen} />
      <MainStack.Screen name="SuccessfulScreen" component={SuccessfulScreen} />
      <MainStack.Screen name="SwapDetailsScreen" component={SwapDetailsScreen} />
      <MainStack.Screen name="SwapScreen" component={SwapScreen} />
      <MainStack.Screen name="WithdrawScreen" component={WithdrawScreen} />
      <MainStack.Screen name="TransferDetailsScreen" component={TransferDetailsScreen} />
      <MainStack.Screen name="TransferScreen" component={TransferScreen} />
      <MainStack.Screen name="ContactTabs" component={ContactTabs} />
      <MainStack.Screen name="EnterPinScreen" component={EnterPinScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;