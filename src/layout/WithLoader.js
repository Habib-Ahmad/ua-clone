import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useGlobalContext } from "../context/context";
import { colors } from "../utils";

const withLoader = (Stack) => {
  const WithLoader = (props) => {
    const {
      state: { loading },
    } = useGlobalContext();

    const isFocused = useIsFocused();

    return (
      <>
        <Stack.Navigator {...props} screenOptions={{ headerShown: false }} />
        {loading && (
          <View style={styles.container}>
            {isFocused && <StatusBar />}
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
