import { StyleSheet, Text, View } from "react-native";
import Success from "../../assets/Success";
import Button from "../../components/input/Button";
import { colors } from "../../utils";

export default function SuccessScreen({ navigation }) {
  const handlePress = () => {
    navigation.navigate("SigninScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Success />
          <Text style={styles.text}>Password reset successfully</Text>
        </View>
      </View>
      <Button title="Ok, thanks" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    backgroundColor: colors.greyLight,
    borderRadius: 35,
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 40,
  },
  text: {
    marginTop: 40,
    fontSize: 14,
  },
});
