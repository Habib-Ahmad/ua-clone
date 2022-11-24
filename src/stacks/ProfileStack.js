import { createStackNavigator } from "@react-navigation/stack";
import ColorSettingScreen from "../screens/ColorSettingScreen";
import ContactScreen from "../screens/ContactScreen";
import ProfileInfoScreen from "../screens/PersonalInfoScreen";
import PolicyScreen from "../screens/PolicyScreen";
import ProfileScreen from "../screens/ProfileScreen";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="ProfileinfoScreen" component={ProfileInfoScreen} />
      <ProfileStack.Screen name="ContactScreen" component={ContactScreen} />
      <ProfileStack.Screen name="PolicyScreen" component={PolicyScreen} />
      <ProfileStack.Screen name="ColorSettingScreen" component={ColorSettingScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
