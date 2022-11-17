import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const SignupScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const filledAllFields = firstName && lastName && email && password && confirmPassword;

  const handlePress = () => {
    // eslint-disable-next-line no-useless-escape
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setError("Email is Not Valid");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords must match");
      return;
    }

    navigation.navigate("GenderScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo {...navigation} heading="Create account" />

        <View style={styles.wrapper}>
          <View style={styles.flex}>
            <Input label="First name" onChangeText={setFirstName} value={firstName} />

            <View style={styles.space} />

            <Input label="Last name" onChangeText={setLastName} value={lastName} />

            <View style={styles.space} />

            <Input label="E-mail" onChangeText={setEmail} value={email} />

            <View style={styles.space} />

            <Input label="Password" secureTextEntry onChangeText={setPassword} value={password} />

            <View style={styles.space} />

            <Input
              label="Confirm password"
              secureTextEntry
              onChangeText={setConfirmPassword}
              value={confirmPassword}
            />
          </View>
        </View>
      </ScrollView>

      {email && error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Continue" onPress={handlePress} disabled={!filledAllFields} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flex: {
    flex: 1,
  },
  space: {
    width: 30,
    height: 30,
  },
  error: {
    color: colors.red,
    marginVertical: 15,
    textAlign: "center",
  },
});
