import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen";

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
