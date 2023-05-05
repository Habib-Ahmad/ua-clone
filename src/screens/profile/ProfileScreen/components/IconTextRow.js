import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import RightArrow from "../../../../assets/RightArrow";
import { colors } from "../../../../utils";

const IconTextRow = ({ text, leftIcon, onPress, BAM, noArrow }) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: BAM ? colors.primary : colors.bg }]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <View style={styles.leftContainer}>
        <View style={styles.iconWrapper}>{leftIcon}</View>
        <Text style={[styles.text, { color: BAM ? colors.white : colors.text }]}>{text}</Text>
      </View>
      <View style={styles.rightContainer}>{noArrow || <RightArrow color={BAM && "white"} />}</View>
    </TouchableOpacity>
  );
};

export default IconTextRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    paddingHorizontal: 10,
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingHorizontal: 15,
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  text: {
    fontSize: 14,
    fontWeight: "480",
  },
  iconWrapper: {
    marginRight: 15,
  },
});
