import { StyleSheet, View } from "react-native";
import ScreenHeader from "../../components/ScreenHeader";

const KYCScreen = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader heading="KYC Verification" />
    </View>
  );
};

export default KYCScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
