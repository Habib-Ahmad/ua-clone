import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";

const Button = ({ title, onPress, disabled, backgroundColor, loading, ...others }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      disabled={disabled}
      onPress={disabled ? undefined : onPress}
      {...others}
    >
      <View
        style={[
          styles.button,
          { backgroundColor: disabled ? colors.greyDark : backgroundColor || colors.primary },
        ]}
      >
        {!loading ? (
          <Text style={styles.text}>{title}</Text>
        ) : (
          <ActivityIndicator style={styles.activity} color={colors.white} size="large" />
        )}
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
    backgroundColor: colors.primaryDark,
  },
  text: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 30,
    textAlign: "center",
    height: "100%",
    textAlignVertical: "center",
  },
  activity: {
    height: "100%",
  },
});
