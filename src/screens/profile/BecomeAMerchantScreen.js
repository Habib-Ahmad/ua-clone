import { Alert, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

const BecomeAMerchantScreen = ({ navigation }) => {
  const handlePress = async () => {
    await axios.post(urls.trader.baseUrl).then(async () => {
      await axios.get(urls.auth.baseUrl).then((res) => {
        const isVerified = res.data.data.isVerified;
        const text = isVerified
          ? "You are now a merchant. You can start creating trades immediately"
          : "You are now a merchant. Please procees to the KYC screen to complete your verification";
        const destination = isVerified ? "HomeScreen" : "KYCScreen";

        Alert.alert("Congratulations", text, [
          {
            text: "ok",
            onPress: () => navigation.navigate(destination),
          },
        ]);
      });
    });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Become a Merchant" />

      <View style={styles.wrapper}>
        <Text style={styles.text}>
          Merchants on the Ultra platform have the ability to create, manage and execute P2P trades
          and transactions. Users that want to become merchants, however, have to complete the
          Know-You-Customer (KYC) verification process but uploading a photo of themselves and
          providing the necessary documents before they can start trading.
        </Text>
        <Text style={styles.text}>
          Merchants still have all the features of regular users but have the additional features of
          being a merchant added on their profile.
        </Text>

        <Text style={styles.policy}>
          By continuing you accept our
          <Text style={styles.link} onPress={() => navigation.navigate("")}>
            {" "}
            Privacy Policy
          </Text>
          <Text> and </Text>
          <Text style={styles.link} onPress={() => navigation.navigate("")}>
            Terms of Use
          </Text>
        </Text>
      </View>

      <Button title="Continue" onPress={handlePress} />
    </View>
  );
};

export default BecomeAMerchantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 0.97,
  },
  text: {
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  policy: {
    flex: 1,
    textAlignVertical: "bottom",
    textAlign: "center",
    fontSize: 14,
    color: colors.textLight,
    paddingHorizontal: "20%",
    lineHeight: 24,
    marginBottom: 20,
  },
  link: {
    paddingHorizontal: 20,
    color: colors.primary,
    textDecorationLine: "underline",
  },
});
