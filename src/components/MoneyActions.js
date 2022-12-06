import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Topup from "../assets/Topup";
import Transfer from "../assets/Transfer";
import Withdraw from "../assets/Withdraw";
import { colors } from "../utils/colors";

const MoneyActions = ({ navigate }) => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigate("TopupScreen")}>
        <Topup />
        <Text style={styles.text}>Topup</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <Transfer />
        <Text style={styles.text}>Transfer</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
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
