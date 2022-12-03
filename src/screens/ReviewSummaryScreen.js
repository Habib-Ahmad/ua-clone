import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Buy from "../assets/Buy";
import BTCIcon from "../components/currency/BTCIcon";
import Button from "../components/input/Button";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";
import Icon from "../components/withdraw/Icon";
import { colors } from "../utils/colors";

export default function ReviewSummaryScreen({ route }) {
  const { newIcon, crypto } = route?.params || {};

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("SuccessfulScreen", {
      type: "withdraw",
      amount: "1985.0",
    });
  };

  const handlePress2 = () => {
    navigation.navigate("SuccessfulScreen", {
      crypto: "btc",
      cryptoValue: "1.285 BTC",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ScreenHeaderWithoutLogo {...navigation} heading="Review Summary" />
        <Icon
          width="80"
          height="80"
          type="bank"
          iconName={newIcon && <Buy color={colors.primary} />}
        />

        <View style={styles.wrapper}>
          <Text style={styles.from}>From</Text>
          <View style={styles.flexRow}>
            <View>
              <Icon width="47" height="47" />
            </View>
            <View style={styles.ultraBox}>
              <Text style={styles.ultra}>Ultra </Text>
              <Text style={styles.balance}>Available balance: $280,00.0</Text>
            </View>
          </View>
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.from}>To</Text>
          {crypto === "btc" ? (
            <View style={styles.flexRow}>
              <View>
                <BTCIcon width={"40"} height={"40"} />
              </View>
              <View style={styles.ultraBox}>
                <Text style={styles.ultra}>BTC </Text>
                <Text style={styles.accountNumber}>0.004 BTC</Text>
              </View>
            </View>
          ) : (
            <View style={styles.flexRow}>
              <View>
                <Icon width="30" height="30" type={"bank"} />
              </View>
              <View style={styles.ultraBox}>
                <Text style={styles.ultra}>United Bank Of Africa </Text>
                <Text style={styles.accountNumber}>* * * 4762</Text>
              </View>
            </View>
          )}
        </View>

        <View style={[styles.wrapper, styles.detailsBox]}>
          <View style={styles.flexRow}>
            <Text style={styles.label}>Amount</Text>
            <Text style={styles.amountValue}>$2000.0</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.label}>Fee</Text>
            <Text style={styles.feeValue}>Free</Text>
          </View>

          <View style={styles.flexRow}>
            <Text style={styles.label}>{crypto ? "Crypto Value" : "Total"}</Text>
            <Text style={styles.totalValue}>$2000.0</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.btnStyle}>
        <Button title={crypto ? "Buy" : "Withdraw"} onPress={crypto ? handlePress2 : handlePress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  detailsBox: {
    marginBottom: 20,
    backgroundColor: colors.primaryLight,
    paddingVertical: 30,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  label: {
    fontSize: 16,
    flex: 1,
  },
  btnStyle: {
    bottom: 10,
  },

  flexRow: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 20,
  },
  ultraBox: {
    marginLeft: 10,
    justifyContent: "space-around",
  },
  ultra: {
    fontSize: 15,
    fontWeight: "800",
  },

  accountNumber: {
    fontSize: 20,
    fontWeight: "500",
  },
  feeValue: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "700",
  },

  amountValue: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },
  totalValue: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "700",
  },
});
