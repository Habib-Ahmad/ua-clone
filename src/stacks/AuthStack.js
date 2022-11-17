import { createStackNavigator } from "@react-navigation/stack";
import ConfirmPINScreen from "../screens/auth/ConfirmPINScreen";
import CreatePINScreen from "../screens/auth/CreatePINScreen";
import DOBScreen from "../screens/auth/DOBScreen";
import GenderScreen from "../screens/auth/GenderScreen";
import GetStarted from "../screens/auth/GetStartedScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import ReasonScreen from "../screens/auth/ReasonScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import SplashScreen from "../screens/auth/SplashScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="GetStarted" component={GetStarted} />
      <AuthStack.Screen name="OTPScreen" component={OTPScreen} />
      <AuthStack.Screen name="ReasonScreen" component={ReasonScreen} />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen} />
      <AuthStack.Screen name="GenderScreen" component={GenderScreen} />
      <AuthStack.Screen name="DOBScreen" component={DOBScreen} />
      <AuthStack.Screen name="CreatePINScreen" component={CreatePINScreen} />
      <AuthStack.Screen name="ConfirmPINScreen" component={ConfirmPINScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
