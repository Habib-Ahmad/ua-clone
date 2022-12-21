import { createRef, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";

const ConfirmPINScreen = ({ route, navigation }) => {
  const value = route.params?.["value"];

  const {
    state: { loading },
  } = useGlobalContext();

  const [error, setError] = useState("");
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [digit3, setDigit3] = useState();
  const [digit4, setDigit4] = useState();
  const pin = digit1 + digit2 + digit3 + digit4;

  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();

  const handlePress = async () => {
    setError("");
    if (pin !== value) {
      setError("Pin does not match");
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

          <FourDigitInput
            {...{
              digit1,
              digit2,
              digit3,
              digit4,
              setDigit1,
              setDigit2,
              setDigit3,
              setDigit4,
              ref1,
              ref2,
              ref3,
              ref4,
            }}
          />

          <Text style={styles.error}>{error}</Text>
        </ScrollView>
      </View>

      <Button
        title="Continue"
        onPress={handlePress}
        disabled={pin.length !== 4}
        loading={loading}
      />
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
