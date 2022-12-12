import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackArrow from "../assets/BackArrow";
import { colors } from "../utils/colors";

const ScreenHeaderWithLogo = ({ heading, paragraph }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>

        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>{heading}</Text>
        </View>
      </View>

      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>

      {paragraph && <Text style={styles.paragraph}>{paragraph}</Text>}
    </View>
  );
};

export default ScreenHeaderWithLogo;

const styles = StyleSheet.create({
  container: {
    marginTop: "10%",
    position: "relative",
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginBottom: 30,
  },
  headingWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "600",
    fontSize: 18,
  },
  logoWrapper: {
    alignItems: "center",
    height: 50,
    marginBottom: 50,
  },
  logo: {
    width: "35%",
    height: "100%",
    resizeMode: "contain",
  },
  paragraph: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
    paddingHorizontal: "10%",
    lineHeight: 24,
    marginBottom: 50,
  },
});
