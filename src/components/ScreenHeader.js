import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BackArrow from "../assets/BackArrow";

const ScreenHeader = ({ heading, goBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => goBack()}>
        <BackArrow />
      </TouchableOpacity>

      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    position: "relative",
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
});