import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils";

const ImageButton = ({ title, disabled, ...others }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} disabled={disabled} {...others}>
      <View style={styles.button}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ImageButton;

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
    borderWidth: 1,
    borderColor: colors.primaryDark,
    backgroundColor: colors.white,
  },
  text: {
    color: colors.primaryDark,
    fontSize: 15,
    textAlign: "center",
    height: "100%",
    textAlignVertical: "center",
  },
});
