import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AvatarBlue from "../assets/AvatarBlue";
import { colors } from "../utils";

const Trade = ({ trade, handlePress }) => {
  return (
    <TouchableOpacity style={styles.trade} onPress={handlePress} activeOpacity={0.8}>
      <AvatarBlue />

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
        {trade.fiatTrade.fiatTradeRule.isVerified && (
          <Text style={styles.verified}>Must be verified</Text>
        )}
        {trade.fiatTrade.fiatTradeRule.completed >= 0 && (
          <View style={styles.detail}>
            <Text style={styles.title}>Minimum trade requirement:</Text>
            <Text style={styles.methodText}>{trade.fiatTrade.fiatTradeRule.completed}</Text>
          </View>
        )}
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
    fontSize: 16,
    color: colors.textLight,
  },
  text: {
    fontSize: 16,
    color: colors.textLight,
  },
  rangeText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "600",
  },
  methodText: {
    fontSize: 16,
    color: colors.textLight,
    maxWidth: "75%",
  },
  verified: {
    color: colors.green,
    fontWeight: "500",
    fontSize: 16,
  },
});
