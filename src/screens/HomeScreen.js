import { StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View styles={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
  text: {
    color: "red",
  },
});
