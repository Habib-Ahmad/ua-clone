import { StyleSheet, View } from "react-native";
import FourDigitInput from "./input/FourDigitInput";
import ScreenHeaderWithLogo from "./ScreenHeaderWithLogo";

const EnterOtp = ({ setOtp }) => {
  return (
    <View style={styles.container}>
      <ScreenHeaderWithLogo
        heading="Enter OTP"
        paragraph="Enter the four digit pin you recieved"
        noBackButton
      />

      <FourDigitInput setValue={setOtp} />
    </View>
  );
};

export default EnterOtp;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
