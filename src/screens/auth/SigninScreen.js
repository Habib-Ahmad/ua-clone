import { useEffect, useState } from "react";
import { BackHandler, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigationState } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { getFiatData, getPushNotificationToken } from "../../functions";
import { colors } from "../../utils";
import store from "../../utils/store";

const SigninScreen = ({ navigation }) => {
  const { dispatch } = useGlobalContext();
  const prevRoute =
    useNavigationState((state) => state.routes[state.routes.length - 2])?.name || "";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (prevRoute !== "ConfirmPINScreen") return;

    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => true);
    return () => backHandler.remove();
  }, [prevRoute]);

  const filledAllFields = email && password;

  const handlePress = async () => {
    const deviceToken = await getPushNotificationToken();
    const appId = await SecureStore.getItemAsync("secure_deviceid");
    axios
      .post(urls.auth.login, {
        username: email.trim(),
        password,
        deviceToken,
        appId,
      })
      .then(async (res) => {
        dispatch({ type: actions.setLoading, payload: true });
        await store.setRefreshToken(res.data.tokens.refreshToken);
        await store.setRefreshExpiry(res.data.tokens.refreshExpiry);
        await getFiatData(dispatch);
        dispatch({ type: actions.login, payload: res.data.tokens });
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo
          heading="Sign In"
          paragraph="Sign in into your Ultra Account"
          noBackButton={prevRoute === "ConfirmPINScreen"}
        />

        <View style={styles.wrapper}>
          <Input
            label="E-mail"
            onChangeText={setEmail}
            value={email.trim()}
            autoCapitalize="none"
          />

          <View style={styles.space} />

          <Input
            label="Password"
            secureTextEntry
            onChangeText={setPassword}
            value={password.trim()}
            autoCapitalize="none"
          />

          <TouchableOpacity
            style={styles.forgot}
            onPress={() => navigation.navigate("ForgotPasswordScreen")}
          >
            <Text style={styles.forgotText}>Forgot password?</Text>
          </TouchableOpacity>
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
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  space: {
    width: 30,
    height: 30,
  },
  forgot: {
    marginTop: 20,
    alignItems: "flex-end",
    marginRight: 20,
  },
  forgotText: {
    color: colors.primaryDark,
  },
});
