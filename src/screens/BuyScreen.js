import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import BTC from "../assets/BTC";
import Button from "../components/input/Button";
import Input from "../components/input/Input";
import ScreenHeader from "../components/ScreenHeader";
import { colors } from "../utils/colors";

export default function BuyScreen() {
  const navigation = useNavigation();

  const handleContinue = () => {
    navigation.navigate("ReviewSummaryScreen", { crypto: "btc" });
  };

  return (
    <View style={styles.container}>
      <ScreenHeader {...navigation} heading={"Buy"} />

      <View style={styles.wrapper}>
        <TouchableOpacity activeOpacity={0.6} style={styles.currencyButton}>
          <Text style={styles.currencyText}>USD</Text>
        </TouchableOpacity>
        <View style={styles.currencyBox}>
          <BTC width={"100"} height={"100"} />
        </View>
        <Text style={styles.balance}>≈1.285 BTC</Text>
        <Text style={styles.price}>$20,000</Text>

        <View style={styles.inputBox}>
          <Input label={"Amount "} placeholder={"Enter Amount"} />
        </View>
      </View>
      <View style={styles.ButtonStyle}>
        <Button backgroundColor={colors.primary} title="Continue" onPress={handleContinue} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    paddingHorizontal: "5%",
  },
  currencyButton: {
    borderWidth: 1,
    alignSelf: "center",
    padding: "3%",
    borderRadius: 50,
    paddingHorizontal: "7%",
    borderColor: colors.text,
  },
  currencyText: {
    fontSize: 16,
    fontWeight: "700",
  },
  currencyBox: {
    alignSelf: "center",
    marginTop: "5%",
  },
  balance: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    marginTop: "3%",
    marginBottom: "2%",
  },
  price: {
    fontSize: 14,
    fontWeight: "300",
    textAlign: "center",
  },
  inputBox: {
    marginTop: "15%",
  },

  ButtonStyle: {
    position: "absolute",
    bottom: 20,
    right: 0,
    left: 0,
  },
});
