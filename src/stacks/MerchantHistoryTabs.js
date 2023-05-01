import { Dimensions, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Crypto from "../screens/profile/merchantHistoryTabs/Crypto";
import Topup from "../screens/profile/merchantHistoryTabs/Topup";
import WithdrawalScreen from "../screens/profile/merchantHistoryTabs/Withdrawal";
import { colors } from "../utils";

const MerchantHistoryTabs = () => {
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
      <Tab.Screen name="Withdrawals" component={WithdrawalScreen} />
      <Tab.Screen name="Top Ups" component={Topup} />
      <Tab.Screen name="Crypto" component={Crypto} />
    </Tab.Navigator>
  );
};

export default MerchantHistoryTabs;

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
    width: Dimensions.get("screen").width / 5,
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: Dimensions.get("screen").width / 15,
  },
});
