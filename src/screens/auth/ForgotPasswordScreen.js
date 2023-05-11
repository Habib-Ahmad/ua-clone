import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-input";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { colors } from "../../utils";
import countries from "../../utils/countries";

const ForgotPasswordScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const getValidCountries = async () => {
      const _countries = await axios.get(urls.system.countries).then((res) => res.data.data);
      const abbreviations = _countries.map((country) => country.abbreviation.toLowerCase());
      const _countryList = [];

      abbreviations.forEach((abb) => {
        if (abb === "uk") abb = "gb";
        const country = countries.find((country) => country.iso2 === abb);
        _countryList.push(country);
      });
      setCountryList(_countryList);
    };
    getValidCountries();
  }, []);

  const handlePress = async () => {
    await axios.post(urls.auth.forgotPassword, { phoneNumber }).then(() => {
      navigation.navigate("OTPScreen", { phoneNumber });
    });
  };

  if (!countryList.length) {
    return <ActivityIndicator size={40} color={colors.primary} style={styles.activity} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            heading="Forgot password"
            paragraph="Enter your phone number to receive an OTP"
          />

          <View style={styles.inputWrapper}>
            <Text style={styles.label}>Phone</Text>
            <PhoneInput
              style={styles.input}
              initialCountry="ng"
              countriesList={countryList}
              textStyle={{ color: colors.textLight }}
              onChangePhoneNumber={(e) => setPhoneNumber(e)}
            />
          </View>
        </ScrollView>
      </View>

      <Button title="Continue" onPress={handlePress} disabled={!phoneNumber.length} />
    </View>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
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
  activity: {
    flex: 1,
  },
});
