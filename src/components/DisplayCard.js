import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../utils/colors";

const DisplayCard = ({ children, ...others }) => {
  return (
    <>
      <TouchableOpacity style={styles.wrapper} activeOpacity={0.9} {...others}>
        {children}
        <View style={styles.icon}>
          <FontAwesome name="angle-right" size={24} color={colors.grey} />
        </View>
      </TouchableOpacity>
      <View style={styles.line}/>
    </>
  );
};

export default DisplayCard;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: "5%",
    paddingVertical: "5%",
    marginBottom: "5%",
    flexDirection: "row",
  },
  line: {
    height: 1,
    width: "100%",
    marginTop: 1,
    backgroundColor: colors.greyLight,
  },
  icon: {
    justifyContent: "center",
    paddingHorizontal: 60
  }
});
