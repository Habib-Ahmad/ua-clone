import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import avatar from "../assets/avatar.jpg";
import BTC from "../assets/BTC";
import Shopping from "../assets/Shopping";
import Button from "../components/input/Button";
import ScreenHeader from "../components/ScreenHeader";
import Icon from "../components/withdraw/Icon";
import { colors } from "../utils/colors";

export default function ReviewSummaryScreen({ route }) {
  const { crypto, withdraw, transfer, name, info } = route?.params || {};

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

  const handlePress3 = () => {
    navigation.navigate("SuccessfulScreen", {
      type: "transfer",
      name: name,
      amount: "1985.0",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenHeader {...navigation} heading="Review Summary" />
      <ScrollView>
        {withdraw && (
          <View style={styles.box}>
            <Icon width="100" height="100" type="bank" />

            <View style={styles.wrapper}>
              <Text style={styles.from}>From</Text>
              <View style={styles.flexRow}>
                <View>
                  <Icon width="47" height="47" />
                </View>
                <View style={styles.ultraBox}>
                  <Text style={styles.ultra}>Ultra {withdraw}</Text>
                  <Text style={styles.balance}>Available balance: $280,00.0</Text>
                </View>
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.from}>To</Text>

              <View style={styles.flexRow}>
                <View>
                  <Icon width="50" height="50" type={"bank"} />
                </View>
                <View style={styles.ultraBox}>
                  <Text style={styles.ultra}>United Bank Of Africa </Text>
                  <Text style={styles.accountNumber}>* * * 4762</Text>
                </View>
              </View>
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
          </View>
        )}

        {crypto && (
          <View style={styles.box}>
            <View style={styles.centeredIcon}>
              <Shopping />
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.from}>From</Text>
              <View style={styles.flexRow}>
                <View>
                  <Icon width="47" height="47" />
                </View>
                <View style={styles.ultraBox}>
                  <Text style={styles.ultra}>Ultra {withdraw}</Text>
                  <Text style={styles.balance}>Available balance: $280,00.0</Text>
                </View>
              </View>
            </View>

            <View style={styles.wrapper}>
              <Text style={styles.from}>To</Text>

              <View style={styles.flexRow}>
                <View>
                  <BTC width={"50"} height={"50"} />
                </View>
                <View style={styles.ultraBox}>
                  <Text style={styles.ultra}>BTC </Text>
                  <Text style={styles.accountNumber}>0.004 BTC</Text>
                </View>
              </View>
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
                <Text style={styles.label}>Crypto Value</Text>
                <Text style={styles.totalValue}>$2000.0</Text>
              </View>
            </View>
          </View>
        )}

        {transfer && (
          <View style={styles.box}>
            <View style={styles.headerTop}>
              <Image source={avatar} style={styles.imageStyle} />
              <Text style={styles.heading}>{name}</Text>
              <Text style={styles.paragraph}>{info}</Text>
            </View>

            <View style={[styles.wrapper, styles.detailsBox]}>
              <View style={styles.flexRow}>
                <Text style={styles.label}>Amount</Text>
                <Text style={styles.amountValue}>$2000.0</Text>
              </View>

              <View style={styles.flexRow}>
                <Text style={styles.label}>Fee</Text>
                <Text style={[styles.feeValue, styles.transferFee]}>-$15.0</Text>
              </View>

              <View style={styles.flexRow}>
                <Text style={styles.label}>Total</Text>
                <Text style={styles.totalValue}>$1985.0</Text>
              </View>
            </View>
            <Text style={styles.noteHeading}>Note.</Text>
            <Text style={styles.noteInfo}>
              Lorem ipsum dolor sit amet consectetur. Nec malesuada pellentesque duivestibulum
              sollicitudin tempor nibh.
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.btnStyle}>
        {withdraw && <Button title={"Withdraw"} onPress={handlePress} />}

        {crypto && <Button title={"Buy"} onPress={handlePress2} />}

        {transfer && <Button title={"Confirm and Send"} onPress={handlePress3} />}
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
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.primary
  },

  box: {
    marginTop: 30,
    marginHorizontal: "5%",
  },
  label: {
    fontSize: 16,
    flex: 1,
    fontWeight: "500",
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
    fontSize: 15,
    fontWeight: "300",
  },
  feeValue: {
    color: colors.green,
    fontSize: 16,
    fontWeight: "700",
  },
  transferFee: {
    color: colors.red,
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
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  headerTop: {
    alignSelf: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 15,
    fontWeight: "800",
    marginTop: 10,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "500",
  },
  noteHeading: {
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 10,
  },
  noteInfo: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textLight,
  },

  centeredIcon: {
    alignSelf: "center",
  },
});
