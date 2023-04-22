import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import History from "../assets/History";
import Home from "../assets/Home";
import Profile from "../assets/Profile";
import HistoryScreen from "../screens/history/HistoryScreen";
import HomeScreen from "../screens/home/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import { colors } from "../utils";

const BottomTab = createMaterialBottomTabNavigator();
const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.bg,
    justifyContent: "center",
  },
});

const BottomTabs = () => {
  return (
    <BottomTab.Navigator activeColor={colors.primary} barStyle={styles.bar} screenOptions>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => <History color={color} />,
          tabBarLabel: "History",
        }}
      />
      <BottomTab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <Profile color={color} />,
          tabBarLabel: "Profile",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
