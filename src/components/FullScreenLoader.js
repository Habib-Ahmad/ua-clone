import { ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../utils/colors";

const FullScreenLoader = () => {
  return <ActivityIndicator size={40} color={colors.primary} style={styles.activity} />;
};

export default FullScreenLoader;

const styles = StyleSheet.create({
  activity: {
    flex: 1,
  },
});
