import { StyleSheet, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";

const InitiatedTradeScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader heading="Trade Initiated" />
    </View>
  );
};

export default InitiatedTradeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
