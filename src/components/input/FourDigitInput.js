import { createRef, useEffect, useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import DigitInput from "./DigitInput";

const FourDigitInput = ({ setValue, secure }) => {
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [digit3, setDigit3] = useState();
  const [digit4, setDigit4] = useState();

  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();

  useEffect(() => {
    setValue(digit1 + digit2 + digit3 + digit4);
  }, [digit1, digit2, digit3, digit4, setValue]);

  const handleChange = (value, setState, nextRef, prevRef) => {
    setState((prevState) => {
      if (value !== "Backspace") {
        if (nextRef) {
          nextRef.current.focus();
          return value;
        } else {
          Keyboard.dismiss();
          return value;
        }
      } else {
        if (prevState) return null;

        if (prevRef) {
          prevRef.current.focus();
          return "";
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <DigitInput
        sref={ref1}
        value={digit1}
        onKeyPress={({ nativeEvent }) => handleChange(nativeEvent.key, setDigit1, ref2)}
        secureTextEntry={secure}
      />
      <DigitInput
        sref={ref2}
        value={digit2}
        onKeyPress={({ nativeEvent }) => handleChange(nativeEvent.key, setDigit2, ref3, ref1)}
        secureTextEntry={secure}
      />
      <DigitInput
        sref={ref3}
        value={digit3}
        onKeyPress={({ nativeEvent }) => handleChange(nativeEvent.key, setDigit3, ref4, ref2)}
        secureTextEntry={secure}
      />
      <DigitInput
        sref={ref4}
        value={digit4}
        onKeyPress={({ nativeEvent }) => handleChange(nativeEvent.key, setDigit4, null, ref3)}
        secureTextEntry={secure}
      />
    </View>
  );
};

export default FourDigitInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "100%",
    paddingHorizontal: "5%",
    marginBottom: 40,
  },
});
