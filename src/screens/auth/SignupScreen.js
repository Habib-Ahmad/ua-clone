import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";

const SignupScreen = ({ navigation }) => {
  const { dispatch } = useGlobalContext();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const filledAllFields = firstName && lastName && email && password && confirmPassword;

  const handlePress = () => {
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords must match");
      return;
    }
    const reg = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$");
    if (!reg.test(email.trim())) {
      setError("Email is Not Valid");
      return;
    }

    dispatch({
      type: actions.registeringUser.set,
      payload: {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        password: password.trim(),
      },
    });

    navigation.navigate("DOBScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo heading="Create account" />

        <View style={styles.wrapper}>
          <View style={styles.flex}>
            <Input label="First name" onChangeText={setFirstName} value={firstName.trim()} />

            <View style={styles.space} />

            <Input label="Last name" onChangeText={setLastName} value={lastName.trim()} />

            <View style={styles.space} />

            <Input
              label="E-mail"
              autoCapitalize="none"
              onChangeText={setEmail}
              value={email.trim()}
            />

            <View style={styles.space} />

            <Input
              label="Password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={setPassword}
              value={password.trim()}
            />

            <View style={styles.space} />

            <Input
              label="Confirm password"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={setConfirmPassword}
              value={confirmPassword.trim()}
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
