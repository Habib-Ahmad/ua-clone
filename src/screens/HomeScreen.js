import { useEffect, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  LayoutAnimation,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useIsFocused } from "@react-navigation/native";
import BackArrowDark from "../assets/BackArrowDark";
import Notification from "../assets/Notification";
import Share from "../assets/Share";
import Topup from "../assets/Topup";
import Transfer from "../assets/Transfer";
import Wave from "../assets/Wave";
import Withdraw from "../assets/Withdraw";
import { colors } from "../utils/colors";
import CryptoScreen from "./CryptoScreen";
import MoneyScreen from "./MoneyScreen";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HomeScreen = () => {
  const [active, setActive] = useState();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!active) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(false);
    } else {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setExpanded(true);
    }
  }, [active]);

  const total = moneyWalllets.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue.balance),
    0
  );

  const isFocused = useIsFocused();
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar barStyle="light-content" backgroundColor={colors.primary} />}

      <View style={styles.header}>
        <View style={styles.headerTop}>
          {active ? (
            <TouchableOpacity activeOpacity={0.6} onPress={() => setActive()}>
              <BackArrowDark />
            </TouchableOpacity>
          ) : (
            <Image style={styles.logo} source={require("../assets/logo-white.png")} />
          )}

          <View style={styles.icons}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Share />
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Notification />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerMiddle}>
          <View>
            <Text style={styles.balance}>
              {active || `₦‎${String(total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            </Text>
            <Text style={styles.balanceText}>Balance Available</Text>
          </View>
        </View>

        {expanded && (
          <Animated.View style={styles.headerBottom}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Topup />
              <Text style={styles.actionText}>Topup</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Transfer />
              <Text style={styles.actionText}>Transfer</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <Withdraw />
              <Text style={styles.actionText}>Withdraw</Text>
            </TouchableOpacity>
          </Animated.View>
        )}
      </View>
      <View style={styles.wave}>
        <Wave />
      </View>

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
          {() => <MoneyScreen wallets={moneyWalllets} setActive={setActive} />}
        </Tab.Screen>
        <Tab.Screen name="Crypto" component={CryptoScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
  },
  wave: {
    bottom: 5,
    left: 0,
    right: 0,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
    height: 80,
  },
  logo: {
    maxWidth: "30%",
    height: 80,
    resizeMode: "contain",
  },
  icons: {
    flexDirection: "row",
  },
  space: {
    width: 20,
    height: 20,
  },
  headerMiddle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "10%",
    paddingTop: 30,
  },
  actionText: {
    color: colors.white,
    marginTop: 5,
  },
  balance: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  balanceText: {
    color: colors.white,
    fontWeight: "200",
    textAlign: "center",
  },
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
