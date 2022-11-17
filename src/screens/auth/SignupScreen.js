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
  const [error, setError] = useState("");

  const filledAllFields = firstName && lastName && email;

  const handlePress = () => {
    // eslint-disable-next-line no-useless-escape
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setError("Email is Not Correct");
      return;
    }
    navigation.navigate("GenderScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo {...navigation} heading="Create account" />

        <Text style={styles.text}>This is the name we will use to address you</Text>

        <View style={styles.wrapper}>
          <View style={styles.flex}>
            <View style={styles.input}>
              <Input label="First name" onChangeText={setFirstName} value={firstName} />
            </View>

            <View style={styles.input}>
              <Input label="Last name" onChangeText={setLastName} value={lastName} />
            </View>

            <View style={styles.input}>
              <Input label="E-mail" onChangeText={setEmail} value={email} />
              {email && error ? <Text style={styles.error}>This email is invalid</Text> : null}
            </View>
          </View>
        </View>
      </ScrollView>
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
  text: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
    paddingHorizontal: "5%",
    lineHeight: 24,
    marginBottom: 50,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  flex: {
    flex: 1,
  },
  input: {
    marginBottom: 30,
  },
  error: {
    color: colors.red,
    marginLeft: 15,
  },
});
