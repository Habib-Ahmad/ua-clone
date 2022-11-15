import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../utils/colors";

const Button = ({ title, backgroundColor, ...others }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} {...others}>
      <View
        style={[
          styles.button,
          { backgroundColor: backgroundColor ? backgroundColor : colors.primary },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

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
    backgroundColor: "#AEDEF4",
  },
  text: {
    color: "#fff",
    fontSize: 15,
    textAlign: "center",
    height: "100%",
    textAlignVertical: "center",
  },
});
