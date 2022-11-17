import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const SigninScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const filledAllFields = email && password;

  const handlePress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo {...navigation} heading="Sign In" />

        <Text style={styles.text}>This is the name we will use to address you</Text>

        <View style={styles.wrapper}>
          <Input label="E-mail" onChangeText={setEmail} value={email} />

          <View style={styles.space} />

          <Input label="Password" secureTextEntry onChangeText={setPassword} value={password} />

          {email && error ? <Text style={styles.error}>This email is invalid</Text> : null}
        </View>
      </ScrollView>
      <Button title="Continue" onPress={handlePress} disabled={!filledAllFields} />
    </View>
  );
};

export default SigninScreen;

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
  space: {
    width: 30,
    height: 30,
  },
  error: {
    color: colors.red,
    marginLeft: 15,
  },
});
