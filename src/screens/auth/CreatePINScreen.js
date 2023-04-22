import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";

const CreatePINScreen = ({ route, navigation }) => {
  const otp = route.params?.["otp"];

  const [pin, setPin] = useState("");

  const handlePress = () => {
    navigation.navigate("ConfirmPINScreen", { value: pin, otp });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            heading="Create new pin"
            paragraph="Add a unique pin number to make your payment more secure"
          />

          <FourDigitInput setValue={setPin} secure />
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
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
});
