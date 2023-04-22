import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils";
import store from "../../utils/store";

const OTPScreen = ({ route, navigation }) => {
  const {
    state: { loading },
    dispatch,
  } = useGlobalContext();
  const phoneNumber = route.params?.["phoneNumber"];
  const prevRoute = useNavigationState((state) => state.routes[state.routes.length - 2]).name;

  const [timer, setTimer] = useState(59);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prev) => {
        prev <= 1 && clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const resend = async () => {
    axios.post(urls.auth.register, { phoneNumber }).then(() => {
      navigation.navigate("OTPScreen", { phoneNumber });
    });
    setTimer(59);
  };

  const handlePress = async () => {
    if (prevRoute === "ForgotPasswordScreen") {
      navigation.navigate("ResetPasswordScreen", { phoneNumber, otp });
      return;
    }

    if (prevRoute === "ForgotPINScreen") {
      navigation.navigate("CreatePINScreen", { otp });
      return;
    }

    await axios.post(urls.auth.verifyOTP, { phoneNumber, otp }).then(async (res) => {
      dispatch({
        type: actions.setAccessToken,
        payload: { token: res.data.token.accessToken, expiry: res.data.token.accessExpiry },
      });
      await store.setRefreshToken(res.data.token.refreshToken);
      await store.setRefreshExpiry(res.data.token.refreshExpiry);
      navigation.navigate("ReasonScreen");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            heading="OTP Verification"
            paragraph={phoneNumber && `Code has been sent to ${phoneNumber}`}
          />

          <FourDigitInput setValue={setOtp} secure />

          <View style={styles.timer}>
            <TouchableOpacity style={styles.resend} onPress={resend}>
              <Text style={{ color: timer < 1 ? colors.primary : colors.textLight }}>
                Resend code
              </Text>
            </TouchableOpacity>
            <Text>00:{timer < 10 ? `0${Math.abs(timer)}` : timer}</Text>
          </View>
        </ScrollView>
      </View>

      <Button
        title="Continue"
        onPress={handlePress}
        disabled={otp.length !== 4}
        loading={loading}
      />
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  timer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  resend: {
    marginRight: 10,
  },
});
