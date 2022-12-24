import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";
import { getPushNotificationToken } from "../../functions";
import { colors } from "../../utils/colors";
import store from "../../utils/store";

const SigninScreen = ({ navigation }) => {
  const {
    state: { loading },
    dispatch,
  } = useGlobalContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const filledAllFields = email && password;

  const handlePress = async () => {
    const deviceToken = await getPushNotificationToken();
    axios
      .post(urls.auth.login, {
        username: email.trim(),
        password,
        deviceToken,
      })
      .then(async (res) => {
        dispatch({
          type: actions.login,
          payload: res.data.tokens,
        });
        await store.setRefreshToken(res.data.tokens.refreshToken);
        await store.setRefreshExpiry(res.data.tokens.refreshExpiry);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithLogo
          heading="Sign In"
          paragraph="This is the name we will use to address you"
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

      <Button
        title="Continue"
        onPress={handlePress}
        disabled={!filledAllFields}
        loading={loading}
      />
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
