import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Buy from "../assets/Buy";
import Receive from "../assets/Receive";
import Send from "../assets/Send";
import Swap from "../assets/Swap";
import { colors } from "../utils/colors";

const CryptoActions = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <Send />
        <Text style={styles.text}>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <Receive />
        <Text style={styles.text}>Receive</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <Buy />
        <Text style={styles.text}>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
        <Swap />
        <Text style={styles.text}>Swap</Text>
      </TouchableOpacity>
    </>
  );
};

export default CryptoActions;

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    marginTop: 5,
    textAlign: "center",
  },
});
