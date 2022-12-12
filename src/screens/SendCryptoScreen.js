import { StyleSheet, Text, View } from "react-native";
import BTC from "../assets/BTC";
import Button from "../components/input/Button";
import Input from "../components/input/Input";
import ScreenHeader from "../components/ScreenHeader";
import { colors } from "../utils/colors";

const SendCryptoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader {...navigation} heading="Send (BTC)" />

      <View style={styles.iconWrapper}>
        <BTC />
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.crypto}>BTC</Text>
        <Text style={styles.balance}>Available balance: $280,000.00</Text>

        <Input label="Recipient Address" />
        <View style={styles.space} />
        <Input label="Amount" icon={<Text style={styles.max}>max</Text>} />
        <View style={styles.space} />

        <Text style={styles.total}>Total offered Amount: 0 BTC (USD)</Text>
      </View>

      <Button title="Continue" onPress={() => navigation.navigate("ConfirmSendCryptoScreen")} />
    </View>
  );
};

export default SendCryptoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  crypto: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
    marginBottom: 30,
  },
  balance: {
    textAlign: "center",
    color: colors.textLight,
    marginBottom: 40,
  },
  space: {
    height: 40,
  },
  max: {
    color: colors.textLight,
  },
  total: {
    textAlign: "center",
  },
});
