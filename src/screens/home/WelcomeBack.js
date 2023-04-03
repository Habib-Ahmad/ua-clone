import { createRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useAuthContext } from "../../context/authContext";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";

const WelcomeBack = ({ navigation }) => {
  const { dispatch } = useAuthContext();
  const {
    state: { loading },
  } = useGlobalContext();

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
    await axios.post(urls.auth.verifyPIN, { pin }).then(() => {
      dispatch({ type: actions.setLoggedIn });
      navigation.navigate("Home");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            noBackButton
            heading="Welcome back"
            paragraph="Enter your pin to log in to your account"
          />

          <View style={styles.space} />

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
              secure: true,
            }}
          />

          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate("ForgotPINScreen")}
          >
            <Text style={styles.forgotText}>Forgot pin?</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      <Button title="Login" onPress={handlePress} disabled={pin.length !== 4} loading={loading} />
    </View>
  );
};

export default WelcomeBack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  space: {
    width: 30,
    height: 30,
  },
  forgot: {
    marginTop: 20,
    alignItems: "flex-end",
    marginRight: 20,
  },
  forgotText: {
    color: colors.primaryDark,
  },
});
