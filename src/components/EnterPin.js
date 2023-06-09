import { StyleSheet, View } from "react-native";
import FourDigitInput from "./input/FourDigitInput";
import ScreenHeaderWithLogo from "./ScreenHeaderWithLogo";

const EnterPin = ({ setPin }) => {
  return (
    <View style={styles.container}>
      <ScreenHeaderWithLogo
        heading="Enter pin"
        paragraph="Enter your pin to complete the transaction"
        noBackButton
      />

      <FourDigitInput setValue={setPin} secure />
    </View>
  );
};

export default EnterPin;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
