import { StyleSheet, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";
import HistoryTabs from "../../stacks/HistoryTabs";

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader heading="History" noBackButton />

      <HistoryTabs />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
