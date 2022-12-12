import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BTC from "../../assets/BTC";
import Pen from "../../assets/Pen";
import Button from "../../components/input/Button";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

const ConfirmSendCryptoScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScreenHeader heading="Confirm" {...navigation} />

      <View style={styles.iconWrapper}>
        <BTC />
      </View>

      <View style={styles.wrapper}>
        <Text style={styles.crypto}>1.285 BTC</Text>
        <Text style={styles.balance}>$16,2456.89</Text>

        <Text style={styles.from}>From</Text>
        <View style={styles.info}>
          <Image style={styles.icon} source={require("../../assets/transaction-user.png")} />
          <View>
            <Text>Adamu sherif</Text>
            <Text>0x995da37d0d08bab797797.....</Text>
          </View>
        </View>

        <Text style={styles.from}>To</Text>
        <View style={styles.info}>
          <Image style={styles.icon} source={require("../../assets/transaction-user.png")} />
          <Text>0x995da37d0d08bab797797.....</Text>
          <TouchableOpacity style={styles.edit} activeOpacity={0.6}>
            <Pen />
          </TouchableOpacity>
        </View>

        <View style={styles.details}>
          <View style={styles.detail}>
            <Text style={styles.detailText1}>Network fee</Text>
            <Text style={styles.detailText2}>0.24 BTC</Text>
          </View>
          <View style={styles.detail}>
            <Text style={styles.detailText1}>Max Total</Text>
            <Text style={styles.detailText3}>0.24 BTC</Text>
          </View>
        </View>
      </View>

      <Button title="Send" />
    </View>
  );
};

export default ConfirmSendCryptoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20,
  },
  iconWrapper: {
    alignItems: "center",
    marginBottom: 20,
  },
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
  },
  crypto: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  balance: {
    textAlign: "center",
    color: colors.textLight,
    marginBottom: 40,
  },
  from: {
    color: colors.textLight,
    marginBottom: 10,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  icon: {
    marginRight: 10,
  },
  edit: {
    marginLeft: "auto",
  },
  details: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.greyLight,
    padding: 20,
  },
  detail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  detailText1: {
    color: colors.textLight,
    fontWeight: "500",
  },
  detailText2: {
    color: colors.primary,
    fontWeight: "600",
  },
  detailText3: {
    fontWeight: "600",
  },
});
