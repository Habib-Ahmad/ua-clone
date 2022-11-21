import {
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useIsFocused } from "@react-navigation/native";
import LeftArrow from "../assets/LeftArrow";
import Notification from "../assets/Notification";
import RightArrow from "../assets/RightArrow";
import Share from "../assets/Share";
import Wave from "../assets/Wave";
import { colors } from "../utils/colors";
import CryptoScreen from "./CryptoScreen";
import MoneyScreen from "./MoneyScreen";

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const Tab = createMaterialTopTabNavigator();

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar barStyle="light-content" backgroundColor={colors.primary} />}

      <View style={styles.waveWrapper}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Image style={styles.logo} source={require("../assets/logo-white.png")} />

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

          <View style={styles.headerBottom}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <LeftArrow />
            </TouchableOpacity>

            <View>
              <Text style={styles.balanace}>₦554,200,778</Text>
              <Text style={styles.balanaceText}>Balanace Available</Text>
            </View>

            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <RightArrow />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wave}>
          <Wave />
        </View>
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
        <Tab.Screen name="Money" component={MoneyScreen} />
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
  waveWrapper: {
    paddingBottom: 100,
    position: "relative",
    minHeight: Dimensions.get("screen").height / 3,
  },
  header: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingBottom: 10,
    height: 200,
  },
  wave: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  headerTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 40,
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
  headerBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  balanace: {
    color: colors.white,
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 5,
  },
  balanaceText: {
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
