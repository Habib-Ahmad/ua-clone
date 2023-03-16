import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

const AddFiatWalletScreen = ({ navigation }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getValidCountries = async () => {
      await axios.get(urls.system.countries).then((res) => setCountries(res.data.data));
    };
    getValidCountries();
  }, []);

  const addWallet = (id) => {
    Alert.alert("Add Wallet", "Do you want to add this wallet to your account?", [
      {
        text: "cancel",
      },
      {
        text: "ok",
        onPress: async () =>
          await axios.post(urls.fiat.baseUrl, { countryId: id }).then((res) => {
            console.log(res);
            // navigation.navigate("HomeScreen");
          }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <ScreenHeader heading="Add New Wallet" />

      <View style={styles.wrapper}>
        {!countries.length ? (
          <ActivityIndicator size={40} color={colors.primary} style={styles.loader} />
        ) : (
          <View style={styles.countries}>
            {countries.map((country) => (
              <TouchableOpacity
                key={country.id}
                style={styles.country}
                onPress={() => addWallet(country.id)}
              >
                <Text style={styles.symbol}>{country?.currency?.symbol.slice(0, 1)}</Text>
                <Text style={styles.name}>{country?.currency?.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default AddFiatWalletScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  loader: {
    flex: 0.6,
  },
  countries: {},
  country: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    elevation: 10,
    shadowOpacity: 1,
  },
  symbol: {
    backgroundColor: colors.primaryLight,
    color: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: "hidden",
    lineHeight: 45,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
    marginRight: 15,
  },
  name: {
    fontSize: 16,
    fontWeight: "400",
  },
});
