import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import LeftArrow from "../assets/LeftArrow";
import Notification from "../assets/Notification";
import RightArrow from "../assets/RightArrow";
import Share from "../assets/Share";
import Wave from "../assets/Wave";
import { colors } from "../utils/colors";

const HomeScreen = () => {
  const isFocused = useIsFocused();

  return (
    <ScrollView style={styles.container}>
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
    </ScrollView>
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
    paddingBottom: 10,
    height: "100%",
  },
  waveWrapper: {
    paddingBottom: 100,
    position: "relative",
    minHeight: Dimensions.get("screen").height / 3,
  },
  wave: {
    position: "absolute",
    bottom: 5,
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
});
