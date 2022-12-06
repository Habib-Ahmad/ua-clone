import { Dimensions, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CryptoScreen from "../screens/CryptoScreen";
import MoneyScreen from "../screens/MoneyScreen";
import { colors } from "../utils/colors";

const HomeTabs = ({ setActive, setActiveTab }) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarInactiveTintColor: colors.greyLight,
        tabBarActiveTintColor: colors.primary,
        tabBarPressColor: colors.bg,
      }}
    >
      <Tab.Screen name="Money">
        {({ navigation }) => (
          <MoneyScreen
            wallets={moneyWalllets}
            setActive={setActive}
            setActiveTab={setActiveTab}
            isFocused={navigation.isFocused()}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Crypto">
        {({ navigation }) => (
          <CryptoScreen
            wallets={cryptoWalllets}
            setActive={setActive}
            setActiveTab={setActiveTab}
            isFocused={navigation.isFocused()}
          />
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default HomeTabs;

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

const moneyWalllets = [
  {
    wallet: "Naira (NGN)",
    symbol: "₦‎",
    balance: "5221008",
    percentage: "2.2%",
  },
  {
    wallet: "Pounds (GBP)",
    symbol: "£",
    balance: "5221008",
    percentage: "2.2%",
  },
  {
    wallet: "Canadian Dollars (CAD)",
    symbol: "$",
    balance: "5221008",
    percentage: "2.2%",
  },
  {
    wallet: "Euros (EUR)",
    symbol: "€",
    balance: "5221008",
    percentage: "2.2%",
  },
  {
    wallet: "Dollars (USD)",
    symbol: "$",
    balance: "5221008",
    percentage: "2.2%",
  },
];

const cryptoWalllets = [
  {
    wallet: "Bitcoin",
    currency: "BTC‎",
    symbol: "B",
    balance: "0.259",
    percentage: "2.2%",
  },
  {
    wallet: "Etherium",
    currency: "ETH",
    symbol: "E",
    balance: "0.259",
    percentage: "2.2%",
  },
  {
    wallet: "Tether",
    currency: "TEH",
    symbol: "T",
    balance: "0.259",
    percentage: "2.2%",
  },
];