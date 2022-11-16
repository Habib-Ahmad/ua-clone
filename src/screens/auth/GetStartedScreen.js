import { useState } from "react";
import { Platform, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-input";
import Button from "../../components/input/Button";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils/colors";

const GetStarted = ({ navigation }) => {
  const [phone, setPhone] = useState("");

  const sendOTP = async () => {
    navigation.navigate("OTPScreen", { phone: phone });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.content}>
          <ScreenHeaderWithLogo {...navigation} heading="Get Started" />

          <Text style={styles.welcome}>
            Welcome to ultra,{"\n"}please verify your phone number to continue
          </Text>

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Phone</Text>
            <PhoneInput
              style={styles.input}
              initialCountry="ng"
              textStyle={{ color: colors.textLight }}
              onChangePhoneNumber={(e) => setPhone(e)}
            />
          </View>

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
  inputWrapper: {
    position: "relative",
  },
  label: {
    position: "absolute",
    zIndex: 100,
    top: -15,
    left: "10%",
    backgroundColor: "#f2f2f2",
    color: colors.primary,
    paddingHorizontal: 10,
    textAlign: "center",
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
    textDecorationLine: "underline",
  },
});
