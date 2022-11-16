import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../../utils/colors";

const Input = ({ label, ...others }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...others} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 65,
    marginHorizontal: 5,
    flexShrink: 1,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.primary,
  },
  label: {
    position: "absolute",
    top: -12,
    left: "5%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    height: 20,
    backgroundColor: colors.bg,
    color: colors.primary,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: "100%",
    padding: 20,
  },
});
