import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";
import PhoneInput from "react-native-phone-input";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { colors } from "../../utils/colors";
import countries from "../../utils/countries";

const GetStarted = ({ navigation }) => {
  const {
    state: { loading },
    dispatch,
  } = useGlobalContext();

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
    dispatch({ type: actions.setLoading, payload: true });
    await axios.post(urls.auth.register, { phoneNumber }).then(() => {
      dispatch({ type: actions.setLoading, payload: false });
      navigation.navigate("OTPScreen", { phoneNumber });
    });
  };

  if (!countryList.length) {
    return <ActivityIndicator size={40} color={colors.primary} style={styles.activity} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView style={styles.content}>
          <ScreenHeaderWithLogo
            heading="Get Started"
            paragraph={`Welcome to ultra,${"\n"}please verify your phone number to continue`}
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

          <Text style={styles.policy}>
            By continuing you accept our<Text style={styles.link}> Privacy Policy </Text>and
            <Text style={styles.link}> Terms of Use </Text>
          </Text>
        </ScrollView>
      </View>

      <Button
        title="Send OTP"
        onPress={handlePress}
        disabled={!phoneNumber.length}
        loading={loading}
      />
    </View>
  );
};

export default GetStarted;

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
  activity: {
    flex: 1,
  },
});
