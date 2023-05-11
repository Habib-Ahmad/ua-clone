import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "../components/input/Button";
import FourDigitInput from "../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../components/ScreenHeaderWithLogo";

const EnterPinScreen = ({ navigation }) => {
  const [pin, setPin] = useState("");

  //   const { name, info } = route?.params || {};

  const handlePress = () => {
    navigation.navigate("SucessfulScreen", {
      type: "swap",
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            heading="Enter pin"
            paragraph="Input your pin to complete the transaction"
          />

          <FourDigitInput setValue={setPin} secure />
        </ScrollView>
      </View>

      <Button title="Continue" onPress={handlePress} disabled={pin.length !== 4} />
    </View>
  );
};

export default EnterPinScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
});
