import { createStackNavigator } from "@react-navigation/stack";
import GetStarted from "../screens/auth/GetStartedScreen";
import SplashScreen from "../screens/auth/SplashScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
      <AuthStack.Screen name="GetStarted" component={GetStarted} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
