import { createRef, useEffect, useState } from "react";
import {
  Dimensions,
  Keyboard,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "../components/input/Button";
import DigitInput from "../components/input/DigitInput";
import ScreenHeader from "../components/ScreenHeader";
import { colors } from "../utils/colors";

const OTPScreen = ({ route, navigation }) => {
  const phone = route.params["phone"];

  const [timer, setTimer] = useState(30);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [input3, setInput3] = useState();
  const [input4, setInput4] = useState();

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prev) => {
        prev <= 1 && clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const ref_input1 = createRef();
  const ref_input2 = createRef();
  const ref_input3 = createRef();
  const ref_input4 = createRef();

  const handleChange = (value, setState, nextRef) => {
    setState(value);
    if (value) {
      if (nextRef) {
        nextRef.current.focus();
      } else {
        Keyboard.dismiss();
      }
    }
  };

  const resend = () => {
    setTimer(30);
  };

  const verify = () => {
    navigation.navigate("ReasonScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.content}>
          <ScreenHeader {...navigation} heading="OTP Verification" />

          <Text style={styles.text}>Code has been sent to {phone}</Text>

          <View style={styles.inputWrapper}>
            <DigitInput
              sref={ref_input1}
              value={input1}
              onChangeText={(value) => handleChange(value, setInput1, ref_input2)}
            />
            <DigitInput
              sref={ref_input2}
              value={input2}
              onChangeText={(value) => handleChange(value, setInput2, ref_input3)}
            />
            <DigitInput
              sref={ref_input3}
              value={input3}
              onChangeText={(value) => handleChange(value, setInput3, ref_input4)}
            />
            <DigitInput
              sref={ref_input4}
              value={input4}
              onChangeText={(value) => handleChange(value, setInput4)}
            />
          </View>

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

      <Button title="Continue" onPress={verify} />
    </View>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
    paddingHorizontal: "10%",
    lineHeight: 24,
    marginBottom: 50,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("window").width,
    paddingHorizontal: "5%",
    marginBottom: 40,
  },
  timer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  resend: {
    marginRight: 10,
  },
});
