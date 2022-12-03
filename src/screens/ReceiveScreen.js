import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Copy from "../assets/Copy";
import ShareButton from "../assets/ShareButton";
import BTCIcon from "../components/currency/BTCIcon";
import ScreenHeaderWithoutLogo from "../components/ScreenHeaderWithoutLogo";
import { colors } from "../utils/colors";

export default function ReceiveScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <ScreenHeaderWithoutLogo {...navigation} heading={"Receive"} />
      <View style={styles.box}>
        <View>
          <BTCIcon width={80} height={80} />
        </View>
        <Text style={styles.heading}>BTC</Text>
        <Text style={styles.paragraph}>Available balance: $280,00.0</Text>
        <Text style={styles.address}>0x995da37d0d08bab79779731ae275.....</Text>
      </View>
      <View style={styles.flexRow}>
        <TouchableOpacity activeOpacity={0.6}>
          <Copy width={"60"} height={"60"} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <ShareButton width={"60"} height={"60"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
    alignSelf: "center",
    marginTop: "10%",
  },
  box: {
    alignItems: "center",
    marginHorizontal: "5%",
  },
  address: {
    fontSize: 14,
    fontWeight: "500",
  },
  heading: {
    fontSize: 17,
    fontWeight: "700",
    marginTop: "5%",
    color: colors.primary,
  },
  paragraph: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textLight,
    marginTop: "5%",
    marginBottom: "7%",
  },
});
