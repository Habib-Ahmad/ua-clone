import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const ResetPasswordScreen = ({ route, navigation }) => {
  const phoneNumber = route.params?.["phoneNumber"];
  const code = route.params?.["otp"];

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const filledAllFields = password && confirmPassword;

  const handlePress = async () => {
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords must match");
      return;
    }

    await axios
      .post(urls.auth.resetPassword, { phoneNumber, code, newPassword: password })
      .then(() => {
        navigation.navigate("SuccessScreen");
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo heading="Reset Password" />

        <View style={styles.wrapper}>
          <View style={styles.flex}>
            <Input
              label="New password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={setPassword}
              value={password.trim()}
            />

            <View style={styles.space} />

            <Input
              label="Confirm new password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={setConfirmPassword}
              value={confirmPassword.trim()}
            />
          </View>
        </View>
      </ScrollView>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Continue" onPress={handlePress} disabled={!filledAllFields} />
    </View>
  );
};

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flex: {
    flex: 1,
    paddingTop: 40,
  },
  space: {
    width: 40,
    height: 40,
  },
  error: {
    color: colors.red,
    marginVertical: 15,
    textAlign: "center",
  },
});
