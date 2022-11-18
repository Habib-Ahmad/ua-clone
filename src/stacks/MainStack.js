import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import History from "../assets/History";
import Home from "../assets/Home";
import Profile from "../assets/Profile";
import HomeScreen from "../screens/HomeScreen";
import { colors } from "../utils/colors";

const BottomTab = createMaterialBottomTabNavigator();
const MainStack = createStackNavigator();

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.bg,
    justifyContent: "center",
  },
});

const HomeTabs = () => {
  return (
    <BottomTab.Navigator activeColor={colors.primary} barStyle={styles.bar}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <History color={color} />,
          tabBarLabel: "History",
          tabBarLabelStyle: { color: "green" },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Profile color={color} />,
          tabBarLabel: "Profile",
        }}
      />
    </BottomTab.Navigator>
  );
};

const MainStackScreen = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="HomeTabs" component={HomeTabs} />
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
