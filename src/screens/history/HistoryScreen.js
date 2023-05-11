import { StyleSheet, View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import ScreenHeader from "../../components/ScreenHeader";
import HistoryTabs from "../../stacks/HistoryTabs";
import { colors } from "../../utils";

const HistoryScreen = () => {
  const isFocused = useIsFocused();

  return (
    <View style={styles.container}>
      {isFocused && <StatusBar style="dark" backgroundColor={colors.bg} />}

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
