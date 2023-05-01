import { StyleSheet, TextInput, View } from "react-native";
import { colors } from "../../utils";

const DigitInput = ({ sref, ...others }) => {
  return (
    <View style={styles.container}>
      <View style={styles.notch}></View>
      <TextInput
        style={styles.input}
        maxLength={1}
        keyboardType="number-pad"
        selectionColor={colors.primaryDark}
        ref={sref}
        {...others}
      />
    </View>
  );
};

export default DigitInput;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: "100%",
    height: 65,
    marginHorizontal: 5,
    flexShrink: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
  },
  notch: {
    position: "absolute",
    top: -10,
    left: "25%",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    height: 20,
    backgroundColor: colors.bg,
  },
  input: {
    width: "100%",
    height: "100%",
    fontSize: 32,
    textAlign: "center",
  },
});
