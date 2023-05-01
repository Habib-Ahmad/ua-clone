import { createStackNavigator } from "@react-navigation/stack";
import { useGlobalContext } from "../context/context";
import ConfirmPINScreen from "../screens/auth/ConfirmPINScreen";
import CreatePINScreen from "../screens/auth/CreatePINScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import EnterPinScreen from "../screens/EnterPinScreen";
import AddFiatWalletScreen from "../screens/home/AddFiatWalletScreen";
import BuyScreen from "../screens/home/BuyScreen";
import ChatScreen from "../screens/home/ChatScreen";
import ConfirmSendCryptoScreen from "../screens/home/ConfirmSendCryptoScreen";
import ForgotPINScreen from "../screens/home/ForgotPINScreen";
import InitiatedTradeScreen from "../screens/home/InitiatedTradeScreen";
import ReceiveScreen from "../screens/home/ReceiveScreen";
import ReviewSummaryScreen from "../screens/home/ReviewSummaryScreen";
import SendCryptoScreen from "../screens/home/SendCryptoScreen";
import SwapDetailsScreen from "../screens/home/SwapDetailsScreen";
import SwapScreen from "../screens/home/SwapScreen";
import TopupMethodScreen from "../screens/home/TopupMethodScreen";
import TopupScreen from "../screens/home/TopupScreen";
import TradesScreen from "../screens/home/TradesScreen";
import TransferDetailsScreen from "../screens/home/TransferDetailsScreen";
import TransferScreen from "../screens/home/TransferScreen";
import WelcomeBack from "../screens/home/WelcomeBack";
import WithdrawScreen from "../screens/home/WithdrawScreen";
import ActiveTradesScreen from "../screens/profile/ActiveTradesScreen";
import BecomeAMerchantScreen from "../screens/profile/BecomeAMerchantScreen";
import ColorSettingScreen from "../screens/profile/ColorSettingScreen";
import ContactScreen from "../screens/profile/ContactScreen";
import KYCScreen from "../screens/profile/KYCScreen";
import ManageBanksScreen from "../screens/profile/ManageBanksScreen";
import MerchantHistoryScreen from "../screens/profile/MerchantHistoryScreen";
import MerchantScreen from "../screens/profile/MerchantScreen";
import NotificationScreen from "../screens/profile/NotificationScreen";
import PersonalInfoScreen from "../screens/profile/PersonalInfoScreen";
import PolicyScreen from "../screens/profile/PolicyScreen";
import RatingScreen from "../screens/profile/RatingScreen";
import ReportScreen from "../screens/profile/ReportScreen";
import RequestScreen from "../screens/profile/RequestScreen";
import TradeScreen from "../screens/profile/TradeScreen";
import QuickShareScreen from "../screens/QuickShareScreen";
import SuccessfulScreen from "../screens/SuccessfulScreen";
import SuccessScreen from "../screens/SuccessScreen";
import BottomTabs from "./BottomTabs";
import ContactTabs from "./ContactTabs";

const MainStack = createStackNavigator();

const MainStackScreen = () => {
  const {
    state: { accessToken, isLoggedIn },
  } = useGlobalContext();

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      {accessToken && isLoggedIn ? (
        <MainStack.Screen name="Home" component={BottomTabs} />
      ) : (
        <MainStack.Screen name="WelcomeBackScreen" component={WelcomeBack} />
      )}
      <MainStack.Screen name="TopupScreen" component={TopupScreen} />
      <MainStack.Screen name="TopupMethodScreen" component={TopupMethodScreen} />
      <MainStack.Screen name="TradesScreen" component={TradesScreen} />
      <MainStack.Screen name="InitiatedTradeScreen" component={InitiatedTradeScreen} />
      <MainStack.Screen name="SendCryptoScreen" component={SendCryptoScreen} />
      <MainStack.Screen name="ConfirmSendCryptoScreen" component={ConfirmSendCryptoScreen} />
      <MainStack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
      <MainStack.Screen name="ContactScreen" component={ContactScreen} />
      <MainStack.Screen name="NotificationScreen" component={NotificationScreen} />
      <MainStack.Screen name="BuyScreen" component={BuyScreen} />
      <MainStack.Screen name="ColorSettingScreen" component={ColorSettingScreen} />
      <MainStack.Screen name="ReportScreen" component={ReportScreen} />
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
      <MainStack.Screen name="ForgotPINScreen" component={ForgotPINScreen} />
      <MainStack.Screen name="CreatePINScreen" component={CreatePINScreen} />
      <MainStack.Screen name="ConfirmPINScreen" component={ConfirmPINScreen} />
      <MainStack.Screen name="OTPScreen" component={OTPScreen} />
      <MainStack.Screen name="SuccessScreen" component={SuccessScreen} />
      <MainStack.Screen name="MerchantScreen" component={MerchantScreen} />
      <MainStack.Screen name="RequestScreen" component={RequestScreen} />
      <MainStack.Screen name="MerchantHistoryScreen" component={MerchantHistoryScreen} />
      <MainStack.Screen name="TradeScreen" component={TradeScreen} />
      <MainStack.Screen name="RatingScreen" component={RatingScreen} />
      <MainStack.Screen name="AddFiatWalletScreen" component={AddFiatWalletScreen} />
      <MainStack.Screen name="BecomeAMerchantScreen" component={BecomeAMerchantScreen} />
      <MainStack.Screen name="KYCScreen" component={KYCScreen} />
      <MainStack.Screen name="ActiveTradesScreen" component={ActiveTradesScreen} />
      <MainStack.Screen name="ChatScreen" component={ChatScreen} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
