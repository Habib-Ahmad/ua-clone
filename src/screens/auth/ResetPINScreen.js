import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const ResetPINScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const handlePress = () => {
    navigation.navigate("OTPScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo {...navigation} heading="Reset pin" />

          <Text style={styles.text}>Add a unique pin number to make your payment more secure</Text>

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
    paddingHorizontal: 20,
  },
});
