import { useState } from "react";
import { StyleSheet, View } from "react-native";
import TopupBlue from "../../assets/TopupBlue";
import Button from "../../components/input/Button";
import Input from "../../components/input/Input";
import ScreenHeader from "../../components/ScreenHeader";
import actions from "../../context/actions";
import { useGlobalContext } from "../../context/context";

const TopupScreen = ({ navigation }) => {
  const { dispatch } = useGlobalContext();
  const [amount, setAmount] = useState("");

  const handlePress = () => {
    dispatch({ type: actions.topup.setAmount, payload: amount });
    navigation.navigate("TopupMethodScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <ScreenHeader heading="Top up" />

        <View style={styles.iconWrapper}>
          <TopupBlue />
        </View>

        <View style={styles.inputWrapper}>
          <Input
            label="Enter Amount"
            keyboardType="numeric"
            onChangeText={setAmount}
            value={amount.trim()}
          />
        </View>
      </View>

      <Button title="Continue" onPress={handlePress} />
    </View>
  );
};

export default TopupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  wrapper: {
    flex: 1,
  },
  iconWrapper: {
    marginTop: 10,
    marginBottom: 80,
    alignItems: "center",
  },
  inputWrapper: {
    paddingHorizontal: "5%",
  },
});
