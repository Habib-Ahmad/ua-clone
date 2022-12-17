import { createStackNavigator } from "@react-navigation/stack";
import ConfirmPINScreen from "../screens/auth/ConfirmPINScreen";
import CreatePINScreen from "../screens/auth/CreatePINScreen";
import DOBScreen from "../screens/auth/DOBScreen";
import GetStarted from "../screens/auth/GetStartedScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import ReasonScreen from "../screens/auth/ReasonScreen";
import ResetPINScreen from "../screens/auth/ResetPINScreen";
import SigninScreen from "../screens/auth/SigninScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import SplashScreen from "../screens/auth/SplashScreen";
import WelcomeBack from "../screens/auth/WelcomeBack";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="GetStarted" component={GetStarted} />
      <AuthStack.Screen name="OTPScreen" component={OTPScreen} />
      <AuthStack.Screen name="ReasonScreen" component={ReasonScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
      <AuthStack.Screen name="DOBScreen" component={DOBScreen} />
      <AuthStack.Screen name="CreatePINScreen" component={CreatePINScreen} />
      <AuthStack.Screen name="ConfirmPINScreen" component={ConfirmPINScreen} />
      <AuthStack.Screen name="WelcomeBack" component={WelcomeBack} />
      <AuthStack.Screen name="SigninScreen" component={SigninScreen} />
      <AuthStack.Screen name="ResetPINScreen" component={ResetPINScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
