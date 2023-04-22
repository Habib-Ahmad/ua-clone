import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BTC from "../../assets/BTC";
import Copy from "../../assets/Copy";
import qrCode from "../../assets/qr-code.png";
import ShareButton from "../../assets/ShareButton";
import ScreenHeader from "../../components/ScreenHeader";
import { colors } from "../../utils/colors";

export default function ReceiveScreen() {
  return (
    <View style={styles.container}>
      <ScreenHeader heading={"Receive"} />
      <ScrollView>
        <View style={styles.box}>
          <View>
            <BTC width={100} height={100} />
          </View>
          <Text style={styles.heading}>BTC</Text>
          <Text style={styles.paragraph}>Available balance: $280,00.0</Text>
          <Image source={qrCode} style={styles.qrCodeStylle} />
          <Text style={styles.address}>0x995da37d0d08bab79779731ae275.....</Text>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity activeOpacity={0.6} style={styles.flexOne}>
            <Copy />
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6} style={styles.flexTwo}>
            <ShareButton width={"60"} height={"60"} />
            <Text style={styles.shareText}>Share</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flexRow: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-around",
    alignSelf: "center",
    marginTop: "10%",
    paddingBottom: "5%",
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
  qrCodeStylle: {
    width: "100%",
    height: 300,
  },
  flexOne: {
    alignItems: "center",
  },
  flexTwo: {
    alignItems: "center",
  },
  copyText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },
  shareText: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 10,
  },
});
