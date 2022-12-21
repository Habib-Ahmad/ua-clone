import { Dimensions, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AllContactScreen from "../screens/profile/AllContactScreen";
import FavoriteScreen from "../screens/profile/FavoriteScreen";
import { colors } from "../utils/colors";

const ContactTabs = ({ transfer }) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarInactiveTintColor: colors.greyDark,
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: colors.bg,
      }}
    >
      <Tab.Screen name="Contact" options={{ title: "All Contacts" }}>
        {() => <AllContactScreen transfer={transfer} />}
      </Tab.Screen>
      <Tab.Screen name="Favorites">{() => <FavoriteScreen transfer={transfer} />}</Tab.Screen>
    </Tab.Navigator>
  );
};

export default ContactTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: colors.bg,
    elevation: 0,
    marginBottom: 20,
  },
  tabBarLabelStyle: {
    textTransform: "capitalize",
    fontWeight: "500",
    fontSize: 16,
    marginBottom: 5,
  },
  tabBarIndicatorStyle: {
    height: 3,
    borderRadius: 8,
    width: Dimensions.get("screen").width / 4,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Dimensions.get("screen").width / 8,
  },
});
