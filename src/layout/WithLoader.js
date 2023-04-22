import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useGlobalContext } from "../context/context";
import { colors } from "../utils/colors";

const withLoader = (Stack) => {
  const WithLoader = (props) => {
    const {
      state: { loading },
    } = useGlobalContext();

    return (
      <>
        <Stack.Navigator {...props} screenOptions={{ headerShown: false }} />
        {loading && (
          <View style={styles.container}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}
      </>
    );
  };

  return WithLoader;
};

export default withLoader;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
});
