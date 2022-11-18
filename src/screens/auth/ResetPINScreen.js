import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";

const ResetPINScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handlePress = () => {
    navigation.navigate("OTPScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            {...navigation}
            heading="Reset pin"
            paragraph="Add a unique pin number to make your payment more secure"
          />

          <View style={styles.inputWrapper}>
            <Input label="E-mail" value={email} onChangeText={setEmail} />
          </View>
        </ScrollView>
      </View>

      <Button title="Continue" onPress={handlePress} disabled={!email.length} />
    </View>
  );
};

export default ResetPINScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  inputWrapper: {
    paddingHorizontal: 20,
  },
});
