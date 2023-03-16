import { useEffect, useState } from "react";
import {
  Animated,
  Image,
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import axios from "../../api/axios";
import urls from "../../api/urls";
import BackArrowDark from "../../assets/BackArrowDark";
import Notification from "../../assets/Notification";
import Share from "../../assets/Share";
import Wave from "../../assets/Wave";
import CryptoActions from "../../components/CryptoActions";
import MoneyActions from "../../components/MoneyActions";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import HomeTabs from "../../stacks/HomeTabs";
import { colors } from "../../utils/colors";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const HomeScreen = ({ navigation }) => {
  const {
    state: {
      balance: { fiat },
    },
    dispatch,
  } = useGlobalContext();

  const [active, setActive] = useState();
  const [activeTab, setActiveTab] = useState("money");
  const [expanded, setExpanded] = useState(false);
  const [total, setTotal] = useState("0");

  const isFocused = useIsFocused();

  const handleNotification = () => {
    navigation.navigate("NotificationScreen");
  };

  const handleQuickShare = () => {
    navigation.navigate("QuickShareScreen");
  };

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (!active) {
      setExpanded(false);
    } else {
      setExpanded(true);
    }
  }, [active]);

  useEffect(() => {
    const getData = async () => {
      await Promise.all([axios.get(urls.fiat.worth), axios.get(urls.fiat.baseUrl)]).then(
        ([res1, res2]) => {
          dispatch({
            type: actions.setFiatWorth,
            payload: res1.data.data,
          });
          dispatch({
            type: actions.setFiatWallets,
            payload: res2.data.data,
          });
        }
      );
    };

    isFocused && getData();
  }, [dispatch, isFocused]);

  useEffect(() => {
    setTotal(() => {
      if (activeTab === "money") return `${fiat.symbol}${fiat.worth}`;

      return "5999";
    });
  }, [activeTab, fiat.symbol, fiat.worth]);

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar style="light" backgroundColor={colors.primary} />}

      <View style={styles.header}>
        <View style={styles.headerTop}>
          {active ? (
            <TouchableOpacity activeOpacity={0.6} onPress={() => setActive()}>
              <BackArrowDark />
            </TouchableOpacity>
          ) : (
            <Image style={styles.logo} source={require("../../assets/logo-white.png")} />
          )}

          <View style={styles.icons}>
            <TouchableOpacity activeOpacity={0.6} onPress={handleQuickShare}>
              <Share />
            </TouchableOpacity>
            <View style={styles.space} />
            <TouchableOpacity activeOpacity={0.6} onPress={handleNotification}>
              <Notification />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.headerMiddle}>
          <View>
            <Text style={styles.balance}>
              {active || `${String(total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`}
            </Text>
            <Text style={styles.balanceText}>Balance Available</Text>
          </View>
        </View>

        {expanded && (
          <Animated.View style={styles.headerBottom}>
            {activeTab === "crypto" ? <CryptoActions /> : <MoneyActions />}
          </Animated.View>
        )}
      </View>
      <View style={styles.wave}>
        <Wave fill={colors.primary} />
      </View>

      <HomeTabs {...{ setActive, setActiveTab }} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    paddingTop: "10%",
  },
  wave: {
    bottom: 7,
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
    paddingHorizontal: "8%",
    paddingTop: 30,
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
});
