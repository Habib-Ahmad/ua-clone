import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import FourDigitInput from "../../components/input/FourDigitInput";
import Loader from "../../components/Loader";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { logout } from "../../functions";
import { colors } from "../../utils";

const WelcomeBack = ({ navigation }) => {
  const { dispatch } = useGlobalContext();

  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    await axios
      .post(urls.auth.verifyPIN, { pin })
      .then(() => {
        getData(dispatch);
        dispatch({ type: actions.setLoggedIn, payload: true });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const getData = async () => {
    await Promise.all([
      axios.get(urls.fiat.worth),
      axios.get(urls.fiat.baseUrl),
      axios.get(urls.auth.baseUrl),
      axios.get(`${urls.trades.getActiveTrades}?pageNumber=1&pageSize=10`),
    ]).then(([res1, res2, res3, res4]) => {
      dispatch({ type: actions.setFiatWorth, payload: res1.data.data });
      dispatch({ type: actions.setFiatWallets, payload: res2.data.data });
      dispatch({ type: actions.setUser, payload: res3.data.data });
      dispatch({ type: actions.setActiveTrades, payload: res4.data.data });
      setLoading(false);
    });
  };

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo
            noBackButton
            heading="Welcome back"
            paragraph="Enter your pin to log in to your account"
          />

          <View style={styles.space} />

          <FourDigitInput setValue={setPin} secure />

          <View style={styles.wrapper}>
            <TouchableOpacity onPress={() => logout(dispatch)}>
              <Text style={styles.swicthText}>Switch user</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ForgotPINScreen")}>
              <Text style={styles.forgotText}>Forgot pin?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>

      <Button title="Login" onPress={handlePress} disabled={pin.length !== 4} />
    </View>
  );
};

export default WelcomeBack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
  space: {
    width: 30,
    height: 30,
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  forgotText: {
    color: colors.primaryDark,
  },
  swicthText: {
    color: colors.red,
  },
});
