import { Dimensions, Keyboard, StyleSheet, View } from "react-native";
import DigitInput from "./DigitInput";

const FourDigitInput = ({
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
}) => {
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
  return (
    <View style={styles.container}>
      <DigitInput
        sref={ref1}
        value={digit1}
        onChangeText={(value) => handleChange(value, setDigit1, ref2)}
      />
      <DigitInput
        sref={ref2}
        value={digit2}
        onChangeText={(value) => handleChange(value, setDigit2, ref3)}
      />
      <DigitInput
        sref={ref3}
        value={digit3}
        onChangeText={(value) => handleChange(value, setDigit3, ref4)}
      />
      <DigitInput
        sref={ref4}
        value={digit4}
        onChangeText={(value) => handleChange(value, setDigit4)}
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
    width: Dimensions.get("window").width,
    paddingHorizontal: "5%",
    marginBottom: 40,
  },
});
