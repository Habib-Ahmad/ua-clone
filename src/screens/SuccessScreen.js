import { StyleSheet, Text, View } from "react-native";
import Success from "../assets/Success";
import Button from "../components/input/Button";
import { colors } from "../utils";

export default function SuccessScreen({ route, navigation }) {
  const { text, route: to } = route.params;

  const handlePress = () => {
    navigation.navigate(to);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.logo}>
          <Success />
          <Text style={styles.text}>{text}</Text>
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
    fontSize: 21,
    textAlign: "center",
    color: colors.primary,
    fontWeight: "600",
  },
});
