import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Button from "../../components/input/Button";
import { colors } from "../../utils/colors";

const SplashScreen = ({ navigation }) => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar barStyle="light-content" backgroundColor={colors.black} />}
      <ImageBackground
        source={require("../../assets/splash-screen.png")}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={require("../../assets/logo-white.png")} />
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.heading}>Take control of your finances</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis enim purus sed
            phasellus. Cursus ornare id scelerisque aliquam.
          </Text>
        </View>

        <Button title="Get Started" onPress={() => navigation.navigate("GetStarted")} />
        <Button
          title="I already have an account"
          backgroundColor={colors.blackTransparent}
          onPress={() => navigation.navigate("SigninScreen")}
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  background: {
    flex: 1,
  },
  logoWrapper: {
    alignItems: "center",
    height: "20%",
    marginBottom: "25%",
  },
  logo: {
    width: "40%",
    height: "100%",
    resizeMode: "contain",
  },
  textWrapper: {
    flex: 1,
  },
  heading: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "700",
    fontSize: 28,
    paddingHorizontal: 5,
    marginBottom: 30,
  },
  text: {
    textAlign: "center",
    color: colors.white,
    paddingHorizontal: 30,
    fontWeight: "100",
    fontSize: 14,
    lineHeight: 25,
  },
});
