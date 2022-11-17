import { createRef, useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const WelcomeBack = ({ navigation }) => {
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
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <ScreenHeaderWithLogo {...navigation} heading="Welcome back" />

          <Text style={styles.text}>Enter your pin to log in to your account</Text>

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
            }}
          />
        </ScrollView>
      </View>

      <Button title="Login" onPress={handlePress} disabled={pin.length !== 4} />
    </View>
  );
};

export default WelcomeBack;

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
  space: {
    width: 30,
    height: 30,
  },
});