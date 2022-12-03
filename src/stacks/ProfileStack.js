import { createStackNavigator } from "@react-navigation/stack";
import ColorSettingScreen from "../screens/ColorSettingScreen";
import ContactScreen from "../screens/ContactScreen";
import KYCVerificationScreen from "../screens/KYCVerificationScreen";
import PersonalInfoScreen from "../screens/PersonalInfoScreen";
import PolicyScreen from "../screens/PolicyScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SuccessfulScreen from "../screens/SuccessfulScreen";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="PersonalInfoScreen" component={PersonalInfoScreen} />
      <ProfileStack.Screen name="ContactScreen" component={ContactScreen} />
      <ProfileStack.Screen name="PolicyScreen" component={PolicyScreen} />
      <ProfileStack.Screen name="ColorSettingScreen" component={ColorSettingScreen} />
      <ProfileStack.Screen name="SuccessfulScreen" component={SuccessfulScreen} />
      <ProfileStack.Screen name="KYCVerificationScreen" component={KYCVerificationScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
