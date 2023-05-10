import { ActivityIndicator, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { colors } from "../utils";

const Loader = ({ loading }) => {
  if (!loading) return null;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ActivityIndicator color={colors.primary} size={40} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000026",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10000,
  },
});
