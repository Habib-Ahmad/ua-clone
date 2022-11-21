import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import History from "../assets/History";
import Home from "../assets/Home";
import Profile from "../assets/Profile";
import { colors } from "../utils/colors";
import HomeStack from "./HomeStack";

const BottomTab = createMaterialBottomTabNavigator();

const styles = StyleSheet.create({
  bar: {
    backgroundColor: colors.bg,
    justifyContent: "center",
  },
});

const MainStackScreen = () => {
  return (
    <BottomTab.Navigator activeColor={colors.primary} barStyle={styles.bar}>
      <BottomTab.Screen
        name="HomeStackScreen"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <Home color={color} />,
          tabBarLabel: "Home",
        }}
      />
      <BottomTab.Screen
        name="History"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <History color={color} />,
          tabBarLabel: "History",
          tabBarLabelStyle: { color: "green" },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color }) => <Profile color={color} />,
          tabBarLabel: "Profile",
        }}
      />
    </BottomTab.Navigator>
  );
};

export default MainStackScreen;
