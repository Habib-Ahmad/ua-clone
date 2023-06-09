import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils";

const ButtonLight = ({ title, disabled, backgroundColor, ...others }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} disabled={disabled} {...others}>
      <View
        style={[
          styles.button,
          { backgroundColor: disabled ? colors.greyDark : backgroundColor || colors.primary },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonLight;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    margin: 10,
    height: 52,
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 40,
    backgroundColor: colors.primaryDark,
  },
  text: {
    color: colors.primary,
    fontSize: 15,
    textAlign: "center",
    height: "100%",
    textAlignVertical: "center",
  },
});
