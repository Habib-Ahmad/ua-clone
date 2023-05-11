import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils";

const ConfirmPINScreen = ({ route, navigation }) => {
  const value = route.params?.["value"];
  const otp = route.params?.["otp"];

  const [error, setError] = useState("");
  const [pin, setPin] = useState("");

  const handlePress = async () => {
    setError("");
    if (pin !== value) {
      setError("Pin does not match");
      return;
    }

    if (otp) {
      await axios.post(urls.auth.resetPIN, { code: otp, pin: value });
      navigation.navigate("SuccessScreen", {
        text: "PIN changed successfully",
        route: "WelcomeBackScreen",
      });
      return;
    }

    await axios.post(urls.auth.createPIN, { pin });
    navigation.navigate("SigninScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            heading="Repeat pin"
            paragraph="Add a unique pin number to make your payment more secure"
          />

          <FourDigitInput setValue={setPin} secure />

          <Text style={styles.error}>{error}</Text>
        </ScrollView>
      </View>

      <Button title="Continue" onPress={handlePress} disabled={pin.length !== 4} />
    </View>
  );
};

export default ConfirmPINScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  error: {
    color: colors.red,
    textAlign: "center",
  },
});
