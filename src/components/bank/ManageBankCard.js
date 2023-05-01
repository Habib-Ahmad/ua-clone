import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Times from "../../assets/Times";
import { colors } from "../../utils";
import Icon from "../withdraw/Icon";

export default function ManageBankCard({ bank, accountNumber }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.flex}>
        <View>
          <Icon width={"50"} height={"50"} type="bank" />
        </View>
        <View style={styles.bankInfo}>
          <Text style={styles.bankStyle}>{bank}</Text>
          <Text style={styles.accountNumber}>* * * {accountNumber}</Text>
        </View>
        <View style={styles.closeBtn}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
            <Times width="30" height="30" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: "5%",
  },
  flex: {
    flexDirection: "row",
    marginVertical: "1%",
    borderWidth: 1,
    padding: 20,
    borderRadius: 10,
    borderColor: colors.textLight,
  },
  bankInfo: {
    marginLeft: "3%",
    justifyContent: "space-between",
    flex: 1,
  },
  bankStyle: {
    fontSize: 16,
    fontWeight: "500",
  },
  accountNumber: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.textLight,
  },
  closeBtn: {
    justifyContent: "center",
  },
});
