import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "../assets/Avatar";
import { colors } from "../utils/colors";

const Trade = ({ trade, handlePress }) => {
  return (
    <TouchableOpacity style={styles.trade} onPress={() => handlePress(trade)}>
      <Avatar />

      <View style={styles.details}>
        <View style={styles.detail}>
          <Text style={styles.title}>Merchant:</Text>
          <Text style={styles.text}>
            {trade.user.firstName} {trade.user.lastName}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>Method(s):</Text>
          <Text style={styles.methodText}>
            {trade.paymentMethods.map((method, index) => (
              <Text key={method.id}>
                {method.name}
                {trade.paymentMethods.length <= index ? ", " : ""}
              </Text>
            ))}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>Range:</Text>
          <Text style={styles.rangeText}>
            {trade.currency.symbol}
            {trade.min} - {trade.currency.symbol}
            {trade.max}
          </Text>
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>Completed Trades:</Text>
          <Text style={styles.text}>{trade.user.tradeStatistic.completed}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Trade;

const styles = StyleSheet.create({
  trade: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderBottomColor: colors.greyLight,
    borderBottomWidth: 1,
  },
  details: {
    marginLeft: 30,
    maxWidth: "80%",
  },
  detail: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  title: {
    marginRight: 10,
    fontSize: 15,
  },
  text: {
    fontSize: 15,
  },
  rangeText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "600",
  },
  methodText: {
    fontSize: 15,
    maxWidth: "75%",
  },
});
