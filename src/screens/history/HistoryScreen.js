import { StyleSheet, Text, View } from "react-native";
import Input from "../../components/input/Input";
import HistoryTabs from "../../stacks/HistoryTabs";

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingWrapper}>
        <Text style={styles.heading}>History</Text>
      </View>

      <View style={styles.wrapper}>
        <Input label="Search" />
      </View>

      <HistoryTabs />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    paddingTop: 40,
  },
  headingWrapper: {
    position: "absolute",
    top: 60,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  heading: {
    fontWeight: "600",
    fontSize: 18,
  },
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 80,
    marginBottom: 40,
  },
});
