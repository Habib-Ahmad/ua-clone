import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Topup from "../assets/Topup";
import Transfer from "../assets/Transfer";
import Withdraw from "../assets/Withdraw";
import { colors } from "../utils";

const MoneyActions = ({ setBalance }) => {
  const navigation = useNavigation();

  const handleWithdraw = () => {
    setBalance();
    navigation.navigate("WithdrawScreen");
  };

  const handleTopup = () => {
    setBalance();
    navigation.navigate("TopupScreen");
  };

  const handleTransfer = () => {
    setBalance();
    navigation.navigate("TransferScreen");
  };

  return (
    <>
      <TouchableOpacity activeOpacity={0.6} onPress={handleTopup}>
        <Topup />
        <Text style={styles.text}>Topup</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={handleTransfer}>
        <Transfer />
        <Text style={styles.text}>Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={handleWithdraw}>
        <Withdraw />
        <Text style={styles.text}>Withdraw</Text>
      </TouchableOpacity>
    </>
  );
};

export default MoneyActions;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    marginTop: 5,
    textAlign: "center",
  },
});
