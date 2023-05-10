import { ScrollView, StyleSheet, View } from "react-native";
import axios from "../../api/axios";
import urls from "../../api/urls";
import Button from "../../components/input/Button";
import ScreenHeaderWithLogo from "../../components/ScreenHeaderWithLogo";
import { useGlobalContext } from "../../context/context";

const ForgotPINScreen = ({ navigation }) => {
  const {
    state: { loading },
  } = useGlobalContext();

  const handlePress = async () => {
    await axios.get(urls.auth.resetPIN);
    navigation.navigate("OTPScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView>
          <ScreenHeaderWithLogo heading="Forgot PIN" paragraph="Request an OTP to reset your PIN" />
        </ScrollView>
      </View>

      <Button title="Request OTP" onPress={handlePress} loading={loading} />
    </View>
  );
};

export default ForgotPINScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
  },
});
