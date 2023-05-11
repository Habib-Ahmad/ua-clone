import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BackArrow from "../assets/BackArrow";

const ScreenHeader = ({ heading, noBackButton }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {noBackButton ? (
        <View style={styles.space} />
      ) : (
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
      )}

      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: "15%",
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    marginBottom: 30,
  },
  space: {
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
