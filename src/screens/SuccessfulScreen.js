import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import Mark from "../assets/Mark";
import Button from "../components/input/Button";
import ButtonLight from "../components/input/ButtonLight";
import { colors } from "../utils/colors";

export default function SuccessfulScreen({ route }) {
  const { amount, type, crypto, cryptoValue, name } = route?.params || {};

  const handePress = () => {};
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.centeredBox}>
          <Mark />

          {crypto === "btc" && (
            <View>
              <Text style={styles.amountStyle}>{cryptoValue}</Text>
              <Text style={styles.successMessage}>have been successfully {"\n"} purchased</Text>
            </View>
          )}

          {type === "withdraw" && (
            <View>
              <Text style={styles.amountStyle}>${amount}</Text>
              <Text style={styles.successMessage}>have been successfully {"\n"} withdrawn</Text>
            </View>
          )}

          {type === "topup" && (
            <View>
              <Text style={[styles.successMessage, styles.bankAdded]}>Bank Added Succesfully</Text>
            </View>
          )}

          {type === "report" && (
            <View>
              <Text style={styles.successText}>Report Sent</Text>
              <Text style={styles.successMessage}>We will get back to you {"\n"} shortly. Thank you for {"\n"} your understanding</Text>
            </View>
          )}

          {type === "swap" && (
            <View>
              <Text style={styles.successText}>0.234 BTC</Text>
              <Text style={styles.successMessage}>have been successfully {"\n"} Swaped</Text>
            </View>
          )}

          {type === "transfer" && (
            <View>
              <Text style={styles.amountStyle}>${amount}</Text>
              <Text style={styles.successMessage}>have been successfully {"\n"} sent to</Text>
              <Text style={styles.recipientName}>{name}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.okBtn}>
        {type === "swap" && (
          <ButtonLight
            title="View Details"
            onPress={handePress}
            backgroundColor={colors.primaryLight}
          />
        )}

        {crypto && (
          <ButtonLight
            title="View Details"
            onPress={handePress}
            backgroundColor={colors.primaryLight}
          />
        )}

        <Button title="Ok, thanks" onPress={handePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    justifyContent: "center", 
    alignItems: "center", 
    flex: 1,
  },
  centeredBox: {
    width: Dimensions.get("window").width * 0.7,
    alignItems: "center",
    backgroundColor: colors.primaryLight,
    padding: 30,
    paddingVertical: 60,
    borderRadius: 35,
  },
  amountStyle: {
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 30,
    color: colors.primary,
    textAlign: "center",
  },
  successMessage: {
    fontSize: 16,
    textAlign: "center",
  },
  okBtn: {
    bottom: 20,
  },
  bankAdded: {
    marginVertical: 30,
  },
  successText: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: "10%",
    color: colors.primary,
  },
  recipientName: {
    fontWeight: "700",
    fontSize: 14,
    textAlign: "center",
    marginTop: 20,
    color: colors.primary,
  },
});
