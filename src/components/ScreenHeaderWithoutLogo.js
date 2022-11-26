import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackArrow from "../assets/BackArrow";
import { colors } from "../utils/colors";

const ScreenHeaderWithoutLogo = ({ heading, goBack, paragraph }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => goBack()}>
          <BackArrow />
        </TouchableOpacity>

        <View style={styles.headingWrapper}>
          <Text style={styles.heading}>{heading}</Text>
        </View>
      </View>

      {paragraph && <Text style={styles.paragraph}>{paragraph}</Text>}
    </View>
  );
};

export default ScreenHeaderWithoutLogo;

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
  paragraph: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
    paddingHorizontal: "10%",
    lineHeight: 24,
    marginBottom: 50,
  },
});
