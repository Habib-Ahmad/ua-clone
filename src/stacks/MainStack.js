import { createStackNavigator } from "@react-navigation/stack";
import EnterPinScreen from "../screens/EnterPinScreen";
import BuyScreen from "../screens/home/BuyScreen";
import ConfirmSendCryptoScreen from "../screens/home/ConfirmSendCryptoScreen";
import ReceiveScreen from "../screens/home/ReceiveScreen";
import ReviewSummaryScreen from "../screens/home/ReviewSummaryScreen";
import SendCryptoScreen from "../screens/home/SendCryptoScreen";
import SwapDetailsScreen from "../screens/home/SwapDetailsScreen";
import SwapScreen from "../screens/home/SwapScreen";
import TopupScreen from "../screens/home/TopupScreen";
import TransferDetailsScreen from "../screens/home/TransferDetailsScreen";
import TransferScreen from "../screens/home/TransferScreen";
import WithdrawScreen from "../screens/home/WithdrawScreen";
import ColorSettingScreen from "../screens/profile/ColorSettingScreen";
import ContactScreen from "../screens/profile/ContactScreen";
import KYCVerificationScreen from "../screens/profile/KYCVerificationScreen";
import ManageBanksScreen from "../screens/profile/ManageBanksScreen";
import NotificationScreen from "../screens/profile/NotificationScreen";
import PersonalInfoScreen from "../screens/profile/PersonalInfoScreen";
import PolicyScreen from "../screens/profile/PolicyScreen";
import QuickShareScreen from "../screens/QuickShareScreen";
import SuccessfulScreen from "../screens/SuccessfulScreen";
import BottomTabs from "./BottomTabs";
import ContactTabs from "./ContactTabs";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Home" component={BottomTabs} />
      <MainStack.Screen name="TopupScreen" component={TopupScreen} />
      <MainStack.Screen name="SendCryptoScreen" component={SendCryptoScreen} />
      <MainStack.Screen name="ConfirmSendCryptoScreen" component={ConfirmSendCryptoScreen} />
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
