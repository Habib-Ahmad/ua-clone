import { StyleSheet, View } from "react-native";
import TopupBlue from "../../assets/TopupBlue";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeader from "../../components/ScreenHeader";

const TopupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScreenHeader heading="Top up" />

        <View style={styles.iconWrapper}>
          <TopupBlue />
        </View>

        <View style={styles.inputWrapper}>
          <Input label="Enter Amount" keyboardType="numeric" />
        </View>
      </View>

      <Button title="Continue" />
    </View>
  );
};

export default TopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
  },
  iconWrapper: {
    marginTop: 10,
    marginBottom: 80,
    alignItems: "center",
  },
  inputWrapper: {
    paddingHorizontal: "5%",
  },
});
