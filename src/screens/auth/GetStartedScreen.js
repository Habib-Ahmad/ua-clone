import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-input";
import Button from "../../components/Button";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

const GetStarted = ({ navigation }) => {
  const [phone, setPhone] = useState("Useless Text");

  const sendOTP = async () => {
    // eslint-disable-next-line no-console
    console.log(phone);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.content}>
          <ScreenHeader {...navigation} heading="Get Started" />

          <Text style={styles.welcome}>
            Welcome to ultra,{"\n"}please verify your phone number to continue
          </Text>

          <PhoneInput
            style={styles.input}
            initialCountry="ng"
            textStyle={{ color: colors.textLight }}
            onChangePhoneNumber={(e) => setPhone(e)}
          />

          <Text style={styles.policy}>
            By continuing you accept our<Text style={styles.link}> Privacy Policy </Text>and
            <Text style={styles.link}> Terms of Use </Text>
          </Text>
        </ScrollView>
      </View>

      <Button title="Send OTP" onPress={sendOTP} />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  welcome: {
    textAlign: "center",
    fontSize: 16,
    color: colors.textLight,
    paddingHorizontal: "10%",
    lineHeight: 24,
    marginBottom: 50,
  },
  input: {
    height: 60,
    marginHorizontal: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  policy: {
    textAlign: "center",
    fontSize: 14,
    color: colors.textLight,
    paddingHorizontal: "20%",
    lineHeight: 24,
    marginBottom: 50,
  },
  link: {
    color: colors.primary,
  },
});
