import { createRef, useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, View } from "react-native";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";

const CreatePINScreen = ({ navigation }) => {
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [digit3, setDigit3] = useState();
  const [digit4, setDigit4] = useState();
  const pin = digit1 + digit2 + digit3 + digit4;

  const ref1 = createRef();
  const ref2 = createRef();
  const ref3 = createRef();
  const ref4 = createRef();

  const handlePress = () => {
    navigation.navigate("ConfirmPINScreen");
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <ScreenHeaderWithLogo
            {...navigation}
            heading="Create new pin"
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
        </ScrollView>
      </View>

      <Button title="Continue" onPress={handlePress} disabled={pin.length !== 4} />
    </View>
  );
};

export default CreatePINScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
});
