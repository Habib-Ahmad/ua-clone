import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils";

const MoneyHistoryScreen = ({ wallets }) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {wallets?.map((item) => (
          <TouchableOpacity key={item.wallet} style={styles.wallet} onPress={() => {}}>
            <Text style={styles.symbol}>{item.symbol}</Text>

            <Text style={styles.walletName}>{item.wallet}</Text>

            <View style={styles.balanceWrapper}>
              <Text style={styles.balance}>{`${item.symbol}${item.balance.replace(
                /\B(?=(\d{3})+(?!\d))/g,
                ","
              )}`}</Text>
              <Text style={styles.percentage}>{item.percentage}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MoneyHistoryScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  wallet: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  symbol: {
    backgroundColor: colors.primaryLight,
    color: colors.primary,
    width: 60,
    height: 60,
    borderRadius: 60,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 30,
  },
  walletName: {
    flex: 1,
    paddingLeft: 15,
    fontSize: 16,
  },
  balance: {
    textAlign: "right",
    fontWeight: "600",
    color: colors.primary,
  },
  percentage: {
    textAlign: "right",
    color: colors.green,
    padding: 2,
    backgroundColor: colors.greenLight,
    borderRadius: 12,
    width: 40,
    marginLeft: "auto",
  },
});
