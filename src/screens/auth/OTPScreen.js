import { createRef, useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const OTPScreen = ({ route, navigation }) => {
  const phone = route.params?.["phone"];
  const prevRoute = useNavigationState((state) => state.routes[state.routes.length - 2]).name;

  const [timer, setTimer] = useState(30);
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [digit3, setDigit3] = useState();
  const [digit4, setDigit4] = useState();
  const otp = digit1 + digit2 + digit3 + digit4;

  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prev) => {
        prev <= 1 && clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const resend = () => {
    setTimer(30);
  };

  const handlePress = () => {
    if (prevRoute === "ResetPINScreen") {
      navigation.navigate("CreatePINScreen");
    } else {
      navigation.navigate("ReasonScreen");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            {...navigation}
            heading="OTP Verification"
            paragraph={phone && `Code has been sent to ${phone}`}
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

      <Button title="Continue" onPress={handlePress} disabled={otp.length !== 4} />
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
